import tasksRouter from './router/tasks'
import AuthRouter from './router/auth'
import membersRouter from './router/members'
const ROUTES = [
    {
        path: '/',
        router: AuthRouter

    },
    {
        path: '/task',
        router: tasksRouter

    }, {
        path: '/members',
        router: membersRouter
    }

]

export default ROUTES