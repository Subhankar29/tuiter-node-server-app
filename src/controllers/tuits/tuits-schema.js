import mongoose from "mongoose";

const schema = mongoose.Schema({
    tuit: String,
    likes: Number,
    liked: Boolean,
    topic: String,
    handle: String,
    title: String,
    username: String,
    comments: Number,
    retuits: Number,
    dislikes: Number,
    logoImage: String
}, {collection: 'tuit'});
export default schema;
