import React, { Component } from "react";
import Banner from "../components/Banner";
import { Input, FormBtn } from "../components/Form";

class Search extends Component {
  state = {
    books: []
  };

  //componentDidMount() {
  //   this.loadBooks();
  // }

  // loadBooks = () => {
  //   API.getBooks()
  //     .then(res => this.setState({ books: res.data }))
  //     .catch(err => console.log(err));
  // };

  handleSubmitClick=event=>{
    event.preventDefault();
    console.log("Searching")
    

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
