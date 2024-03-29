import mongoose, { Schema } from "mongoose";

const websiteSchema = new Schema({
  website_id: {
    type: String,
  },
  user_id: {
    type: String,
  },
  template_id: {
    type: String,
  },
  text: {
    type: Array,
  },
  image: {
    type: Array,
  },
  btn: {
    type: Array,
  },
  component: {
    type: Array,
  },
  product: {
    type: Array,
  },
  customer: {
    type: Array,
  },
  sale: {
    type: Array,
  },
});

const Website =
  mongoose.models.Website || mongoose.model("Website", websiteSchema);

export default Website;
