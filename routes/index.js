const router = require('koa-router')();

router.use('/', require('./post').routes());
router.use('/', require( './tag').routes());

// router.use('/', require('./mudules').routes());

router.use('/', require('../graphql').routes());

module.exports = router;