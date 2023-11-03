import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      primary: true
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Tweet = mongoose.model("Tweet", tweetSchema);
