# Vket Boilerplate Nuxt - AI Agent Configuration

## About This File

This AGENTS.md file follows the standard format for AI agent coordination in software development. AGENTS.md is a simple, open format for guiding coding agents - think of it as a README for AI agents.

For more information about the AGENTS.md format and best practices, visit: https://agents.md/

## Project Overview
Nuxt4-based monorepo boilerplate using Layer Architecture, developed by HIKKY Ltd. for building scalable VR/metaverse-related web applications.

### Understanding Project Structure
Before starting development, AI agents should read `./repomix-output.md` to understand the complete project structure and codebase. This file contains:
- Complete directory structure
- All source code files and their contents
- Configuration files and their relationships
- Testing patterns and examples
- Component implementations and naming conventions

Use this file to understand existing patterns before creating new components or modifying existing code.

## Dev Environment Tips

### Quick Navigation
- Use `cd layers/base` to work on base components and utilities
- Use `cd layers/main` to develop the main application
- Use `cd layers/showcases` to create component showcases
- Run `bun install` at the root to install all workspace dependencies

### Layer Architecture Commands
- `bun --filter vket-boilerplate-nuxt-base dev` - Start base layer dev server
- `bun --filter vket-boilerplate-nuxt-main dev` - Start main layer dev server
- `bun --filter vket-boilerplate-nuxt-showcases dev` - Start showcases dev server
- `bun --filter vket-boilerplate-nuxt-open-api generate` - Generate OpenAPI models

## Development Guidelines

### Component Creation
- Use component prefixes: Ha (atoms), Hm (molecules), Ho (organisms), Ht (templates)
- Always include `<i18n lang="yaml">` blocks in components for internationalization
- Follow RSCSS naming convention for CSS classes
- Components should have corresponding test files in `/test/components/`

### Type Safety
- NEVER use `any` type - this project enforces strict TypeScript
- Define Zod schemas first, then infer types: `type Todo = z.infer<typeof todoSchema>`
- Use type aliases over interfaces
- Use utility types: Nullable, ValueOf, Overwrite

### API Development
- Define schemas in `/models/` using Zod
- Create repositories in `/repositories/` for API calls
- Use defaultApi for automatic case conversion (camelCase ↔ snake_case)
- Always validate responses with Zod schemas

## Testing Instructions

### Running Tests
- `bun --filter <layer-name> test:ut` - Run unit tests
- `bun --filter <layer-name> test:coverage` - Generate coverage report
- `bun --filter <layer-name> test:watch` - Watch mode for TDD
- Tests must pass before committing

### Quality Checks
- `bun --filter <layer-name> typecheck` - Check TypeScript types (must be 0 errors)
- `bun --filter <layer-name> lint` - Run ESLint and Stylelint (must be 0 errors)
- `bun --filter <layer-name> fix` - Auto-fix linting issues
- `bun --filter vket-boilerplate-nuxt-main fix-openapi-models` - Fix generated OpenAPI models

## PR Instructions

### Commit Format
```
[<layer>/<scope>] <description>

- What: Brief description of changes
- Why: Reason for the change
- How: Implementation approach (if complex)
```

### Pre-commit Checklist
1. Run `bun typecheck` - Must have 0 TypeScript errors
2. Run `bun lint` - Must have 0 lint errors
3. Run `bun test:ut` - All tests must pass
4. Update i18n translations if UI text was added
5. Add/update tests for modified code

### PR Title Format
`[<layer-name>] <Feature/Fix/Refactor>: <Description>`

Examples:
- `[base] Feature: Add HmDataTable component`
- `[main] Fix: Resolve navigation issue in mobile view`
- `[showcases] Refactor: Update component examples`

## File Structure

### Monorepo Layout
```
/layers/
  /base/     # Shared components, utils, styles, config
    /app/      # Application code
    /config/   # Environment configuration (EnvType, runtimeConfig)
    /@types/   # TypeScript type definitions
    /i18n/     # Internationalization files
  /main/     # Main application
  /showcases/ # Component documentation
  /open-api/ # API schema definitions & Zod generation
    /openapi/  # OpenAPI specification files
    /scripts/  # Generation scripts
```

### Import Paths
- Use layer aliases: `#base/`, `#main/`, `#showcases/`
- Example: `import { HmButton } from '#base/app/components/hm/button/HmButton.vue'`

## Common Patterns

### i18n Implementation
```vue
<i18n lang="yaml">
ja:
  title: タイトル
en:
  title: Title
</i18n>

<script setup lang="ts">
const i18n = useI18n()
</script>
```

### Zod Schema Pattern
```typescript
export const todoSchema = z.object({
  id: z.number(),
  title: z.string(),
  completed: z.boolean(),
})

export type Todo = z.infer<typeof todoSchema>
```

### Component Pattern
```vue
<script lang="ts">
export default defineComponent({
  name: 'HmComponentName',
})
</script>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    prop?: string
  }>(),
  {
    prop: 'default',
  },
)
</script>
```

## Environment Variables

### System Requirements
- Node.js 22.x (required by base layer)
- Bun package manager

### Required Variables
- `VITE_OUTPUT_ENV` - Environment (local/staging/production)
- API endpoints configured in `runtimeConfig.ts`

### Environment Configuration System
This project uses a sophisticated environment management system:
- `config/models/EnvType.ts` - Environment type definitions and validation
- `config/runtimeConfig.ts` - Environment-specific runtime configuration
- Supports multiple environments: local, staging, production

### Local Development
```bash
cross-env VITE_OUTPUT_ENV=local bun dev
```

## Debugging Tips

### Common Issues
1. **TypeScript errors**: Check `tsconfig.json` and ensure all imports use correct paths
2. **i18n missing**: Every component needs an `<i18n>` block even if empty
3. **Build fails**: Run `bun nuxi prepare` to regenerate types
4. **Test fails**: Check snapshots with `bun test:ut -- -u` to update

### Useful Commands
- `bun nuxi analyze` - Analyze bundle size
- `bun nuxi info` - Show Nuxt configuration
- `bun package-update` - Update dependencies interactively

## Code Review Focus

### Must Check
- No `any` types used
- All components have i18n blocks
- Zod schemas match API responses
- Tests cover new functionality
- RSCSS naming convention followed
- Layer separation maintained

### Performance
- Images optimized and lazy loaded
- Dynamic imports for large components
- No unnecessary re-renders
- Bundle size impact checked

## Key Dependencies
- **Nuxt 4.1.0** - Full-stack framework
- **Vue 3.5.21** - Progressive JavaScript framework
- **Zod 4.1.5** - TypeScript-first schema validation
- **TypeScript 5.9.2** - Type safety and tooling
- **Bun** - Fast package manager and runtime

## Additional Resources
- [Nuxt 4 Documentation](https://nuxt.com/docs)
- [Zod Documentation](https://zod.dev)
- [RSCSS Naming Convention](https://rscss.io)
- [Vue 3 Composition API](https://vuejs.org/api/composition-api.html)