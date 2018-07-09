const graphql = require('graphql');
const GraphQLSchema = graphql.GraphQLSchema;

const queryType = require('../types');

const schema = new GraphQLSchema({
  query: queryType
});

module.exports = schema;