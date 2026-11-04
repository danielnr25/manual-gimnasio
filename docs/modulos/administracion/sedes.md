# Sedes

Permite gestionar las sucursales del gimnasio. Desde aquí puede **buscar, agregar, editar y eliminar** sedes.

## Pantalla principal

![Filtros de sedes](/img/administracion/sedes-filtros.png)

| Letra | Elemento | Descripción |
| --- | --- | --- |
| A | **Nombre** | Escriba el nombre de la sede a consultar. |
| B | **Filas a mostrar** | Registros visibles por página (por defecto 10). |
| C | **Buscar** | Aplica el filtro. |
| D | **+ Nuevo** | Abre el formulario para agregar una sede. |

El **contador de registros** muestra el total de sedes registradas (por ejemplo, *TOTAL DE REGISTROS 8*).

![Contador de registros](/img/administracion/sedes-contador.png)

La tabla lista cada sede con su número, nombre y operaciones:

![Tabla de sedes](/img/administracion/sedes-tabla.png)

| Botón | Qué hace |
| --- | --- |
| **Editar** (amarillo) | Modifica los datos del registro. |
| **Eliminar** (rojo) | Quita el registro del sistema. Se pide confirmación. |


## Crear una nueva sede

1. Haga clic en **+ Nuevo**.
2. Complete el formulario, que tiene tres bloques (ver tablas abajo).
3. Haga clic en **✔ Registrar**.

![Formulario de nueva sede](/img/administracion/sedes-formulario.png)

### Datos principales

| Campo | Descripción |
| --- | --- |
| Nombre | Nombre comercial de la sede (ej. IZAGA, BOLOGNESI, VIA PIMENTEL). |
| Nombre de Empresa | Razón social completa de la empresa vinculada. |
| Ruc | Número de RUC (11 dígitos). |
| Dirección | Dirección física del local. |
| Teléfono | Teléfono fijo o móvil de la sede. |
| Facebook | Enlace o usuario de la página de Facebook. |
| Imagen | Logotipo de la sede. Clic en **Archivo** (formato **.png**). |
| Distrito | Seleccione Departamento, Provincia y Distrito. |

### Configuraciones del sistema

| Campo | Descripción |
| --- | --- |
| Facturación electrónica | **SI / NO**: define si la sede emite comprobantes electrónicos. |
| Exonerado de IGV | **SI / NO**: indica si los servicios de la sede están exonerados. |
| Tipo de formato | Plantilla de impresión de recibos o comprobantes. |
| Campos ocultos | Identificadores de campos que se ocultarán en esta sede. |
| Dirección de servidor | Ruta URL donde opera la sede. |
| IP del servidor | IP fija asignada al servidor de la sede. |

### Posiciones del logo y otros

| Campo | Descripción |
| --- | --- |
| Ancho de ficha | Ancho (px) del logotipo en las fichas impresas. |
| Altura de ficha | Alto (px) del logotipo en las fichas impresas. |
| Ruta de contrato | Ruta de la plantilla del contrato estándar. |
| Ruta de contrato socio | Plantilla de contrato para la categoría de socios. |
| Ruta de ficha de nutrición | Plantilla de las evaluaciones de nutrición. |
| Ficha de nutrición PDF | Nombre del PDF predeterminado de la ficha. |
| Min. cita de nutrición | Duración mínima de las citas, en minutos. |

::: warning Importante
Los campos de **rutas** y **servidor** son técnicos. Si no está seguro de qué colocar, consulte con soporte antes de modificarlos.
:::

## Guía rápida

**Buscar una sede:** escriba el nombre en *Nombre* → clic en **Buscar**.

**Editar una sede:** en *Operaciones* clic en **Editar** (amarillo) → modifique los campos → guarde.

**Eliminar una sede:** clic en **Eliminar** (rojo) de la fila → confirme el mensaje.
