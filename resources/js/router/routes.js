function page(path)
{
    return () => import(`~/views/${path}.vue`).then(m => m.default || m)
}

export default [
    {
        path: '/',
        name: 'home',
        component: page('home')
    }
]