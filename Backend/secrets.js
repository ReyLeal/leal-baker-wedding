const secrets = {
  dbUri: 'mongodb://rey:paco00@ds229108.mlab.com:29108/rakerwedding',
};
const getSecret = key => secrets[key];
module.exports = getSecret;