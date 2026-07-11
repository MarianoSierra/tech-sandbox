# ROADMAP — React Native

Base: React sólido (ventaja). Objetivo: construir y shippear apps móviles con Expo. Stack de referencia: **Expo SDK 56** (New Architecture por defecto, Expo Router).

Estado: 🟢 activo · Módulo actual: **1**

| # | Módulo | Temas | Proyecto | Estado |
| --- | --- | --- | --- | --- |
| 1 | Fundamentos | Arquitectura RN (New Architecture/Fabric, JSI), Expo vs bare workflow, componentes core (View/Text/FlatList/Pressable), estilos (StyleSheet, Flexbox en RN), diferencias clave vs React web | Mini app de una pantalla con lista + interacción | ⚪ |
| 2 | Navegación y layouts | Expo Router (file-based), stacks/tabs/modals, paso de parámetros, deep linking básico, safe areas | App multi-pantalla con tabs + detalle | ⚪ |
| 3 | Estado y datos | Fetching (TanStack Query), caché, estado global vs local, AsyncStorage, offline-first básico | App consumiendo API real con caché y estado offline | ⚪ |
| 4 | Capacidades nativas | Permisos, cámara (expo-camera), almacenamiento, notificaciones (expo-notifications), ubicación | App que use 2+ APIs nativas | ⚪ |
| 5 | Calidad | Testing (Jest + React Native Testing Library), manejo de errores, performance (listas, re-renders, Hermes), accesibilidad básica | Testear y optimizar proyecto del módulo 3 o 4 | ⚪ |
| 6 | Ship 🚀 | EAS Build, signing, variables de entorno, EAS Update (OTA), publicación en stores | **Capstone**: app completa → portfolio | ⚪ |

Estados: ⚪ pendiente · 🟡 en curso · ✅ aprobado

## Capstone

App completa que integre módulos 1–5, publicada con EAS. Candidatos (elegir en `/guia` del módulo 6): tracker de hábitos con notificaciones, app de notas offline-first con cámara, MVP de delivery con mapa. Al aprobar: pulir + repo público.

## Notas

- Cada módulo sigue el ciclo de `../../PROCESO.md`: `/estudiar` → `/guia` → build → `/evaluar`.
- SDK: durante la transición a SDK 56, `create-expo-app@latest` sin flag crea SDK 54 (recomendado si se usa Expo Go en dispositivo físico). Para SDK 56: `npx create-expo-app@latest --template default@sdk-56`. Decidir en módulo 1 según cómo vayas a probar.
