const express = require("express");
const app = express();
const PORT = 8082;

//Receveing incoming grom the client configuration
app.use(express.json());
const books = [
  { id: "1", title: "The great Gstsby", author: "khonore" },
  { id: "2", title: "Moby Dic", author: "Herman" },
  { id: "3", title: "The MERN Stack", author: "Renzo" },
];

//Home Router
app.get("/", (req, res) => {
  res.json({
    status: "Success",
    message: "Welcome to my first book api using express",
    data: "Khonore",
  });
});

//Fetching all books
app.get("/books", (req, res) => {
  res.json({
    status: "Success",
    message: "Welcome to my first book api using express",
    data: books,
  });
});

//Fetching a books
app.get("/books/:id", (req, res) => {
  const id = req.params.id;
  const bookFound = books.find((book) => book.id === id);
  if (!bookFound) {
    return res.json({
      status: "failed",
      message: `Book with id ${id} not found`,
    });
  }

  res.json({
    status: "Success",
    message: "Books Fetched successfully",
    data: bookFound,
  });
});

//Create a book
app.post("/books", (req, res) => {
  console.log(req.body);
  const newPost = req.body;
  books.push(newPost);
  res.json({
    status: "Success",
    message: "Books created successsfully",
    data: books,
  });
});

// Start the server
app.listen(PORT, console.log(`Server is runnig on port ${PORT}`));
