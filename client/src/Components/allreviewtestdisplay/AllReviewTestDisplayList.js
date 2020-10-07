import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import * as contentful from "contentful";
import AllReviewTestDisplay from "./AllReviewTestDisplay.js";

const SPACE_ID = process.env.REACT_APP_SPACE_ID;

const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;

//to fetch the data from contentful
const client = contentful.createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN,
});

class ReviewTestList extends Component {
  state = {
    ReviewTest: [],
    searchString: "",
  };

  constructor() {
    super();
    this.getReviewtest();
  }

  getReviewtest = () => {
    client
      .getEntries({
        content_type: "reviewtest",
        query: this.state.searchString,
      })
      .then((response) => {
        this.setState({ ReviewTest: response.items });
      })
      .catch((error) => {
        console.log("Error occured while fetching data");
        console.log(error);
      });
  };

  onSearchInputChange = (event) => {
    if (event.target.value) {
      this.setState({ searchString: event.target.value });
    } else {
      this.setState({ searchString: "" });
    }
    this.getExgames();
  };

  //console.log(ExGames);
  //<Grid item xs={12} sm={6} lg={4} xl={3}>
  //            <Match />
  //        </Grid>

  render() {
    return (
      <div>
        {this.state.ReviewTest ? (
          <div>
            <TextField
              style={{ padding: 5 }}
              id="searchInput"
              placeholder="Search for ExGames"
              margin="normal"
              onChange={this.onSearchInputChange}
            />
            <Grid container spacing={2} style={{ padding: 24 }}>
              {this.state.ReviewTest.map((currentReviewTest, idw) => (
                <Grid key={idw} item xs={12} sm={6} lg={4} xl={3}>
                  <AllReviewTestDisplay reviewtest={currentReviewTest} />
                </Grid>
              ))}
            </Grid>
          </div>
        ) : (
          "No Tests or Reviews found"
        )}
      </div>
    );
  }
}
export default ReviewTestList;
