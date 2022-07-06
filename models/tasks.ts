import mongoose, { Schema } from "mongoose";


const tasksSchema = new Schema({
    task_name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    assign_member_id: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true,
    }

})

export default mongoose.model("Tasks", tasksSchema);