export default {
    admin: {
        authorize: {
            clientId: 2,
            clientSecret: '5GEuFn30gM0sEW1QdhknBzoctqIgFgyRzRQq6rTc'
        },
        // provider 为 admin 时登录路由名
        loginRouteName: 'adminLogin',

        // provider 为 admin 初始页面路由
        dashboardName: 'adminDashboard',

        // provider 为 admin 初始页面完全路径
        dashboardFullPath: '/admin/dashboard',

        // 项目全名 和 项目缩写名
        appName: {
            fullName: '多乐后台管理',
            abbrName: '多乐'
        },

        locale: 'zh'
    },

    // 支持多表登录时，guard 键值对
    guardNames: [
        {
            label: 'admin',
            value: 'admin'
        }
    ],

    apiUrl: '',

    //Unit is day
    tokenTTL: 1,

    //Unit is day
    refreshTokenTTL: 7,

    showAuthorGitHubUrl: true,

    hostUrl: location.protocol + '//' + window.location.host,
}