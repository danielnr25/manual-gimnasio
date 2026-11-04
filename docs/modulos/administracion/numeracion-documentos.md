# Numeración de documentos

Administra las **series, correlativos y estado** de los comprobantes y documentos que genera el sistema en cada sede.

![Numeración de documentos](/img/administracion/numeracion-listado.png)

## Filtros y botones

| Elemento | Descripción |
| --- | --- |
| Sede | Filtra por sede. |
| Institución | Filtra por la institución asociada. |
| Filas a mostrar | Registros por página. |
| **Registro en Lote** | Genera varias numeraciones de forma masiva. |
| **+ Nuevo** | Registra una nueva serie o comprobante. |

## Columnas de la tabla

![Tabla de numeración](/img/administracion/numeracion-tabla.png)

| Columna | Descripción |
| --- | --- |
| Documento | Tipo: Boleta electrónica, Factura electrónica, Egresos, Ingreso almacén, Contrato, Ingresos, Traslados, Nota de venta. |
| Serie | Código de serie (ej. 001, 005). |
| Number | Correlativo actual o inicial (ej. 00000001). |
| Activo | **SI / NO**: si la numeración está vigente. |
| Sede | Local donde opera. |
| Razón Social | Entidad emisora vinculada. |
| Operaciones | Editar y Eliminar. |

::: warning Cuidado
Modificar el correlativo de un documento en uso puede generar números duplicados o saltos. Cámbielo solo si está seguro.
:::
