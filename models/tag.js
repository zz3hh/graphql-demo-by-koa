const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const tagSchema = new Schema({
    name: String, // 名字
    label: String, // 标签
    createDate: {
        type: Date,
        default: Date.now()
    }, // 创建时间
});

const Tag = mongoose.model('Tag', tagSchema);

module.exports = Tag;