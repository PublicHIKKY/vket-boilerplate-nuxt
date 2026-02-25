# このファイルで、プロジェクトのソースコードをどのように分割するかを定義します。

# --- エージェントの定義 ---
# `AGENTS`という名前の連想配列を使用します。
# キー: エージェントの識別名 (例: "controllers", "models")
# 値: 対象ファイルのglobパターン (カンマ区切り)
#
# ヒント: テストファイルを含めたい場合は、各定義に直接パターンを追加してください。
# (例: ["models"]="app/models/**/*.rb,spec/models/**/*.rb")
declare -A AGENTS
declare -A IGNORES

# ==============================================================================
# ▼▼▼ プロジェクトに合わせて、このセクションを編集してください ▼▼▼
# ==============================================================================

AGENTS=(
    # baseレイヤーの分割（論理的4分割）
    ["base-components"]="layers/base/app/components/**/*,layers/base/app/layouts/**/*,layers/base/app/pages/**/*"
    ["base-logic"]="layers/base/app/utils/**/*,layers/base/app/composables/**/*,layers/base/app/models/**/*,layers/base/app/repositories/**/*"
    ["base-infrastructure"]="layers/base/app/plugins/**/*,layers/base/app/middleware/**/*,layers/base/app/app.vue"
    ["base-tests"]="layers/base/app/test/**/*"
    ["base-config"]="layers/base/@types/**/*,layers/base/config/**/*,layers/base/i18n/**/*,layers/base/*.ts,layers/base/*.json,layers/base/server/**/*"

    # showcasesレイヤーの分割（論理的4分割）
    ["showcases-pages"]="layers/showcases/app/layouts/**/*,layers/showcases/app/pages/**/*"
    ["showcases-components"]="layers/showcases/app/components/ha/**/*, layers/showcases/app/components/hm/**/*, layers/showcases/app/components/ht/**/*, layers/showcases/app/components/ho/*"
    ["showcases-logic"]="layers/showcases/app/utils/**/*,layers/showcases/app/composables/**/*,layers/showcases/app/models/**/*,layers/showcases/app/repositories/**/*"
    ["showcases-infrastructure"]="layers/showcases/app/plugins/**/*,layers/showcases/app/middleware/**/*,layers/showcases/app/app.vue"
    ["showcases-tests"]="layers/showcases/app/test/**/*"
    ["showcases-config"]="layers/showcases/@types/**/*,layers/showcases/config/**/*,layers/showcases/i18n/**/*,layers/showcases/*.ts,layers/showcases/*.json,layers/showcases/server/**/*"

    # その他のレイヤー
    ["main"]="layers/main/**/*"
    ["open-api"]="layers/open-api/**/*"
)

# 無視するパターンを定義する場合は`IGNORES`配列を使用します。
# IGNORES=(
    # 例: ["frontend-base"]="**/test/**,**/*.spec.js"
# )

# showcases の animista コンポーネント群は1ファイルずつ context を出力する。
# 既存の showcases-components からは除外して重複とサイズ超過を防ぐ。
IGNORES["showcases-components"]="layers/showcases/app/components/ho/animista/**/*"

shopt -s nullglob
for animista_file in layers/showcases/app/components/ho/animista/*.vue; do
    animista_base="$(basename "$animista_file" .vue)"
    AGENTS["showcases-animista-${animista_base}"]="$animista_file"
done
shopt -u nullglob

# ==============================================================================
# ▲▲▲ 編集はここまで ▲▲▲
# ==============================================================================
