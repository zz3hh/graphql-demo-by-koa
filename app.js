const koa = require('koa');
// const apolloServer = require('apollo-server-koa');
// const graphqlTools = require('graphql-tools');
const bodyParser = require('koa-bodyparser');
// const Router = require('koa-router');
const mongoose = require('mongoose');
const router = require('./routes');

const app = new koa();
// const router = new Router();
// const graphqlKoa = apolloServer.graphqlKoa;
// const graphiqlKoa = apolloServer.graphiqlKoa;
// const makeExecutableSchema = graphqlTools.makeExecutableSchema;

const config = require('./config');

const env = (process.env.NODE_ENV || 'development').toLowerCase();
const config_info = config[env];

mongoose.connect(config_info.mongodb_uri);

// const typeDefs = [`
// type Query {
//   hello: String
// }

// schema {
//   query: Query
// }`];

// const resolvers = {
//     Query: {
//         hello(root) {
//             return 'world';
//         }
//     }
// };

app.use(bodyParser({
    multipart: true
}));

// const schema = makeExecutableSchema({ typeDefs, resolvers });

// // koaBody is needed just for POST.
// router.post('/graphql', graphqlKoa({ schema: schema }));
// router.get('/graphql', graphqlKoa({ schema: schema }));
// router.get('/graphiql', graphiqlKoa({ endpointURL: '/graphql' }));


app.use(router.routes());
app.use(router.allowedMethods());

app.listen(7000, function () {
    console.log('service at 7000 port');
});
