import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    name: String,
    pdf: String,
    category: String,
    image: String,
});
const Book = mongoose.model("Book", bookSchema);

export default Book;