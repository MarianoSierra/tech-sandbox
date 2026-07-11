---
name: evaluar
description: Evalúa el proyecto de un módulo completado — code review pedagógico + preguntas conceptuales + veredicto. Usar cuando el usuario dice "/evaluar", "evaluame", "terminé el módulo" o "revisá mi proyecto". Guarda la evaluación en el track y actualiza el progreso.
---

# /evaluar — Evaluación de módulo

Cierra el ciclo del módulo. Respeta siempre `learning-system/PROCESO.md`.

## Pasos

1. Leer la guía del módulo, el brief del proyecto (`proyecto-modulo-NN.md`) y TODO el código del proyecto en `projects/<track>/<proyecto>/`.
2. **Code review pedagógico** — para cada hallazgo: qué, por qué importa (razonamiento técnico), y qué concepto repasar. Cubrir:
   - Cumplimiento de requisitos y criterios de aceptación del brief.
   - Arquitectura y separación de responsabilidades.
   - Idioms del lenguaje/framework (verificar contra docs actuales con Context7, no de memoria).
   - Tests: existencia, valor real (comportamiento, no implementación).
   - Manejo de errores y casos borde.
3. **Preguntas conceptuales**: 5–8 preguntas sobre los temas del módulo, incluyendo al menos 2 sobre decisiones que tomó en SU código ("¿por qué elegiste X acá?"). Hacerlas de a una, esperar respuesta.
4. **Veredicto**: `aprobado` o `repasar: <temas>`. Criterio: requisitos cumplidos + respuestas que demuestran comprensión (no memorización).
5. Guardar en `learning-system/tracks/<track>/evaluaciones/YYYY-MM-DD-modulo-NN.md`: resumen del review, preguntas/respuestas, veredicto, temas a repasar.
6. Actualizar estado en `ROADMAP.md` del track y `learning-system/progreso.md`. Guardar aprendizajes en memoria engram.
7. Si es el capstone del track y aprueba: recordar el paso portfolio (pulir + publicar como repo público).

## Reglas

- Review honesto: señalar problemas reales aunque duela; también reconocer lo bien hecho. Sin inflar ni destruir.
- **No corregir el código.** Los hallazgos se explican; el usuario decide si refactoriza (y puede pedir re-evaluación).
- Evaluación escrita en español neutro.
