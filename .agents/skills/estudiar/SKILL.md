---
name: estudiar
description: Inicia o continúa un módulo de estudio del track activo. Usar cuando el usuario dice "/estudiar", "empezar módulo X", "seguir estudiando" o quiere arrancar la fase de teoría de un módulo. Genera la guía del módulo (brief + resumen teórico + lecturas + hitos).
---

# /estudiar — Guía de módulo

Genera o continúa la guía de estudio de un módulo. Respeta siempre `learning-system/PROCESO.md`.

## Pasos

1. Leer `learning-system/PROCESO.md`, `learning-system/progreso.md` y el `ROADMAP.md` del track activo para ubicar el módulo actual (o el que pida el usuario).
2. Si ya existe guía del módulo en `learning-system/tracks/<track>/`, continuar desde donde quedó.
3. Si no existe, crear `learning-system/tracks/<track>/modulo-NN-<slug>.md` con:
   - **Brief**: qué vas a aprender, por qué importa, criterio de éxito medible.
   - **Resumen teórico**: conceptos clave del módulo, corto y dirigido (no un curso completo). Verificar contra docs actuales (Context7) antes de afirmar APIs o versiones.
   - **Lecturas**: 3–6 recursos desde `recursos.md` del track, en orden sugerido, con qué mirar en cada uno.
   - **Hitos de estudio**: checklist de comprensión previa al proyecto.
4. NotebookLM: si el track no tiene notebook, ofrecer crearlo (nombre `<Track> — Estudio`) y cargar las fuentes principales de `recursos.md`. Pedir confirmación antes de crear. Ofrecer audio overview si el usuario estudia fuera de la compu.
5. Al terminar la fase de teoría, indicar el siguiente paso: `/guia` para el brief del proyecto.

## Reglas

- Material en español neutro.
- Nunca incluir código solución del proyecto en la guía. Snippets ilustrativos de conceptos aislados están permitidos (máx. unas líneas, nunca la solución del proyecto del módulo).
- No editar nada bajo `projects/`.
