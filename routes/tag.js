const Router = require('koa-router');
const TagController = require('../controllers/tag');

const router = new Router();

router.post('tag', TagController.addTag);
router.get('tag/:id', TagController.getTag);
router.put('tag/:id', TagController.updateTag);
router.delete('tag/:id', TagController.removeTag);

module.exports = router;