const _ = require('lodash');
const Post = require('../models/post');

const addPost = async function (ctx) {
  const body = ctx.request.body;
  const post = new Post(body);
  try {
    const result = await post.save();
    return ctx.body = {
      code: 0,
      data: result
    };
  } catch (err) {
    return ctx.body = {
      code: -1,
      message: '新增博文信息出错'
    };
  }
}

const getPost = async function (ctx) {
  const _id = ctx.params.id;
  try {
    const result = await Post.findById(_id);
    return ctx.body = {
      code: 0,
      data: result
    };
  } catch (err) {
    if (err.name === 'CastError' && ~err.message.indexOf('Cast to ObjectId failed for value')) {
      return ctx.body = {
        code: -1,
        message: '请提供正确博文的ID'
      };;
    }
    return ctx.body = {
      code: -1,
      message: '获取博文信息出错'
    };
  }
}

const updatePost = async function (ctx) {
  const _id = ctx.params.id;
  const body = ctx.request.body;
  try {
    const result = await Post.findByIdAndUpdate(_id, body);
    return ctx.body = {
      code: 0,
      data: result
    };
  } catch (err) {
    if (err.name === 'CastError' && ~err.message.indexOf('Cast to ObjectId failed for value')) {
      return ctx.body = {
        code: -1,
        message: '请提供正确博文的ID'
      };;
    }
    return ctx.body = {
      code: -1,
      message: '修改博文信息出错'
    };
  }
}

const removePost = async function (ctx) {
  const _id = ctx.params.id;
  try {
    const result = await Post.findByIdAndRemove(_id);
    return ctx.body = {
      code: 0,
      data: "删除成功"
    };
  } catch (err) {
    if (err.name === 'CastError' && ~err.message.indexOf('Cast to ObjectId failed for value')) {
      return ctx.body = {
        code: -1,
        message: '请提供正确博文的ID'
      };;
    }
    return ctx.body = {
      code: -1,
      message: '删除博文信息出错'
    };
  }
}

module.exports = {
  getPost: getPost,
  addPost: addPost,
  updatePost: updatePost,
  removePost: removePost,
}