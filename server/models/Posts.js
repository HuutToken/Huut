import mongoose from 'mongoose'

const PostSchema = mongoose.Schema({
    postTitle: { type: String, required: "Post must have a title" },
    postBody: { type: String, required: "Post must have a Body" },
    postTags: { type: [String], required: "Post must have a tags" },
    noOfComments: { type: Number, default: 0 },
    upVote: { type: [String], default: [] },
    downVote: { type: [String], default: [] },
    userPosted: { type: String, required: "Post must have an author" },
    userId: { type: String },
    postedOn: { type: Date, default: Date.now },
    comment: [{
        commentBody: String,
        userCommented: String,
        userId: String,
        commentedOn: { type: Date, default: Date.now},
    }]
})

export default mongoose.model("Post", PostSchema)