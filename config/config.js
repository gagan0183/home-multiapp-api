var config  = {
  production: {
    databaseUrl: 'mongodb://gagan:Arihant_90@ds119422.mlab.com:19422/heroku_cljj3dlk'
  },
  local: {
    databaseUrl: 'mongodb://127.0.0.1:27017/homeapp'
  }
}

exports.get = function(env) {
  return config[env] || config['local'];
}
