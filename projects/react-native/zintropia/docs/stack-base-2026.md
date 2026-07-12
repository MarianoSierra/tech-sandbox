# Stack Base — React Native 2026

Stack de referencia para apps móviles modernas con React Native. Estado según este proyecto (Zintropia, Expo SDK 57 / RN 0.86).

**Leyenda**: ✅ instalado · ⏳ diferido (se agrega cuando el módulo lo requiera) · ❌ descartado (redundante con otra pieza del stack)

## 1. Núcleo y estructura

| Herramienta | Rol | Estado | Docs |
| --- | --- | --- | --- |
| **Expo** | Framework estándar para apps universales | ✅ SDK 57 | [expo.dev](https://expo.dev/) |
| **TypeScript** | Seguridad de tipos y DX | ✅ | [typescriptlang.org](https://www.typescriptlang.org/) |
| **Expo Router** | Navegación file-based; Native Tabs (liquid glass en iOS) | ✅ | [docs](https://docs.expo.dev/router/introduction/) |

## 2. Gestión de estado

| Herramienta | Rol | Estado | Docs |
| --- | --- | --- | --- |
| **Zustand** | Estado global ligero, sin boilerplate de Redux | ✅ | [docs](https://docs.pmnd.rs/zustand/getting-started/introduction) |
| **TanStack Query** | Estado del servidor: caché, sync, loading states | ✅ | [tanstack.com/query](https://tanstack.com/query/latest) |

## 3. Almacenamiento local

| Herramienta | Rol | Estado | Docs |
| --- | --- | --- | --- |
| **React Native MMKV** | Clave-valor ~30x más rápido que AsyncStorage; integra con Zustand | ✅ | [repo](https://github.com/mrousavy/react-native-mmkv) |
| **Expo SQLite + Drizzle ORM** | Esquemas relacionales tipados en TS | ✅ | [Drizzle](https://orm.drizzle.team/) · [Expo SQLite](https://docs.expo.dev/versions/latest/sdk/sqlite/) |

## 4. UI y estilos

| Herramienta | Rol | Estado | Docs |
| --- | --- | --- | --- |
| **Unistyles** | Sistema de estilos: temas tipados, variantes, breakpoints, rendimiento ~StyleSheet nativo | ✅ v3 | [docs](https://www.unistyl.es/) |
| **Uniwind** | Bindings Tailwind CSS para RN | ❌ redundante con Unistyles — el design system (`nativeTheme.ts`) es un objeto de tokens TS que mapea directo a temas de Unistyles | [uniwind.dev](https://uniwind.dev/) |
| **Expo UI** | Componentes SwiftUI / Jetpack Compose nativos | ✅ (incluido en template SDK 57) | [docs](https://docs.expo.dev/versions/latest/sdk/ui/) |

## 5. Rendimiento y utilidades

| Herramienta | Rol | Estado | Docs |
| --- | --- | --- | --- |
| **FlashList** | Listas de alto rendimiento (Shopify), reemplazo de FlatList | ✅ v2 | [docs](https://shopify.github.io/flash-list/) |
| **React Hook Form + Zod** | Formularios + validación estricta de esquemas | ✅ (con `@hookform/resolvers`) | [RHF](https://react-hook-form.com/) · [Zod](https://zod.dev/) |
| **Zod** (standalone) | Validación de env vars, respuestas de API y contratos de datos — no solo formularios | ✅ v4 | [zod.dev](https://zod.dev/) |
| **Reanimated** | Animaciones en el hilo de UI | ✅ v4 (template) | [docs](https://docs.swmansion.com/react-native-reanimated/) |
| **Gesture Handler** | Gestos complejos (swipe, drag-and-drop) | ✅ (template) | [docs](https://docs.swmansion.com/react-native-gesture-handler/) |

## 6. Calidad de código

| Herramienta | Rol | Estado | Docs |
| --- | --- | --- | --- |
| **Biome** | Linter + formatter todo-en-uno (reemplaza ESLint + Prettier) | ✅ v2 — `npm run check` | [biomejs.dev](https://biomejs.dev/) |

## 7. Servicios (BaaS)

| Herramienta | Rol | Estado | Docs |
| --- | --- | --- | --- |
| **Supabase** | Postgres + Auth (Google/Apple SSO) + Storage + Edge Functions | ✅ cliente JS | [supabase.com](https://supabase.com/) |
| **Clerk** | Auth con componentes nativos | ❌ redundante — la idea de Zintropia usa Supabase Auth | [clerk.com](https://clerk.com/) |
| **Sentry** | Monitoreo de errores y performance | ⏳ módulo de calidad/ship | [sentry.io](https://sentry.io/for/react-native/) |
| **RevenueCat** | Suscripciones e IAP | ⏳ fuera del scope del demo (sin billing) | [revenuecat.com](https://www.revenuecat.com/) |

## Nota importante: Expo Go no sirve para este stack

`react-native-mmkv` y `react-native-unistyles` incluyen módulos nativos (Nitro Modules) → **requieren development build**:

```bash
npx expo run:ios      # simulador / dispositivo iOS
npx expo run:android  # emulador / dispositivo Android
# o en la nube: eas build --profile development
```
