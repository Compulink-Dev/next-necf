import mongoose, { Schema } from "mongoose";

const aboutSectionScheme = new Schema(
    {
        title: String,
        title2: String,
        title3: String,
        title4: String,
        title5: String,
        title6: String,
        image: String,
    },
    {
        timestamps: true,
    }
)

const AboutSection = mongoose.models.AboutSection || mongoose.model("AboutSection", aboutSectionScheme)

export default AboutSection