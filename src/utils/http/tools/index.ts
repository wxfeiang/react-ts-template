import type { IResponse } from '../types';
import { ContentTypeEnum, ResultEnum, ShowMessage } from './enum';
import { resolveApiUrl } from './server';

/**
 * 显示提示信息并返回一个拒绝的Promise
 * @param message - 要显示的提示信息内容
 * @param showToast  - 是否显示提示信息(默认全局显示)
 * @returns 返回一个被拒绝的Promise，拒绝值为包含错误信息的Error对象
 */
export function showGloablToast(message: string, showToast?: boolean) {
  if (!showToast) {
    console.error(message);
  }
  const errorMessage = new Error(message);
  Object.assign(errorMessage, { message });
  return Promise.reject(errorMessage);
}

/**
 * 显示提示信息并返回一个拒绝的Promise 使用全局弹框 打开/关闭全局loading 显示
 * @param message - 要显示的提示信息内容
 */
export function showGlobalLoading(message: string) {
  console.error(message);
}
/**
 * 发起请求前的预处理函数
 * @param {object} method - 请求方法对象，包含请求配置、参数等信息
 */
export function beforeRequest(method: any) {
  const { config } = method;
  if (!config.meta?.loading) {
    showGlobalLoading(method.meta?.loadingText);
  }

  // 设置默认 Content-Type
  config.headers = {
    'content-type': ContentTypeEnum.JSON,
    Accept: 'application/json, text/plain, */*',
    ...method.config.headers,
  };
  // 处理动态域名多服务
  method.baseURL = resolveApiUrl(config.meta?.otherServiceUrl);
}

/**
 * 处理请求响应后的函数
 * @param {object} method:Method - 请求方法对象，包含请求配置、返回信息解密
 */
export async function afterResponse(response: any, method: any) {
  console.error('[response]==>>>:', response);

  const { config } = method;
  const { requestType, meta } = config;
  const { status: statusCode, data: rawData } = response;

  // 处理特殊请求类型（上传/下载）
  if (requestType === 'upload' || requestType === 'download') {
    return response;
  }
  // 处理 HTTP 状态码错误
  if (statusCode !== 200) {
    const errorMessage = ShowMessage(statusCode) || `HTTP请求错误[${statusCode}]`;
    return showGloablToast(errorMessage, config.meta?.Tips);
  }
  // 处理业务逻辑
  const { data } = rawData as IResponse;
  // 整体数据
  if (meta?.resAll) {
    return response;
  }

  if (data?.code && data?.code * 1 !== ResultEnum.Success200) {
    showGloablToast(data.msg, config.meta?.Tips);
    return response;
  }

  return response;
}

/**
 *  判断是否过期了
 * @returns isExpired   boolean
 */
export function isExpired(error: any) {
  console.error('🍒======>>>>', error);
  console.error(error);
  // 当服务端返回401时，表示token过期，需要刷新token
  return error.response?.status === ResultEnum.Unauthorized;
}

/**
 * refreshToken 刷新token
 * @returns void
 */

export function refreshToken() {
  // // 获取新的token
  // const token = ''
  // // 更新token
  // const userStore = useUserStore()
  // userStore.setToken(token)
  // // 重试请求
  // // retryRequest()
  console.error('====>>', '刷新token');
}
