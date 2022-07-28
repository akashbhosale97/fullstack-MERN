const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const BlogPost = new Schema({
author: ObjectId,
title: {
type: String,
required: true,
},
body: {
type: String,
required: true,
},
});
const blog = mongoose.model("blog", BlogPost);

module.exports = blog;
