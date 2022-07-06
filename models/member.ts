import mongoose, { Schema } from "mongoose";


const membersSchema = new Schema({
    member_id: {
        type: String,
        required: true
    },
    member_name: {
        type: String,
        required: true,
    },

})

export default mongoose.model("Members", membersSchema);