import React, { Component } from "react";
import Book from "../components/Book/index";
import API from "../utils/API";

class Saved extends Component {
  state = {
    books: []
  };
// component did mount
  componentDidMount() {
    this.getSavedBooks();
  }

  getSavedBooks = () => {
    API.getSavedBooks()
      .then(res =>
        this.setState({
          books: res.data
        })
      )
      .catch(err => console.log(err));
  };

  handleBookDelete = async id => {
    const originalBooks = this.state.books;
    try {
      await API.deleteBook(id).then(res => this.getSavedBooks());
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        //("This book has been deleted.");
      this.setState({ books: originalBooks });
    }
  };
  render() {
    const { length: count } = this.state.books;
    return (
      <div className="container">
 
            <div className="text-center">
                <h1>
                  React Google Books Search
                </h1>

                <h1>
                  Showing {count} books in the database.
                </h1>
            </div>

            {this.state.books.length ? (
              <ul className="list-group">
                {this.state.books.map(book => (
                  <Book
                    key={book._id}
                    title={book.title}
                    subtitle={book.subtitle}
                    link={book.link}
                    authors={book.authors.join(", ")}
                    description={book.description}
                    image={book.image}
                    Button={() => (
                      <button
                        onClick={() => this.handleBookDelete(book._id)}
                        className="btn delete-button heading-subtitle ml-2"
                      >
                        Delete
                      </button>
                    )}
                  />
                ))}
              </ul>
            ) : (
              <div className="mockup-content">
                <h2 className="brand-title text-center">
                  No saved books in the database
                </h2>
              </div>
            )}
          </div>
    );
  }
}

export default Saved;