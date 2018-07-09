const graphql = require('graphql');
const GraphQLObjectType = graphql.GraphQLObjectType;
const GraphQLString = graphql.GraphQLString;
const GraphQLList = graphql.GraphQLList;

const PostModel = require('../../../models/post');
const TagModel = require('../../../models/tag');

const PostType = require('./post');
const TagType = require('./tag');

/**
 * type Blog {
 *   post: Post,	// 查询一篇文章
 *   posts: [Post],	// 查询一组文章，用于博客首页
 *   tag: Tag,		// 查询一个标签
 *   tags: [Tag],	// 查询所有标签，用于博客标签页
 * }
 */

const BlogType = new GraphQLObjectType({
  name: 'BlogType',
  fields: function () {
    return {
      post: {
        type: PostType,
        args: {
          name: {
            type: GraphQLString
          }
        },
        resolve: async function (blog, params) {
          try {
            const result = await PostModel.findOne({ name: params.name });
            return result;
          } catch (error) {
            return ctx.body = {
              code: -1,
              message: '获取博文信息出错'
            };
          }
        }
      },
      posts: {
        type: new GraphQLList(PostType),
        resolve: async function () {
          try {
            const result = await PostModel.find({});
            return result;
          } catch (error) {
            return ctx.body = {
              code: -1,
              message: '获取博文列表信息出错'
            };
          }
        },
      },
      tag: {
        type: TagType,
        args: {
          name: {
            type: GraphQLString
          }
        },
        resolve: async function (blog, params) {
          try {
            const result = await TagModel.findOne({ name: params.name });
            return result;
          } catch (error) {
            return ctx.body = {
              code: -1,
              message: '获取标签信息出错'
            };
          }
        },
      },
      tags: {
        type: new GraphQLList(TagType),
        resolve: async function () {
          try {
            const result = await TagModel.findOne({});
            return result;
          } catch (error) {
            return ctx.body = {
              code: -1,
              message: '获取标签信息出错'
            };
          }
        },
      }
    }
  },
});


module.exports = BlogType;
