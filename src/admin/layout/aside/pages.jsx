import DashboardIcon from '../../../assets/svgs/pagesIcons/DashboardIcon';
import UsersIcon from '../../../assets/svgs/pagesIcons/UsersIcon';
import { TbTransactionDollar } from "react-icons/tb";

export const pages = [
    {
        title: 'Dashboard',
        link: '/admin/dashboard',
        icon: <DashboardIcon />
    },
    {
        title: 'Users',
        link: '/admin/users',
        icon: <UsersIcon />,
    },
    {
        title: 'Transactions',
        link: '/admin/transactions',
        icon: <TbTransactionDollar fontSize={18} color='#fff' />,
    },
]