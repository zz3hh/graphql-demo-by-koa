'use stric';

const config = {
  enableCluster: false,
  enableQueueCluster: false,
  numCPUs: 2,
  numQueueCPUs: 2,
  port: 4000,
  name: 'project template by expresss',
  sessionSecret: 'ASDFGHJKL BYT HWP BMC',
  log_level: 5, // 0:关闭所有不必要的log 1:严重的系统错误 2：普通错误 3：警告信息 4：调试信息 5: 网络请求信息
  debug_log: true,
  phoneRegex: /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/,
  development: {
    log_dir: 'logs',
    mongodb_uri: "mongodb://127.0.0.1:27017/graphql-demo?poolSize=5",
    redis: {
      host: "127.0.0.1",
      port: 6379,
      opts: {
        auth_pass: ""
      },
    },
    wechat: {
      appID: 'wx33df4e6a391*****',
      appSecret: 'a58804b314c48904bb3857bf1c*****',
      token: '*************',
    },
  },
  production: {
    log_dir: '/var/data/logs',
    mongodb_uri: "mongodb://127.0.0.1:27017/graphql-demo?poolSize=5",
    redis: {
      host: "localhost",
      port: 6379,
      opts: {
        auth_pass: ""
      },
    },
    wechat: {
      appID: 'wx33df4e6a391*****',
      appSecret: 'a58804b314c48904bb3857bf1c*****',
      token: '*************',
    },
  }
}

module.exports = config;