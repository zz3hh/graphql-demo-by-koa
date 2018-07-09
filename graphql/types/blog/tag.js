const graphql = require('graphql');
const TagModel = require('../../../models/tag');
const PostType = require('./post');
const GraphQLNonNull = graphql.GraphQLNonNull;
const GraphQLID = graphql.GraphQLID;
const GraphQLObjectType = graphql.GraphQLObjectType;
const GraphQLList = graphql.GraphQLList;
const GraphQLString = graphql.GraphQLString;

/**
* type Tag {
*   id: ID!,
*   name: String!,
*   label: String!,
*   createDate: String!,
*   posts: [Post]
* }
*/

const Tag = new GraphQLObjectType({
  name: 'TagType',
  fields: function () {
    return {
      id: {
        type: new GraphQLNonNull(GraphQLID)
      },
      name: {
        type: new GraphQLNonNull(GraphQLString)
      },
      label: {
        type: new GraphQLNonNull(GraphQLString)
      },
      createDate: {
        type: new GraphQLNonNull(GraphQLString)
      },
    }
  },
});

module.exports = Tag;