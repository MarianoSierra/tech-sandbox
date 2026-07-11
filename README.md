# Tech Sandbox

Espacio personal de estudio profundo. La IA actúa como tutor, curador y evaluador; **el código de los proyectos lo escribo yo**. Aprendizaje honesto: chocar con los problemas es parte del método.

## Cómo funciona

El procedimiento completo está en [learning-system/PROCESO.md](learning-system/PROCESO.md). Resumen del ciclo por módulo:

1. **Teoría** → `/estudiar` genera la guía del módulo (resumen + lecturas + hitos)
2. **Proyecto** → `/guia` genera un brief estilo empresa real (requisitos, sin código)
3. **Build** → yo codifico; `/tutor` ayuda con escalera anti-spoiler
4. **Evaluación** → `/evaluar` hace code review pedagógico + preguntas + veredicto

## Comandos

| Comando | Qué hace |
| --- | --- |
| `/estudiar [módulo]` | Inicia o continúa un módulo del track activo |
| `/guia` | Genera brief de proyecto para el módulo actual |
| `/tutor [pregunta]` | Explica conceptos sin spoilear la solución |
| `/evaluar` | Evalúa el código del proyecto + preguntas conceptuales |

## Estructura

```
learning-system/   # proceso, stack de herramientas, progreso global, tracks
projects/          # código escrito por mí (la IA no edita acá sin pedido)
.claude/skills/    # las 4 skills del ciclo
```

## Tracks

Estado global en [learning-system/progreso.md](learning-system/progreso.md). Track activo: **React Native**.

## Regla de oro

La IA nunca escribe código de proyecto salvo pedido explícito ("dame la solución"). Escalera de ayuda: concepto → pista → pseudocódigo → solución.

## Portfolio

Este repo es privado (base de estudio). Cada capstone terminado se pule y se publica como repo público individual con buen README.
