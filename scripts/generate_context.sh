#!/usr/bin/env bash
#
# repomixを使用して、プロジェクトのソースコードを論理的なグループ（コンテキスト）に分割し、
# Markdownファイルとして出力します。
# 生成された各ファイルのサイズをチェックし、上限を超えた場合は最後にエラーで終了します。

set -e # コマンドが失敗したら直ちにスクリプトを終了する

# --- 設定 ---
# 引数で設定ファイルが渡されなかった場合、'repomix_config.sh' をデフォルトとして使用します。
CONFIG_FILE="${1:-scripts/repomix_config.sh}"
OUTPUT_DIR="agent_contexts" # 出力ディレクトリ名
MAX_SIZE_KB=400 # ファイルサイズの上限 (KB)
# -------------


# --- スクリプト本体 ---

# 設定ファイルの存在確認
if [ ! -f "$CONFIG_FILE" ]; then
    echo "❌ エラー: 設定ファイルが見つかりません: '$CONFIG_FILE'"
    echo "使用法: $0 [設定ファイルのパス]"
    exit 1
fi

# 設定ファイルを読み込む (これにより AGENTS 配列が利用可能になります)
source "$CONFIG_FILE"

# スクリプト全体でエラー状態を追跡するフラグ
size_error_found=false
# サイズ上限を超過したファイル名を記録する配列
oversized_files=()
# 上限サイズをバイトに変換
MAX_SIZE_BYTES=$((MAX_SIZE_KB * 1024))

echo "🚀 コンテキストの生成を開始します..."
echo "設定ファイル: $CONFIG_FILE"
echo "出力ディレクトリ: $OUTPUT_DIR"
echo "ファイルサイズ上限: ${MAX_SIZE_KB}KB"
mkdir -p "$OUTPUT_DIR"

# repomixコマンドをラップする関数
run_repomix() {
    local agent_name="$1"
    local patterns="$2"
    local ignore_patterns="${3:-}" # IGNORE配列からのパターン取得、未定義なら空文字
    local output_file="$OUTPUT_DIR/${agent_name}_context.md"

    echo "--------------------------------------------------"
    echo "📦 コンテキストを生成中: ${agent_name}_context"
    
    # repomixコマンドの存在確認
    if ! command -v repomix &> /dev/null; then
        echo "❌ エラー: 'repomix' コマンドが見つかりません。"
        echo "   'gem install repomix' または 'npm install -g repomix' などでインストールしてください。"
        exit 1
    fi

    if [ -n "$ignore_patterns" ]; then
        # 無視パターンが指定されている場合、repomixに渡す
        echo "ignoreパターン: $ignore_patterns"
        repomix --include="$patterns" --ignore="$ignore_patterns" --output="$output_file" --style=markdown 
    else
        repomix --include="$patterns" --output="$output_file" --style=markdown
    fi

    # ファイルサイズのチェック
    local file_size=$(wc -c < "$output_file")
    if [ "$file_size" -gt "$MAX_SIZE_BYTES" ]; then
        local file_size_kb=$((file_size / 1024))
        echo "⚠️  警告: ${output_file} のファイルサイズ (${file_size_kb}KB) が上限 (${MAX_SIZE_KB}KB) を超えました。"
        oversized_files+=("$output_file")
        size_error_found=true
    fi
}

# AGENTS配列が設定ファイルで定義されているか確認
if [ ${#AGENTS[@]} -eq 0 ]; then
    echo "⚠️ 警告: AGENTS配列が空か、'$CONFIG_FILE'内で定義されていません。"
    echo "   コンテキストファイルは生成されません。"
fi

# 定義された各エージェントに対してrepomixを実行
for name in "${!AGENTS[@]}"; do
    run_repomix "$name" "${AGENTS[$name]}" "${IGNORES[$name]:-}"
done

echo "--------------------------------------------------"

# --- 最終チェック ---
# 1つでもサイズ超過エラーがあれば、エラーコードで終了
if [ "$size_error_found" = true ]; then
    echo "❌ 処理完了。ただし、以下のファイルがサイズ上限を超えていました:"
    for file in "${oversized_files[@]}"; do
        file_size=$(wc -c < "$file")
        file_size_kb=$((file_size / 1024))
        echo "   - $file (${file_size_kb}KB)"
    done
    echo "スクリプトはエラーコードで終了します。"
    exit 1
fi

echo "🎉 すべてのコンテキストファイルの生成が正常に完了しました！"
echo "   '$OUTPUT_DIR' ディレクトリに出力されています。"