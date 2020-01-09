export default {
  admin: {
    authorize: {
      clientId: 2,
      clientSecret: 'oZcUFG1MRU73yW4DAOaVkJrUNCoRYjOk2zn8AmXD'
    },
    loginRouteName: 'adminLogin',

    dashboardName: 'adminDashboard',

    dashboardFullPath: '/admin/dashboard',

    appName: {
      fullName: '多乐后台管理',
      abbrName: '多乐'
    },

    locale: 'en'
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
}