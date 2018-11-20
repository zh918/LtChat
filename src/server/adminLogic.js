
import urls from './urls'

export default class AdminLogic {

  /**
   * 管理员登录
   */
  static login(parms) {
    return $http.post(urls.adminLogin, parms);
  }
}
