import { About, Contact, Education, Home, Skills } from '../contents/index'

const Routes = [
    {
        path: '/about',
        component: About,
        isPublic: true,
    },
    {
        path: '/contact',
        component: Contact,
        isPublic: true,
    },{
        path: '/education',
        component: Education,
        isPublic: true,
    },
    {
        path: '/skills',
        component: Skills,
        isPublic: true,
    },
    {
        path: '/',
        component: Home,
        isPublic: true,
    },
]

export default Routes