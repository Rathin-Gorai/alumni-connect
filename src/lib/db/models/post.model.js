import mongoose, { Schema } from "mongoose";

const PostSchema = new mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    caption: {
        type: String,
        
    },
    image: {
        type: String,
    },
    imageId: {
        type: String,
    },
    location: {
        type: String,
    },
    tags: {
        type: String,
    },
    likes: [
        {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
    ],
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: "Comment"
        },
    ],
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Post = mongoose.models.Post || mongoose.model("Post", PostSchema);
export default Post;
