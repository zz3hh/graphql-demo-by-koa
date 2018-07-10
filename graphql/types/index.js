const graphql = require('graphql');
const GraphQLObjectType = graphql.GraphQLObjectType;
const GraphQLString = graphql.GraphQLString;
const WorldType = require('./world');
const BlogType = require('./blog');

const timeout = function () {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const random = Math.random();
      if (random > 0.5) {
        return resolve(random);
      } else {
        return reject(random);
      }
    }, 1000);
  });
}

const queryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: function () {
    return {
      hello: WorldType,
      blog: {
        type: BlogType,
        resolve: function () {
          return {};
        }
      },
      time: {
        type: GraphQLString,
        resolve: function () {
          console.log(arguments);
          return Date.now().valueOf();
        }
      },
      random:{
        type:GraphQLString,
        resolve:async function(root, args, context, info){
          console.log(context);
          return "random";
          // return await timeout();
        }
      }
    }
  }
});

module.exports = queryType;