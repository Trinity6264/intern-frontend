
import { RiLogoutCircleLine, RiDashboardLine, RiProfileLine, RiNotificationLine, RiMessage2Line, RiBook3Line, RiTaskLine } from 'react-icons/ri'

const sidebarData = [
    {
        id: 1,
        name: "Dashboard",
        icon: RiDashboardLine,
        isActive: true,
        path: '/'

    },
    {
        id: 2,
        name: "Notifications",
        icon: RiNotificationLine,
        isActive: false,
        path: '/notification'
    },
    {
        id: 3,
        name: "Chat",
        icon: RiMessage2Line,
        isActive: false,
        path: '/chat'
    },
    {
        id: 4,
        name: "Reviews",
        icon: RiBook3Line,
        isActive: false,
        path: '/reviews'
    },
    {
        id: 5,
        name: "Tasks",
        icon: RiTaskLine,
        isActive: false,
        path: '/task'
    },
    {
        id: 6,
        name: "My Profile",
        icon: RiProfileLine,
        isActive: false,
        path: '/profile'
    },
    {
        id: 7,
        name: "Logout",
        icon: RiLogoutCircleLine,
        isActive: false,
        path: '/logout'
    },
]

export default sidebarData;