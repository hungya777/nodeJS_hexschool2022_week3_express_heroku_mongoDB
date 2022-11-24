const handleSuccess = require('../service/handleSuccess');
const handleError = require('../service/handleError');
const Posts = require('../model/posts');

const posts = {
  async getPosts(req, res){ //取得所有貼文
    const allPosts = await Posts.find();
    handleSuccess(res, allPosts);
    res.end();
  },
  async createdPost(req, res){ //新增一筆貼文
    try {
      const data = req.body;
      if (data.content) {
        const newPost = await Posts.create({
          name: data.name,
          content: data.content,
          tags: data.tags,
          type: data.type
        })
        handleSuccess(res, newPost);
      } else {
        handleError(res);
      }
    } catch (err){
      handleError(res, err);
    }
  },
  async updatedPost(req, res){ //修改一筆貼文
    try {
      const id = req.params.id;
      const data = req.body;
      const updatePost = await Posts.findByIdAndUpdate(id,
        {
          name: data.name,
          content: data.content,
        },
        { new: true }
      );
      if(updatePost !== null){
        handleSuccess(res, updatePost);
      } else {
        handleError(res, "");
      }
    } catch (err) {
      handleError(res, err);
    }
  },
  async deletePost(req, res){ //刪除一筆貼文
    try {
      const id = req.params.id;
      const deletePost = await Posts.findByIdAndDelete(id);
      if (deletePost !== null){
        handleSuccess(res, deletePost);
      } else {
        handleError(res, "");
      }
    } catch (err) {
      handleError(res, err);
    }
  },
  async deleteAllPosts(req, res){  //刪除所有貼文
    const deleteAllPosts = await Posts.deleteMany({});
    handleSuccess(res, deleteAllPosts);
  }
}

module.exports = posts;
