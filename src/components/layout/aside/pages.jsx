import DashboardIcon from '../../../assets/svgs/pagesIcons/DashboardIcon';
import ProjectsIcon from '../../../assets/svgs/pagesIcons/ProjectsIcon';
import MapsIcon from '../../../assets/svgs/pagesIcons/MapsIcon';
import VehiclesIcon from '../../../assets/svgs/pagesIcons/VehiclesIcon';
import UsersIcon from '../../../assets/svgs/pagesIcons/UsersIcon';
import SensorsIcon from '../../../assets/svgs/pagesIcons/SensorsIcon';
import ViolationsIcon from '../../../assets/svgs/pagesIcons/ViolationsIcon';
import ScoreCardIcon from '../../../assets/svgs/pagesIcons/ScoreCardIcon';
import PlansAndPricingIcon from '../../../assets/svgs/pagesIcons/PlansAndPricingIcon';
import SettingsIcon from '../../../assets/svgs/pagesIcons/SettingsIcon';

export const pages = [
    {
        title: 'Dashboard',
        icon: <DashboardIcon />,
        subPages: [
            {
                title: 'Home',
                link: '/user/home'
            },
            {
                title: 'Active Devices',
                link: '/user/active-devices'
            },
            {
                title: 'Workforce',
                link: '/user/workforce'
            },
            {
                title: 'Device Data',
                link: '/user/device-data'
            },
            {
                title: 'Vehicles Data',
                link: '/user/vehicles-data'
            },
            {
                title: 'SOS',
                link: '/user/sos'
            },
        ]
    },
    {
        title: 'Projects',
        link: '/user/projects',
        icon: <ProjectsIcon />,
    },
    {
        title: 'Maps',
        icon: <MapsIcon />,
        subPages: [
            {
                title: 'Realtime',
                link: '/user/realtime'
            },
            {
                title: 'Geofence',
                link: '/user/geofence'
            },
        ]
    },
    {
        title: 'Vehicles',
        link: '/user/vehicles',
        icon: <VehiclesIcon />,
    },  
    {
        title: 'Users',
        link: '/user/users',
        icon: <UsersIcon />,
    },  
    {
        title: 'Sensors',
        link: '/user/sensors',
        icon: <SensorsIcon />,
    },
    {
        title: 'Violations',
        icon: <ViolationsIcon />,
        subPages: [
            {
                title: 'Users Violation',
                link: '/user/users-violation'
            },
            {
                title: 'Vehicles Violation',
                link: '/user/vehicles-violation'
            },
        ]
    },  
    {
        title: 'Score Card',
        link: '/user/score-card',
        icon: <ScoreCardIcon />,
    },
    {
        title: 'Plans & Pricing',
        icon: <PlansAndPricingIcon />,
        subPages: [
            {
                title: 'Plans',
                link: '/user/plans'
            },
            {
                title: 'Transactions',
                link: '/user/transactions'
            },
        ]
    }, 
    {
        title: 'Settings',
        icon: <SettingsIcon />,
        subPages: [
            {
                title: 'Update Profile',
                link: '/user/update-profile'
            },
        ]
    },
]