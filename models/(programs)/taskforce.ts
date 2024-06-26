import mongoose, { Schema } from "mongoose";

const taskForceScheme = new Schema(
    {
        title: String,
        description: String,
        image: String,
        subtitle: String,
    },
    {
        timestamps: true
    }
)

const TaskForce = mongoose.models?.TaskForce || mongoose.model("TaskForce", taskForceScheme)

export default TaskForce