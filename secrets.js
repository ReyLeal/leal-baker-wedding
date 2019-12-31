const secrets = {
  dbUri: 'mongodb://publicWeb:rakerPublic11223344@ds229108.mlab.com:29108/rakerwedding',
};
const getSecret = key => secrets[key];
module.exports = getSecret;