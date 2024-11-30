import { useI18n } from 'vue-i18n'
import { z } from 'zod'

const useValidationRules = () => {
  const i18n = useI18n()

  return {
    required: z.coerce.string().nonempty({
      message: i18n.t('validation.required'),
    }),

    /**
     * 必須(文字列)
     * ->文字列を選ばせるSelectBox等の必須チェックで使用する
     */
    stringRequired: z
      .string({
        invalid_type_error: i18n.t('validation.excluded'),
      })
      .nullable()
      .optional()
      .refine(
        val => val !== null && val !== undefined,
        i18n.t('validation.required'),
      ),

    /**
     * 必須(数値)
     * ->数値を選ばせるSelectBox等の必須チェックで使用する
     */
    numberRequired: z
      .number({
        invalid_type_error: i18n.t('validation.excluded'),
      })
      .nullable()
      .optional()
      .refine(
        val => val !== null && val !== undefined,
        i18n.t('validation.required'),
      ),

    minValue: (minimum: number) =>
      z.coerce.string().refine(x => Number(x) >= minimum, {
        message: i18n.t('validation.min_value', { min: minimum }),
      }),

    /**
     * 数値・数値を表す文字列が引数に指定された値以上。
     */
    maxValue: (maximum: number) =>
      z.coerce.string().refine(x => Number(x) <= maximum, {
        message: i18n.t('validation.max_value', { max: maximum }),
      }),

    /**
     * stringのlengthが引数に指定された値以上。
     */
    max: (maximum: number) =>
      z.coerce.string().max(maximum, {
        message: i18n.t('validation.max', { length: maximum }),
      }),

    url: z.string().url({
      message: i18n.t('validation.url'),
    }),

    /**
     * URLチェックをしたいが、空文字は通したい場合。
     */
    nonRequiredUrl: z.string().superRefine((value, ctx) => {
      if (!value) return true // 空文字/null/undefinedは、バリデーションをスキップ
      try {
        z.string()
          .url({
            message: i18n.t('validation.url'),
          })
          .parse(value)
        return true
      }
      catch (_e) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: i18n.t('validation.url'),
        })
      }
    }),

    /**
     * 値が引数の配列に含まれないこと。
     */
    excluded: <T>(excludedItems: T[]) =>
      z.unknown().refine(
        (x) => {
          const items: unknown[] = excludedItems
          return !items.includes(x)
        },
        {
          message: i18n.t('validation.excluded'),
        },
      ),

    image: (rules: { required?: boolean, maxSize?: number }) =>
      z
        .instanceof(File)
        .optional()
        .refine(data => (rules.required ? !!data : true), {
          message: i18n.t('validation.required'),
        })
        .refine(
          data =>
            // MB単位で指定できるようにしています。
            data && rules.maxSize !== undefined
              ? data.size < rules.maxSize * 1024 * 1024
              : true,
          {
            message: i18n.t('validation.max_value', {
              max: `${rules.maxSize}MB`,
            }),
          },
        ),
  }
}

export default useValidationRules
