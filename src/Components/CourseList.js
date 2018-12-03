import React, { Component } from "react";
import { Grid, TextField } from "@material-ui/core";
import * as contentful from "contentful";

import Course from "../components/Course";

const SPACE_ID = "[INSERT CONTENTFUL SPACE ID]";
const ACCESS_TOKEN = "[INSERT CONTENTFUL ACCESS TOKEN]";

const client = contentful.createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN
});

class CourseList extends Component {
  state = {
    courses: [],
    searchString: ""
  };

  constructor() {
    super();
    this.getCourses();
  }

  getCourses = () => {
    client
      .getEntries({
        content_type: "course",
        query: this.state.searchString
      })
      .then(response => {
        this.setState({ courses: response.items });
        console.log(this.state.courses);
      })
      .catch(error => {
        console.log("Error occurred while fetching Entries");
        console.log(error);
      });
  };

  onSearchInputChange = event => {
    console.log("Search changed ..." + event.target.value);
    if (event.target.value) {
      this.setState({ searchString: event.target.value });
    } else {
      this.setState({ searchString: "" });
    }
    this.getCourses();
  };

  render() {
      return (
          <div>
            {this.state.courses ? (
                <div>
                    <TextField style={{padding: 24}} id="searchInput" placeholder="Search for Courses" margin="normal" onChange={this.onSearchInpu}  />
                </div>
            )}
          </div>
      );
  }
}
