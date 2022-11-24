var express = require('express');
var router = express.Router();
const PostsControllers = require('../controller/posts');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

//路由-取得所有貼文
router.get('/', PostsControllers.getPosts);
//路由-新增一筆貼文
router.post('/', PostsControllers.createdPost);
//路由-修改一筆貼文
router.patch('/:id', PostsControllers.updatedPost);
//路由-刪除一筆貼文
router.delete('/:id', PostsControllers.deletePost);
//路由-刪除所有貼文
router.delete('/', PostsControllers.deleteAllPosts);

module.exports = router;
