# Auditoría de tableros eléctricos · ACL Arequipa

App de campo para auditar tableros eléctricos desde el teléfono. Funciona sin
señal, guarda todo en el propio dispositivo y exporta el Excel diligenciado.

---

## Publicarla en GitHub Pages

Se hace una sola vez. Después basta con abrir la dirección desde el teléfono.

### 1. Crear el repositorio

En GitHub, **New repository**.

- Nombre: `auditoria-tableros` (o el que prefiera)
- Visibilidad: **Public** — con cuenta gratuita, Pages sólo funciona en repositorios
  públicos. Lo que se publica es la app vacía; las respuestas y fotos nunca salen
  del teléfono, así que no se expone información de la planta.
- No marque «Add a README file»: ya viene uno en estos archivos.

### 2. Subir los archivos

En el repositorio recién creado: **Add file → Upload files**.

Arrastre los cinco archivos, sueltos, sin carpeta que los contenga:

```
index.html
manifest.webmanifest
sw.js
icon-192.png
icon-512.png
README.md
```

Abajo, **Commit changes**.

> Deben quedar en la raíz del repositorio. Si los sube dentro de una carpeta,
> la dirección cambia y el service worker no encontrará sus archivos.

### 3. Activar Pages

**Settings** (pestaña superior del repositorio) → **Pages** (menú izquierdo).

- Source: **Deploy from a branch**
- Branch: **main** · carpeta **/ (root)**
- **Save**

Espere entre uno y dos minutos. Al recargar esa misma página aparece la dirección:

```
https://<su-usuario>.github.io/auditoria-tableros/
```

### 4. Abrirla en el teléfono e instalarla

1. Abra esa dirección en Chrome o Edge del teléfono.
2. Compruebe que **no aparece el recuadro amarillo** de «sin guardado automático».
   Si no aparece, el almacenamiento funciona.
3. Menú del navegador (⋮) → **Añadir a pantalla de inicio**.
4. Ábrala siempre desde ese ícono. Abre a pantalla completa y sin barra de
   direcciones.

### 5. Cargar la plantilla del Excel

Una sola vez, dentro de la app:

**Exportar → Cargar plantilla Excel →** elija `Formato_Auditoria_Electrica_ACL.xlsx`.

Queda guardada en el teléfono. Desde ese momento, el botón **Descargar Excel**
entrega el archivo con las columnas Cumple, Observación y Evidencia ya llenas.

---

## Uso sin señal

Tras la primera visita con cobertura, el service worker deja la app guardada en
el teléfono. Dentro de planta abre igual, sin conexión. Las fotos y las
respuestas se guardan localmente y no se envían a ningún servidor.

## Actualizar la app más adelante

**Add file → Upload files**, suba el `index.html` nuevo sobre el anterior y haga
commit. En el teléfono, cierre y vuelva a abrir la app dos veces: la primera
descarga la versión nueva, la segunda la muestra.

Las respuestas guardadas **no se pierden** al actualizar: viven en el
almacenamiento del navegador, aparte de los archivos de la app.

## Dónde se guardan los datos

En IndexedDB, la base local del navegador, bajo la dirección de GitHub Pages.
Tres cosas: las respuestas, las fotos (una entrada por foto, ya reducidas) y la
plantilla del Excel.

Se pierden si borra los datos del sitio en el navegador, si desinstala la app de
la pantalla de inicio o si usa modo incógnito. Por eso, **descargue la copia de
seguridad al terminar cada línea** (Exportar → Descargar copia). Ese archivo
también sirve para continuar la auditoría en otro teléfono.

---

## Alternativa sin GitHub

Si prefiere no publicar nada, suba `index.html` a OneDrive o SharePoint de la
empresa y ábralo desde el enlace web. También da un origen `https://` válido y el
guardado funciona. No tendrá el modo sin señal, que depende del service worker.
