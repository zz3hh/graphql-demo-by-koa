const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const postSchema = new Schema({
    name: String, // 名字
    title: String, // 标题
    subtitle: String, // 子标题
    content: String, // 正文
    tags: [{
        type: ObjectId,
        ref: 'Tag'
    }],
    createDate: {
        type: Date,
        default: Date.now()
    }, // 创建时间
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;