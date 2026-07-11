---
name: guia
description: Genera un brief de proyecto estilo empresa real para el módulo actual del track activo. Usar cuando el usuario dice "/guia", "nuevo proyecto para <track>", "dame el proyecto del módulo" o terminó la fase de teoría. Produce requisitos y criterios de aceptación, nunca código.
---

# /guia — Brief de proyecto

Genera el enunciado del proyecto del módulo como si viniera de una empresa real. Respeta siempre `learning-system/PROCESO.md`.

## Pasos

1. Leer `learning-system/PROCESO.md` y el `ROADMAP.md` del track activo para saber módulo actual y temas cubiertos.
2. Crear `learning-system/tracks/<track>/proyecto-modulo-NN.md` con:
   - **Contexto de negocio**: escenario realista (ej. RN: MVP de delivery, app de notas offline-first, tracker de hábitos con notificaciones).
   - **Requisitos funcionales**: numerados, concretos, verificables.
   - **Criterios de aceptación**: qué tiene que pasar para dar el módulo por cumplido (incluye tests si el módulo los cubre).
   - **Temas de arquitectura a investigar**: nombres de patrones/APIs a estudiar, sin resolverlos.
   - **Alcance fuera**: qué NO hace falta (control de scope, YAGNI).
3. Dimensionar el proyecto a los temas del módulo: ejercita lo aprendido + un poco de desafío, no todo el stack.
4. Indicar dónde va el código: `projects/<track>/<proyecto>/`.

## Reglas

- **Cero código en el brief.** Ni snippets, ni estructura de archivos resuelta, ni nombres de funciones. Requisitos y conceptos solamente.
- Material en español neutro.
- No editar nada bajo `projects/`.
- Si el usuario pide ayuda durante el build, eso es trabajo de `/tutor` (escalera anti-spoiler), no de esta skill.
