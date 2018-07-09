const Router = require('koa-router');
const PostController = require('../controllers/post');

const router = new Router();

router.post('post', PostController.addPost);
router.get('post/:id', PostController.getPost);
router.put('post/:id', PostController.updatePost);
router.delete('post/:id', PostController.removePost);

module.exports = router;