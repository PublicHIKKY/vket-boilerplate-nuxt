import { getCurrentInstance } from 'vue'

// 闇魔法
/**
 * setup の中でしか呼べない
 */
export const isNuxtEnvironment = () => !!getCurrentInstance()?.appContext?.app
