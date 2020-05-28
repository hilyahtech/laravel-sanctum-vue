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
    },
    {
        path: '/password/reset',
        name: 'password.request',
        component: page('auth/password/email')
    },
    {
        path: '/password/reset/:token',
        name: 'password.reset',
        component: page('auth/password/reset')
    },
    {
        path: '/email/verify/:id',
        name: 'verification.verify',
        component: page('auth/verification/verify')
    },
    {
        path: '/email/resend',
        name: 'verification.resend',
        component: page('auth/verification/resend')
    },
]