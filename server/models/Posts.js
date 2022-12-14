import mongoose from "mongoose";
const postSchema = mongoose.Schema(
    {
        userId:{
            type:String,
            require:true,
        },
        firstName:{
            type:String,
            require:true,
        },
        lastName:{
            type:String,
            require:true,
        },
        location: String,
        description: String,
        PicturePath: String,
        userPicturePath: String,
        likes:{
            type:Map,
            of: Boolean,
        },
        comments:{
            type:Array,
            default:[]
        }
    },
    {timestamps:true}
);
const Post=mongoose.model("Post",postSchema);
export default Post;