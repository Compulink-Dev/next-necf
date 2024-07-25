import mongoose, { Schema } from "mongoose";

const aboutScheme = new Schema(
    {
        title: String,
        title2: String,
        title3: String,
        title4: String,
        title5: String,
        image: String,
        image2: String,
        image3: String,
        image4: String
    },
    {
        timestamps: true,
    }
)

const About = mongoose.models.About || mongoose.model("About", aboutScheme)

export default About