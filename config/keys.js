if(process.env.NODE_ENV === 'production')
{
  mnodule.exports = require('./prod')
}
else{
  module.exports = require('./dev')
}