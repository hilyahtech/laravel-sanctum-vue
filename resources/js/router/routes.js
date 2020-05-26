function page(path)
{
    return () => import(`~/views/${path}.vue`).then(m => m.default || m)
}

export default [
    {
        path: '/',
        name: 'home',
        component: page('home')
    },
    {
        path: '/login',
        name: 'login',
        component: page('auth/login')
    },
    {
        path: '/register',
        name: 'register',
        component: page('auth/register')
    }
]