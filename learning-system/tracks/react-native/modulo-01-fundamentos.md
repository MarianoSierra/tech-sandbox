# Módulo 01 — Fundamentos de React Native aplicados a la screen de resultado

## Brief

### Qué vas a aprender

Vas a estudiar los fundamentos de layout en React Native usando como ancla la pantalla de resultado de Zintropia, tanto en su versión básica como en la versión extendida con scroll.

### Por qué importa

Si no entendés bien esto, después terminás “peleándote” con la UI: componentes mal elegidos, scroll raro, cards que no respiran, CTA tapados por el notch o por el home indicator, y layouts pensados como si fueran web.

### Criterio de éxito medible

Al terminar este módulo deberías poder:

- descomponer la pantalla de resultado en bloques de UI nativos;
- explicar cuándo usar `ScrollView` y cuándo no;
- definir una estrategia de safe areas para header, contenido y CTA inferior;
- justificar las diferencias clave entre layout web y layout RN;
- proponer una escala simple de spacing y cards para móvil antes de escribir código.

## Mockup ancla del módulo

Archivo verificado:

- `projects/react-native/zintropia/docs/mockups/zintropia-mockups.html`

Pantallas a mirar:

- **2 · Resultado básico (Semilla · free)**: foto, confianza, nombre, subtítulo, 2 cards de cuidado, tip orgánico, CTA premium, CTA guardar.
- **6 · Resultado extendido (Bosque · premium)**: toggle Esencial/Completo, foto, estado, diagnóstico, plan, condiciones ideales, compañeras, scroll vertical denso.

## Resumen teórico

### 1) Componentes core para una screen de resultado

Pensá la screen como un árbol de piezas nativas, no como una “página HTML”.

Bloques principales:

1. **Shell de pantalla**
   - contenedor raíz;
   - app bar / header;
   - body;
   - CTA inferior o footer si aplica.

2. **Contenido principal**
   - foto o hero visual;
   - bloque de identidad: nombre común + nombre latino + confianza;
   - cards de información rápida;
   - secciones de detalle.

3. **Acciones**
   - CTA primario;
   - CTA secundario;
   - toggle o segmented control si cambia el modo de lectura.

Core components que TENÉS que dominar para esto:

- `View`: contenedor base de layout.
- `Text`: todo texto visible va dentro de `Text`.
- `Pressable`: acciones y CTAs.
- `ScrollView`: para una screen vertical finita con secciones.
- `FlatList`: si el contenido repetido crece o viene de datos dinámicos.

Lectura correcta del mockup:

- la screen básica entra casi completa “above the fold”;
- la premium ya es una screen de lectura larga;
- eso cambia la decisión de layout desde el arranque.

### 2) Diferencias RN vs web en layout

Acá mucha gente se equivoca porque intenta pensar React Native como si fuera DOM + CSS. NO es eso.

Diferencias clave verificadas en docs actuales de React Native:

- Flexbox se parece al de web, pero el default de `flexDirection` es **`column`**, no `row`.
- `alignContent` por defecto es **`flex-start`**, no `stretch`.
- `flexShrink` por defecto es **`0`**, no `1`.
- `flex` acepta un **solo número**.
- Los estilos se escriben en JavaScript y usan **camelCase**.

Traducción práctica:

- en móvil primero pensás en **apilado vertical**;
- los grupos horizontales son la excepción, no la base;
- si algo “no entra” o no reduce como esperabas, revisá `flexShrink` antes de culpar al diseño;
- no copies spacing de web 1:1: en móvil el espacio compite con el viewport todo el tiempo.

### 3) Safe areas

En móvil no diseñás contra un rectángulo limpio. Diseñás contra un rectángulo con notch, barra de estado y home indicator.

Uso actual recomendado en docs de `react-native-safe-area-context`:

- envolver la app con `SafeAreaProvider`;
- usar `SafeAreaView` como forma preferida de consumir insets en screens;
- usar `useSafeAreaInsets` cuando necesitás control fino, por ejemplo para un CTA pegado abajo.

Idea mental:

- **top inset** protege header y primera sección;
- **bottom inset** protege CTA fijo, tab bar o contenido final;
- si la screen hace scroll, el problema no es solo “que no se corte”: también importa que el cierre visual tenga aire suficiente.

Para este mockup:

- la versión básica puede vivir bien con safe area arriba y padding inferior cómodo;
- la premium necesita pensar mejor el final del scroll para que el último card no quede pegado al borde inferior del dispositivo.

### 4) Scroll vertical

Docs actuales de RN: `ScrollView` renderiza todos sus hijos de una vez. Para listas largas conviene `FlatList`, que renderiza de forma perezosa y cuida memoria/performance.

Entonces:

- **Resultado premium**: `ScrollView` tiene sentido porque es una sola screen compuesta por secciones finitas.
- **Historial** u otras colecciones crecientes: mejor `FlatList`.

Regla mental:

- una screen editorial o de lectura → pensá `ScrollView`;
- una colección variable de ítems → pensá `FlatList`.

No mezcles ambas decisiones por intuición. Primero definí la naturaleza del contenido.

### 5) Cómo pensar spacing y cards en móvil

No pienses “decoración”. Pensá **ritmo de lectura + jerarquía táctil**.

Para este tipo de screen, el spacing debería resolver cinco niveles:

1. **padding externo de pantalla**  
   aire entre el borde del dispositivo y el contenido;

2. **gap entre bloques grandes**  
   foto → identidad → resumen → acciones;

3. **padding interno de card**  
   que el contenido respire sin perder densidad;

4. **gap entre elementos dentro de una card**  
   label/valor, icono/texto, fila/medidor;

5. **espacio de cierre**  
   especialmente importante cuando la screen scrollea.

Heurística sana para móvil:

- una escala corta y consistente gana siempre contra “ajustes mágicos” por componente;
- cards informativas suelen vivir bien con padding medio y radio claro;
- el contenido denso necesita separación semántica, no solo más píxeles;
- en móvil cada bloque debe responder: **¿esto se escanea, se lee o se toca?**

Aplicado al mockup:

- la screen básica pide jerarquía rápida;
- la premium pide secciones claramente respiradas para que el usuario no sienta un “muro de texto”.

## Lecturas sugeridas

1. **Expo docs — Get started**  
   Qué mirar: cómo se organiza una app Expo moderna y cuál es el rol del runtime nativo.

2. **Expo tutorial oficial**  
   Qué mirar: cómo se estructura una screen real y cómo se piensa el flujo de UI en móvil.

3. **React Native docs — The Basics**  
   Qué mirar: componentes core, estilo con JS y mentalidad RN vs web.

4. **React Native — New Architecture**  
   Qué mirar: solo una pasada liviana para entender que RN no “pinta HTML”, sino UI nativa mediante otra arquitectura.

## Hitos de estudio

- [ ] Puedo nombrar los bloques de la screen de resultado sin hablar de HTML.
- [ ] Entiendo por qué en RN el layout arranca en columna.
- [ ] Sé explicar por qué una screen premium de detalle usa `ScrollView` y el historial usaría `FlatList`.
- [ ] Entiendo qué problema resuelven las safe areas arriba y abajo.
- [ ] Puedo definir una estrategia simple de spacing antes de codificar.
- [ ] Puedo mirar el mockup y separar contenido escaneable, legible y táctil.

## Siguiente paso

Cuando cierres esta fase de teoría, seguimos con `/guia` para convertir esta screen en un brief de proyecto realista, sin darte la solución.
