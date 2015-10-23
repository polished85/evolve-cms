AccountsTemplates.configure({
    enablePasswordChange: true,
    showForgotPasswordLink: true,
    showResendVerificationEmailLink: true,

    defaultLayout: 'single_col',
    defaultLayoutRegions: {},
    defaultContentRegion: 'main'
})

AccountsTemplates.configureRoute('signIn')
AccountsTemplates.configureRoute('signUp')
AccountsTemplates.configureRoute('changePwd')
AccountsTemplates.configureRoute('enrollAccount')
AccountsTemplates.configureRoute('forgotPwd')
// AccountsTemplates.configureRoute('resetPwd')
AccountsTemplates.configureRoute('verifyEmail')
AccountsTemplates.configureRoute('resendVerificationEmail')