const graphql = require('graphql');
const PostModel = require('../../../models/post');
const TagType = require('./tag');
const GraphQLNonNull = graphql.GraphQLNonNull;
const GraphQLID = graphql.GraphQLID;
const GraphQLObjectType = graphql.GraphQLObjectType;
const GraphQLList = graphql.GraphQLList;
const GraphQLString = graphql.GraphQLString;

/**
 * type Post {
 *   id: String,
 *   name: String,
 *   createDate: String,
 *   title: String,
 *   subtitle: String,
 *   content: String,
 *   tags: [Tag]
 * }
 */

const Post = new GraphQLObjectType({
  name: 'PostType',
  fields: function () {
    return {
      id: {
        type: new GraphQLNonNull(GraphQLID)
      },
      name: {
        type: new GraphQLNonNull(GraphQLString)
      },
      createDate: {
        type: new GraphQLNonNull(GraphQLString)
      },
      title: {
        type: new GraphQLNonNull(GraphQLString)
      },
      subtitle: {
        type: GraphQLString
      },
      content: {
        type: GraphQLString
      },
    };
  }
});

module.exports = Post;
