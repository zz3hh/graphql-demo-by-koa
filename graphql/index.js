const apolloServer = require('apollo-server-koa');
const graphqlTools = require('graphql-tools');
const Router = require('koa-router');

const router = new Router();
const graphqlKoa = apolloServer.graphqlKoa;
const graphiqlKoa = apolloServer.graphiqlKoa;
const makeExecutableSchema = graphqlTools.makeExecutableSchema;

const typeDefs = [`
type Query {
  hello: String
}

schema {
  query: Query
}`];

const resolvers = {
    Query: {
        hello(root) {
            return 'world';
        }
    }
};

const schema = makeExecutableSchema({ typeDefs, resolvers });

// koaBody is needed just for POST.
router.post('graphql', graphqlKoa({ schema: schema }));
router.get('graphql', graphqlKoa({ schema: schema }));
router.get('graphiql', graphiqlKoa({ endpointURL: '/graphql' }));

module.exports = router;