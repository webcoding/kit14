// ENV

import { version } from '../../package.json'
import device from '@/utils/device'
import debug from '@/config/debug'

// 自动判断环境，支持 debug 调试
// 取参数以及debug调试
const { location } = window
const { params } = debug
const prodHost = 'm.haoshiqi.net'

let channel = 'h5'
let terminal = 'wap'
if (device.alipay) {
  channel = params.channel_id || 'alipay_ant' // huabei
  terminal = 'alipay'
}

console.info('version:', version)
console.info('channel:', channel)
console.info('terminal:', terminal)

export const ENV = {
  prod: {
    stage: 'prod',
    baseUrl: 'https://m.haoshiqi.net',
    // apiBaseUrl: 'https://m.api.haoshiqi.net',
    apiBaseUrl: 'https://dapi.cloudai.net',
  },
  dev: {
    stage: 'dev',
    baseUrl: 'http://m.dev.haoshiqi.net',
    apiBaseUrl: 'https://api-dev',
  },
  beta: {
    stage: 'beta',
    baseUrl: 'https://m.beta.haoshiqi.net',
    apiBaseUrl: 'https://api-dev',
  },
  test: {
    stage: 'test',
    routerMode: 'hash',
    baseUrl: location.origin, // 当前地址ip 可以取当前 location.origin
    apiBaseUrl: 'https://api-dev',
  },
  local: {
    stage: 'local',
    routerMode: 'hash',
    baseUrl: location.origin, // localhost
    apiBaseUrl: 'https://dapi.cloudai.net',
    // apiBaseUrl: 'http://10.0.6.55:8080',
    // apiBaseUrl: 'https://api-dev',
    // apiBaseUrl: 'http://m.devapi.haoshiqi.net',
    // apiBaseUrl: 'http://m.betaapi.haoshiqi.net',
    // apiBaseUrl: 'http://m.api.haoshiqi.net',
  },
}

/*
# nginx

location / {
  index index.html;
  try_files $uri $uri/ /index.html;
}

# 指定v2子目录时
location /v2 {
  alias v2 /data/hsq/v2;
  index index.html;
  try_files $URI $uri/ /v2/index.html;
}
*/
const baseEnv = {
  ...debug,
  version,    // 应用版本
  channel,    // 渠道信息
  terminal,   // 终端
  stage: 'prod', // 发行版本
  spm: '', // spm
  port: 8001,
  base: 'v2',
  baseUrl: 'https://m.haoshiqi.net',
  apiBaseUrl: 'https://m.api.haoshiqi.net',
  // apiMockUrl: 'https://easy-mock.com/mock/5950a2419adc231f356a6636/vue-admin',
  // apiMockUrl: 'https://easy-mock.com/mock/5b0bcc5e030e617380591803',
  // apiMockUrl: 'https://api-dev',
  apiMockUrl: '',
  routerMode: 'history',
  // googleAnalyticsId: 'UA-XXXXX-X',
  // baiduAnalyticsId: 'UA-XXXXX-X',
  publicPath: '',
  origin: location.origin,
  isEnv(current) {
    const { stage } = this
    return stage === current || (Array.isArray(current) && current.indexOf(stage) > -1)
  },
  envDebug(...rest) {
    console.warn('仅限临时使用')
    if (!rest) return false
    // 传入期望的环境，返回true，默认 prod 为false
    return rest.indexOf('dev') > -1
  },
}

const regDev = /^(d14\.cloudai\.net)/i
const regBeta = /^(d14\.cloudai\.net)/i
const regProd = /^(d14\.cloudai\.net)/i
const regLocal = /^(localhost|127\.)/i
const regLocalIp = /^(10\.|192\.)/i
// const { protocol, host = ENV.prod.host, origin = ENV.prod.baseUrl } = location

function createEnv(opts = {}) {
  const { env = 'prod' } = opts
  const {
    host = prodHost,
  } = location
  const prodEnv = { ...baseEnv, ...ENV.prod }
  if (host.match(regProd)) {
    return prodEnv
  }
  if (host.match(regBeta)) {
    return { ...prodEnv, ...ENV.beta }
  }

  if (host.match(regDev)) {
    return { ...prodEnv, ...ENV.dev }
  }

  const isLocal = host.match(regLocal)
  const isLocalIp = host.match(regLocalIp)
  if (isLocal || isLocalIp) {
    return { ...prodEnv, ...ENV.local,
      // baseUrl: `${origin}/#`,
      // apiBaseUrl: `${origin}`,
      debug: true,
    }
  }
  // __TEST__
  return { ...prodEnv, ...ENV.test }
}

const currentEnv = createEnv({
  // env,
})

// 默认会有个 api 配置，之后会读取 store
export default currentEnv
