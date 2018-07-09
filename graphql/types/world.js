const graphql = require('graphql');

const worldType = {
  type: graphql.GraphQLString,
  resolve() {
    return 'world';
  }
}

module.exports = worldType;