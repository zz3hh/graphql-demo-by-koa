const koa = require('koa');
const bodyParser = require('koa-bodyparser');
const mongoose = require('mongoose');
const router = require('./routes');

const app = new koa();

const config = require('./config');

const env = (process.env.NODE_ENV || 'development').toLowerCase();
const config_info = config[env];

mongoose.connect(config_info.mongodb_uri);

app.use(async function(ctx,next){
    console.log(ctx.request.ip);
    await next();
});

app.use(bodyParser({
    multipart: true
}));

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(7000, function () {
    console.log('service at 7000 port');
});
