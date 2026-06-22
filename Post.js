const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    username: String,
    content: String
});

module.exports = mongoose.model("Post", PostSchema);