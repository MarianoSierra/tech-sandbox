# Zintropia

Expo/React Native app for plant recognition and organic-first care guidance. Built as the hands-on project for the React Native learning track (`learning-system/tracks/react-native/`).

## Product idea

Validates the photo → plant ID → care guidance hook and the anonymous → logged-in funnel:

- One anonymous scan without an account; scan 2+ requires Google/Apple SSO (Supabase Auth).
- Authenticated free tier: 3 scans per UTC calendar month, hard cap, no billing.
- Spanish care summary (light, water, tips) for confident identifications.
- Low-confidence results ask for a clearer photo and count toward allowances.
- Authenticated scan history with 30-day image retention.

Out of scope: billing, paid tiers, disease diagnosis, multi-plant scans, offline mode, notifications, exact geolocation, marketplace/community.

## Stack

Expo SDK 57 · TypeScript · Expo Router · Unistyles v3 · Zustand · TanStack Query · MMKV · Expo SQLite + Drizzle · FlashList · React Hook Form + Zod · Supabase · Biome.

Full breakdown with decisions in [docs/stack-base-2026.md](docs/stack-base-2026.md).

## Design system

Tokens live in [src/theme/nativeTheme.ts](src/theme/nativeTheme.ts) (colors, typography, spacing, radius, shadows) and are registered as the Unistyles theme in [src/theme/unistyles.ts](src/theme/unistyles.ts). Style components with `StyleSheet.create` from `react-native-unistyles` — the theme is injected, never import raw hex values.

Fonts: Nunito via `@expo-google-fonts/nunito` (regular / semibold / bold).

## Getting started

```bash
npm install

# Development build (required — MMKV and Unistyles use native modules, Expo Go won't work)
npx expo run:ios
npx expo run:android
```

## Environment variables

Create `.env.local` (validated with Zod at startup):

```bash
EXPO_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
EXPO_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

## Scripts

```bash
npm run check      # Biome lint + format (write)
npm run lint       # Biome lint only
npm run typecheck  # tsc --noEmit
```

## Project structure

```
src/
├── app/          # Expo Router screens and layouts
├── components/   # Shared UI components
├── theme/        # Design tokens + Unistyles config
├── constants/    # Static values
└── hooks/        # Shared hooks
docs/             # Stack and architecture notes
```

## Learning context

This project follows the anti-spoiler contract in `learning-system/PROCESO.md`: code under `src/` is written by hand as part of the study cycle (`/estudiar` → `/guia` → build → `/evaluar`).
