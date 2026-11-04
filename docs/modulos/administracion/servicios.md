# Servicios

Permite crear y mantener las **membresías, promociones y planes** que ofrece el gimnasio en cada sede.

## Pantalla principal

![Listado de servicios](/img/administracion/servicios-listado.png)

### Filtros y botones

![Filtros de servicios](/img/administracion/servicios-filtros.png)

| Elemento | Descripción |
| --- | --- |
| Nombre | Filtra por el nombre del servicio. |
| Estado | Muestra servicios **VIGENTES** u otros estados. |
| Sede | Filtra por sede (TODAS, IZAGA, VIA PIMENTEL, SAENZ PEÑA, BOLOGNESI…). |
| Filas a mostrar | 10, 25 o 50 registros por página. |
| **Buscar** | Aplica los filtros. |
| **Copiar Servicios** | Duplica servicios de una sede a otra de forma masiva. |
| **+ Nuevo** | Abre el formulario de un nuevo servicio. |

## Crear un nuevo servicio

1. Clic en **+ Nuevo**.

![Botón nuevo servicio](/img/administracion/servicios-nuevo.png)

2. Complete el formulario.

![Formulario de nuevo servicio](/img/administracion/servicios-formulario.png)

3. Clic en **✔ Registrar**.

### Datos del plan

| Campo | Descripción |
| --- | --- |
| Sede | Local donde aplica el servicio. |
| Nombre | Nombre comercial (ej. *01 MES LIGHT INTERDIARIO*, *BLUE PROMO 02 MESES*). |
| Precio | Tarifa regular o precio base. |
| Precio máximo | Límite máximo permitido para la tarifa. |
| Precio mínimo | Precio piso o descuento máximo autorizado. |
| Nro meses | Duración base en meses (1, 3, 6, 12…). |
| Días adicionales | Días extra de gracia o promoción. |
| Descripción | Condiciones o características del plan. |
| Vencimiento | Fecha límite de vigencia de la oferta (calendario). |
| Nro sedes | Cantidad de sedes a las que tendrá acceso el cliente. |

### Opciones (SI / NO)

| Pregunta | Para qué sirve |
| --- | --- |
| ¿Contar por sesiones? | Controla la asistencia por número de clases. |
| ¿Restringir citas nutricionales? | Limita las consultas con nutrición. |
| ¿Permite congelamiento? | Autoriza al socio a pausar su membresía. |
| ¿Registrar con Token? | Exige validar con token durante la venta. |
| Visible App | Muestra la membresía en la app móvil. |
| Para Promoción | Clasifica el servicio como oferta o campaña. |

### Salas y archivos

| Campo | Descripción |
| --- | --- |
| ¿A qué salas tiene permisos? | Marque las salas habilitadas (CYCLING, BAILE, FUNCIONAL, KICK-BOXING). |
| Imagen | Banner o imagen promocional (botón **Archivo**). |

## Tabla de servicios

![Tabla de servicios](/img/administracion/servicios-tabla.png)

| Columna | Descripción |
| --- | --- |
| Nombre | Título del servicio. |
| Precio | Tarifa base. |
| P. Máximo / P. Mínimo | Rango permitido de precios. |
| Nro Meses | Vigencia en meses. |
| Días Adicionales | Días extra añadidos. |
| Sede | Local donde aplica. |
| Operaciones | **Editar**, **Copiar** (duplica el servicio) y **Eliminar** (lo retira del catálogo). |
