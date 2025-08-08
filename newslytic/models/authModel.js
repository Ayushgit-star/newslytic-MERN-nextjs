const { model, Schema } = require("mongoose");

const authSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
        // https://bcrypt-generator.com/
      type: String,
      select: false, //hides the field from query results by default for safety and privacy.
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: "",
    },
    category: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = model("authors", authSchema);

// Schema = blueprint/structure for documents
// Model = object for interacting with the MongoDB collection using that schema
