# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server at localhost:3000
npm run build    # Production build
npm run lint     # Run ESLint
```

## Architecture

This is a Next.js 16 landing page for Exibyai using the App Router pattern.

### Tech Stack
- **Next.js 16** with App Router
- **React 19** with TypeScript (strict mode)
- **Tailwind CSS v4** with tw-animate-css
- **shadcn/ui** components (Radix UI primitives + CVA)
- **lucide-react** for icons

### Project Structure
- `app/` - Next.js App Router (layout, pages)
- `components/` - Landing page sections and shared components
- `components/ui/` - shadcn/ui base components
- `lib/utils.ts` - Utility functions (includes `cn()` for className merging)

### Conventions
- Import alias: `@/*` maps to project root
- Use `cn()` from `@/lib/utils` for conditional className merging
- Components follow shadcn/ui patterns with CVA for variants
- Language: Portuguese (pt-BR)
