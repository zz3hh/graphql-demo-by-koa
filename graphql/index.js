const apolloServer = require('apollo-server-koa');
const graphqlTools = require('graphql-tools');
const Router = require('koa-router');

const schema = require('./schemas');

const router = new Router();
const graphqlKoa = apolloServer.graphqlKoa;
const graphiqlKoa = apolloServer.graphiqlKoa;
const makeExecutableSchema = graphqlTools.makeExecutableSchema;



// koaBody is needed just for POST.
router.post('graphql', graphqlKoa({ schema: schema }));
router.get('graphql', graphqlKoa({ schema: schema }));
router.get('graphiql', graphiqlKoa({ endpointURL: '/graphql' }));

module.exports = router;