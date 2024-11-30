import { fc, test } from '@fast-check/vitest'
import useValidationRules from '#base/app/composables/useValidationRules'

beforeEach(() => {
  vi.mock('vue-i18n', () => ({
    useI18n: vi.fn(() => ({
      t: (key: string, ..._args: unknown[]) => `dummy-${key}`,
    })),
  }))
})

afterEach(() => {
  vi.restoreAllMocks()
})

test('validates (with trasnlate mock)', () => {
  const rules = useValidationRules()

  expect(() => rules.required.parse('')).toThrowError()
  expect(() => rules.required.parse('a')).not.toThrowError()

  expect(() => rules.stringRequired.parse(null)).toThrowError()
  expect(() => rules.stringRequired.parse('')).not.toThrowError()

  expect(() => rules.numberRequired.parse(null)).toThrowError()
  expect(() => rules.numberRequired.parse(0)).not.toThrowError()

  expect(() => rules.url.parse('')).toThrowError()
  expect(() => rules.url.parse('a')).toThrowError()
  expect(() => rules.url.parse('https://example.com')).not.toThrowError()

  expect(() => rules.nonRequiredUrl.parse('')).not.toThrowError()
  expect(() => rules.nonRequiredUrl.parse('a')).toThrowError()
  expect(() =>
    rules.nonRequiredUrl.parse('https://example.com'),
  ).not.toThrowError()

  expect(() => rules.excluded([0]).parse(0)).toThrowError()
  expect(() => rules.excluded([0]).parse(1)).not.toThrowError()

  const fileSizeIs1 = new File(['x'], 'dummy.png')
  expect(() => rules.image({}).parse(undefined)).not.toThrowError()
  expect(() => rules.image({}).parse(fileSizeIs1)).not.toThrowError()
  expect(() => rules.image({ required: true }).parse(undefined)).toThrowError()
  expect(() => rules.image({ maxSize: 0 }).parse(fileSizeIs1)).toThrowError()
})

test.prop([fc.nat(), fc.nat()])('validates minValue successfully', (n, m) => {
  fc.pre(n <= m)
  const rules = useValidationRules()
  expect(() => rules.minValue(n).parse(m)).not.toThrowError()
  expect(() => rules.minValue(n).parse(String(m))).not.toThrowError()
})

test.prop([fc.nat(), fc.nat()])('fails to validate minValue', (n, m) => {
  fc.pre(n > m)
  const rules = useValidationRules()
  expect(() => rules.minValue(n).parse(m)).toThrowError()
})

test.prop([fc.nat(), fc.nat()])('validates maxValue successfully', (n, m) => {
  fc.pre(n >= m)
  const rules = useValidationRules()
  expect(() => rules.maxValue(n).parse(m)).not.toThrowError()
  expect(() => rules.maxValue(n).parse(String(m))).not.toThrowError()
})

test.prop([fc.nat(), fc.nat()])('fails to validate maxValue', (n, m) => {
  fc.pre(n < m)
  const rules = useValidationRules()
  expect(() => rules.maxValue(n).parse(m)).toThrowError()
})

test.prop([fc.nat(), fc.string()])('validates max successfully', (n, s) => {
  fc.pre(n >= s.length)
  const rules = useValidationRules()
  expect(() => rules.max(n).parse(s)).not.toThrowError()
})

test.prop([fc.nat(), fc.string()])('fails to validate max', (n, s) => {
  fc.pre(n < s.length)
  const rules = useValidationRules()
  expect(() => rules.max(n).parse(s)).toThrowError()
})
