import config from '@/config/config.default'
export default {
    login: '/uban/authority/login',
    register: '/uban/authority/register',
    registerByOrganUser: '/uban/authority/registerByOrganUser',
    changePwd: '/uban/authority/changePwd',
    resetPwd: '/uban/authority/resetPwd',
    registerOrgan: '/uban/authority/registerOrgan',
    file: {
        preview: config.host+'/uban/file/preview/',
        download: config.host+'/uban/file/download/',
        upload: config.host+'/uban/file/upload',
    },
}
