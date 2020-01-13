export default {
    admin: {
        authorize: {
            clientId: 2,
            clientSecret: '5GEuFn30gM0sEW1QdhknBzoctqIgFgyRzRQq6rTc'
        },
        loginRouteName: 'adminLogin',

        dashboardName: 'adminDashboard',

        dashboardFullPath: '/admin/dashboard',

        appName: {
            fullName: '多乐后台管理',
            abbrName: '多乐'
        },

        locale: 'zh'
    },

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