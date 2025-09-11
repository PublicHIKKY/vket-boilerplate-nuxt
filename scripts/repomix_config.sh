#!/bin/bash
#
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

    # その他のレイヤー
    ["main"]="layers/main/**/*"
    ["showcases"]="layers/showcases/**/*"
    ["open-api"]="layers/open-api/**/*"
    ["vket-sso"]="layers/vket-sso/**/*"
)

# 無視するパターンを定義する場合は`IGNORES`配列を使用します。
# IGNORES=(
    # 例: ["frontend-base"]="**/test/**,**/*.spec.js"
# )

# ==============================================================================
# ▲▲▲ 編集はここまで ▲▲▲
# ==============================================================================