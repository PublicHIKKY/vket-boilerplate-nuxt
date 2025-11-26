// composables/ui/use{{FeatureName}}{{UIElement}}.ts
import type { InjectionKey } from 'vue'

/**
 * {{FeatureName}} {{UIElement}} UI State
 * UI関連の状態のみ、API呼び出しなし
 * 必ずInjectionKeyを定義
 */
export const use{{FeatureName}}{{UIElement}} = () => {
  // UI状態の定義
  const isOpen = ref(false)
  const {{stateVariable}} = ref<{{StateType}} | null>(null)

  /**
   * 開く
   */
  const open = ({{param}}?: {{ParamType}}) => {
    isOpen.value = true
    {{stateVariable}}.value = {{param}} || null
  }

  /**
   * 閉じる
   */
  const close = () => {
    isOpen.value = false
    {{stateVariable}}.value = null
  }

  /**
   * トグル
   */
  const toggle = () => {
    isOpen.value = !isOpen.value
  }

  return {
    isOpen,
    {{stateVariable}},
    open,
    close,
    toggle
  }
}

export type {{FeatureName}}{{UIElement}}Composable = ReturnType<typeof use{{FeatureName}}{{UIElement}}>
export const {{featureName}}{{UIElement}}InjectionKey: InjectionKey<{{FeatureName}}{{UIElement}}Composable> = Symbol('{{kebab-case-feature}}-{{kebab-case-ui-element}}')
