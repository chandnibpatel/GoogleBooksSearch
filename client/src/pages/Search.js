import React, { Component } from "react";
import Banner from "../components/Banner";
import { Input, FormBtn } from "../components/Form";
import API from "../utils/API";
class Search extends Component {
  state = {
    books: []
  };

  //componentDidMount() {
  //   this.loadBooks();
  // }

  loadBooks = () => {
    API.getBooks()
      .then( console.log("loadbook called"),
        res => this.setState({ books: res.data }))
      .catch(err => console.log(err));
  };

  handleSubmitClick= event =>{
    event.preventDefault();
    console.log("Searching")
    this.loadBooks();
  }

  render() {
    return (
      <div>
          <Banner/>
          <div className="text-center">
            <form className="form-inline">
                <Input name="title" placeholder="Enter a Book" />
                <FormBtn onClick={this.handleSubmitClick} > Submit Book</FormBtn>
            </form>
          </div>
      </div>
    );
  }
}

export default Search;
