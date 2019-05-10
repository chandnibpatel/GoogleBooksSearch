const axios = require("axios");

// Defining methods for the googleController
// findAll searches the Google Books API and returns only the entries we haven't already saved
// It also makes sure that the books returned from the API all contain a title, author, link, description, and image
module.exports = {
  findAll: function(req, res) {
    //console.log("Controller Called",req,)
    const { query: params } = req;
    axios
      .get("https://www.googleapis.com/books/v1/volumes", {
        params
      })
      .then(results =>
        results.data.items.filter(
          result =>
            result.volumeInfo.title &&
            result.volumeInfo.infoLink &&
            result.volumeInfo.authors &&
            result.volumeInfo.description &&
            result.volumeInfo.imageLinks &&
            result.volumeInfo.imageLinks.thumbnail
        )
      )
      .then(
        console.log("hi"),
      )
      .then(books => res.json(books),
      console.log(res))
      .catch(err => res.status(422).json(err));
  }
};