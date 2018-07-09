var koa = require('koa');
var apolloServer = require('apollo-server-koa');
var graphqlTools = require('graphql-tools');
var bodyParser = require('koa-bodyparser');
var Router = require('koa-router');

var app = new koa();
var router = new Router();
var graphqlKoa = apolloServer.graphqlKoa;
var graphiqlKoa = apolloServer.graphiqlKoa;
var makeExecutableSchema = graphqlTools.makeExecutableSchema;


var typeDefs = [`
type Query {
  hello: String
}

schema {
  query: Query
}`];

var resolvers = {
    Query: {
        hello(root) {
            return 'world';
        }
    }
};

var schema = makeExecutableSchema({ typeDefs, resolvers });

// koaBody is needed just for POST.
// router.post('/graphql', bodyParser(), graphqlKoa({ schema: schema }));
// router.get('/graphql', graphqlKoa({ schema: schema }));

// router.get('/graphiql', graphiqlKoa({ endpointURL: '/graphql' }));

router.get('/', function* (next) {
    this.body = 'hello world';
});

// app.use(router.routes());
// app.use(router.allowedMethods());

app.listen(7000, function () {
    console.log('service at 7000 port');
});
