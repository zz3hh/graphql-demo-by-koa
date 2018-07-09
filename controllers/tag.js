const _ = require('lodash');
const Tag = require('../models/tag');

const addTag = async function (ctx) {
  const body = ctx.request.body;
  const tag = new Tag(body);
  try {
    const result = await tag.save();
    return ctx.body = {
      code: 0,
      data: result
    };
  } catch (err) {
    return ctx.body = {
      code: -1,
      message: '新增标签信息出错'
    };
  }
}

const getTag = async function (ctx) {
  const _id = ctx.params.id;
  try {
    const result = await Tag.findById(_id);
    return ctx.body = {
      code: 0,
      data: result
    };
  } catch (err) {
    if (err.name === 'CastError' && ~err.message.indexOf('Cast to ObjectId failed for value')) {
      return ctx.body = {
        code: -1,
        message: '请提供正确的标签ID'
      };
    }
    return ctx.body = {
      code: -1,
      message: '获取标签信息出错'
    };
  }
}

const updateTag = async function (ctx) {
  const _id = ctx.params.id;
  const body = ctx.request.body;
  try {
    const result = await Tag.findByIdAndUpdate(_id, body);
    return ctx.body = {
      code: 0,
      data: result
    };
  } catch (err) {
    if (err.name === 'CastError' && ~err.message.indexOf('Cast to ObjectId failed for value')) {
      return ctx.body = {
        code: -1,
        message: '请提供正确的标签ID'
      };
    }
    return ctx.body = {
      code: -1,
      message: '修改标签信息出错'
    };
  }
}

const removeTag = async function (ctx) {
  const _id = ctx.params.id;
  try {
    const result = await Tag.findByIdAndRemove(_id);
    return ctx.body = {
      code: 0,
      data: "删除成功"
    };
  } catch (err) {
    if (err.name === 'CastError' && ~err.message.indexOf('Cast to ObjectId failed for value')) {
      return ctx.body = {
        code: -1,
        message: '请提供正确的标签ID'
      };
    }
    return ctx.body = {
      code: -1,
      message: '删除标签信息出错'
    };
  }
}

module.exports = {
  getTag: getTag,
  addTag: addTag,
  updateTag: updateTag,
  removeTag: removeTag,
}