const apolloServer = require('apollo-server-koa');
const graphqlTools = require('graphql-tools');
const Router = require('koa-router');

const schema = require('./schemas');

const router = new Router();
const graphqlKoa = apolloServer.graphqlKoa;
const graphiqlKoa = apolloServer.graphiqlKoa;
const makeExecutableSchema = graphqlTools.makeExecutableSchema;

// koaBody is needed just for POST.
// 这里追加上下文信息
router.post('graphql', function (ctx) {
    return graphqlKoa({ schema: schema, context: ctx })(ctx);
});
router.get('graphql', function (ctx) {
    return graphqlKoa({ schema: schema, context: ctx })(ctx);
});

// router.post('graphql', graphqlKoa({ schema: schema }));
// router.get('graphql', graphqlKoa({ schema: schema }));

router.post('graphiql', function (ctx) {
    return graphiqlKoa({ endpointURL: '/graphql' })(ctx);
});
// router.get('graphiql', graphiqlKoa({ endpointURL: '/graphql' }));




module.exports = router;