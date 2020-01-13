const menuList = [
    {
        title: 'Home',
        key: '/admin/home'
    },
    {
        title: 'UI',
        key: '/admin/ui',
        children: [
            {
                title: 'Button',
                key: '/admin/ui/buttons'
            },
            {
                title: 'Modals',
                key: '/admin/ui/modals'
            },
            {
                title: 'Loading',
                key: '/admin/ui/loading'
            },
        ]
    },
    {
        title: 'Employee Management',
        key: '/admin/user'
    },
    {
        title: 'Shuttle Map',
        key: '/admin/map',
        children: [
            {
                title: 'Pie',
                key: '/admin/map/pie'
            },
            {
                title: 'Histogram',
                key: '/admin/map/histogram'
            }
        ]
    },
    {
        title: 'Permission',
        key: '/admin/permission'
    }
];

export default menuList;