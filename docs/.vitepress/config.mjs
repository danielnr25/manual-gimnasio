import { defineConfig } from 'vitepress'

export default defineConfig({
    lang: 'es-ES',
    title: 'TAQINIGYM',
    titleTemplate: ':title | Manual de usuario TAQINIGYM',
    description: 'Manual de usuario del sistema de gestión de gimnasios TAQINIGYM: contratos, renovaciones, caja, reportes y más.',

    cleanUrls: true,
    lastUpdated: true,
    ignoreDeadLinks: true,
    head: [
        ['link', { rel: 'icon', href: '/img/favicon.png' }],
        ['meta', { name: 'theme-color', content: '#3b4cca' }]
    ],

    themeConfig: {
        siteTitle: 'Manual TAQINIGYM',

        nav: [
            { text: 'Inicio', link: '/' },
            { text: 'Guía', link: '/introduccion', activeMatch: '^/(introduccion|inicio)' },
            { text: 'Módulos', link: '/modulos/introduccion', activeMatch: '^/modulos' }
        ],

        sidebar: {
            '/': [
                {
                    text: 'Guía inicial',
                    items: [
                        { text: 'Introducción', link: '/introduccion' },
                        { text: 'Ingreso al sistema', link: '/inicio/ingreso-sistema' }
                    ]
                },
                {
                    text: 'Módulos',
                    items: [
                        { text: 'Visión general', link: '/modulos/introduccion' },
                        {
                            text: 'Administración',
                            link: '/modulos/administracion/',
                            collapsed: true,
                            items: [
                                { text: 'Sedes', link: '/modulos/administracion/sedes' },
                                { text: 'Servicios', link: '/modulos/administracion/servicios' },
                                { text: 'Salas', link: '/modulos/administracion/salas' },
                                { text: 'Razón de venta', link: '/modulos/administracion/razon-venta' },
                                { text: 'Cajas', link: '/modulos/administracion/cajas' },
                                { text: 'Horarios', link: '/modulos/administracion/horarios' },
                                { text: 'Horarios Nutrición', link: '/modulos/administracion/horarios-nutricion' },
                                { text: 'Numeración de documentos', link: '/modulos/administracion/numeracion-documentos' },
                                { text: 'Pagos fijos', link: '/modulos/administracion/pagos-fijos' },
                                { text: 'Promociones', link: '/modulos/administracion/promociones' },
                                { text: 'Conceptos Ingresos/Egresos', link: '/modulos/administracion/conceptos' }
                            ]
                        }
                    ]
                }
            ]
        },

        search: {
            provider: 'local',
            options: {
                translations: {
                    button: { buttonText: 'Buscar', buttonAriaLabel: 'Buscar' },
                    modal: {
                        displayDetails: 'Mostrar detalles',
                        resetButtonTitle: 'Limpiar búsqueda',
                        noResultsText: 'No se encontraron resultados para',
                        footer: {
                            selectText: 'Seleccionar',
                            navigateText: 'Navegar',
                            closeText: 'Cerrar'
                        }
                    }
                }
            }
        },

        outline: { level: [2, 3], label: 'En esta página' },

        docFooter: { prev: 'Anterior', next: 'Siguiente' },
        lastUpdated: { text: 'Última actualización' },

        darkModeSwitchLabel: 'Tema',
        lightModeSwitchTitle: 'Cambiar a tema claro',
        darkModeSwitchTitle: 'Cambiar a tema oscuro',
        sidebarMenuLabel: 'Menú',
        returnToTopLabel: 'Volver arriba',
        langMenuLabel: 'Cambiar idioma',
        skipToContentLabel: 'Saltar al contenido',

        socialLinks: [
            { icon: 'safari', link: 'https://www.taqini.pe/', ariaLabel: 'Sitio web de Taqini' }
        ],

        footer: {
            message: 'Soporte: <a href="https://wa.me/51980870302">+51 980 870 302</a>',
            copyright: '© 2026 Taqini. Todos los derechos reservados.'
        }
    }
})