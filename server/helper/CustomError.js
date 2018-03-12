// 该类用于输出 错误

/**
 * 自定义错误类，用于扩展
 */
export default class CustomError extends Error {
  constructor(status,msg) {
    super(msg);
    this.status = status;
    this.msg = msg;
  }
}
