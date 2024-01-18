export default [
    {
        path: '/',
        redirect: '/login',    
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../pages/login/LoginPage.vue')
    },
    {
        path: '/forms',
        name: 'forms',
        component: () => import('../layouts/FormsLayout.vue'),
        redirect: '/forms/list',
        children:[ 
            {
                path: 'list',
                name: 'forms.list',
                component: () => import('../pages/forms/FormsPage.vue'),
            }
        ]
    },
    {
        path: '/edit',
        name: 'edit',
        component: () => import('../layouts/EditLayout.vue'),
        redirect: '/edit/fields',
        children:[ 
            {
                path: 'fields',
                name: 'edit.fields',
                component: () => import('../pages/fields/EditFieldsPage.vue')
            }
        ]
    },
    {
        path: '/preview',
        name: 'preview',
        component: () => import('../pages/preview/FormPreviewPage.vue'),
    },
    {
        path: '/:catchAll(.*)',
        redirect: '/'
    },
]