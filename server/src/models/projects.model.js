import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    tech: [String],

    image: {
      type: String,
      default: "https://via.placeholder.com/600x400",
      required: true,
    },

    cloudinaryId: {
      type: String,
      required: true,
    },

    link: {
      type: String,
    },

    github: {
      type: String,
    },

    isBig: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

export default mongoose.model("Project", projectSchema);
