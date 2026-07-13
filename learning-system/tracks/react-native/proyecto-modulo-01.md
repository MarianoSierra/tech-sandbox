# Proyecto — Módulo 01

## Nombre del proyecto

**Zintropia Mobile — Pantalla de Resultado básico**

## Contexto de negocio

Zintropia está explorando su MVP mobile para diagnóstico rápido de plantas. Después de sacar una foto y obtener una identificación, el usuario necesita ver un resultado claro, confiable y accionable en una sola pantalla.

El equipo de producto quiere validar primero la experiencia más simple del flujo: la pantalla de **resultado básico** para usuarios del plan gratuito. Todavía no hace falta construir navegación completa, backend, autenticación ni persistencia real. Lo importante en esta etapa es probar que la UI comunica valor en pocos segundos y que la composición de la pantalla está bien resuelta para móvil.

Esta entrega debe tomar como referencia la pantalla:

- `projects/react-native/zintropia/docs/mockups/zintropia-mockups.html`
- sección **2 · Resultado básico (Semilla · free)**

## Objetivo del módulo

Construir una única screen mobile que represente el resultado básico de identificación de una planta, respetando la jerarquía visual del mockup y ejercitando los fundamentos de React Native estudiados en el módulo 1.

## Dónde va el código

- `projects/react-native/zintropia/`

## Requisitos funcionales

1. La app debe mostrar una única pantalla de **Resultado** como primer punto visible del flujo.
2. La pantalla debe incluir un encabezado simple con el título de la screen.
3. La pantalla debe mostrar un bloque visual principal para representar la foto o preview del escaneo.
4. La pantalla debe comunicar el nivel de confianza del resultado de forma visible.
5. La pantalla debe mostrar el nombre común de la planta y su nombre botánico.
6. La pantalla debe mostrar dos bloques de cuidado esencial:
   - luz;
   - riego.
7. La pantalla debe mostrar un bloque adicional con un tip orgánico o consejo breve de cuidado.
8. La pantalla debe mostrar una acción secundaria relacionada con el valor premium, sin necesidad de implementar el flujo premium real.
9. La pantalla debe mostrar una acción principal para guardar el resultado.
10. La acción principal debe producir una respuesta visible en la misma pantalla para confirmar que hubo interacción del usuario.
11. La screen debe poder renderizarse correctamente en viewport móvil sin depender de navegación a otras pantallas.
12. El contenido puede venir de datos locales estáticos del proyecto; no hace falta consumo de API.

## Criterios de aceptación

1. Al abrir la app, se ve directamente la pantalla de resultado básico sin errores de render.
2. La jerarquía visual permite distinguir claramente:
   - preview/foto;
   - confianza;
   - identidad de la planta;
   - cuidados esenciales;
   - tip;
   - acciones.
3. La composición se siente pensada para móvil y no como una adaptación improvisada de una página web.
4. La pantalla respeta safe area superior e inferior de manera razonable para que el contenido y las acciones no queden incómodos o tapados.
5. La acción principal responde visualmente cuando el usuario la toca.
6. La acción secundaria premium existe como affordance visual, pero no obliga a construir navegación, modal, paywall ni integración externa.
7. No hay dependencias de backend, login, almacenamiento persistente ni librerías extra solo para completar esta entrega.
8. La implementación queda acotada a una sola screen y a interacciones locales simples.

## Temas de arquitectura a investigar

- composición de una screen mobile con componentes core de React Native;
- diferencia entre layout vertical nativo y mentalidad web;
- estrategia de safe areas en una pantalla simple;
- organización de datos locales para renderizar bloques repetibles de UI;
- separación entre contenido estático, estado local de interacción y presentación visual;
- decisiones de spacing, jerarquía y cards para lectura rápida en móvil.

## Alcance fuera

Queda explícitamente fuera de este módulo:

- navegación entre pantallas;
- tabs;
- flujo de cámara real;
- integración con IA o identificación real de plantas;
- consumo de API;
- persistencia real en historial;
- autenticación;
- premium real, checkout o suscripciones;
- animaciones complejas;
- tests automatizados como requisito de aprobación del módulo.

## Entrega esperada

Una primera versión funcional y prolija de la pantalla **Resultado básico**, suficientemente buena para practicar layout, composición de UI y una interacción local simple dentro de React Native.
