import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import * as contentful from "contentful";
import AllCourseView from "./AllCourseView.js";

const SPACE_ID = process.env.REACT_APP_SPACE_ID;
const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;
//to fetch the data from contentful
const client = contentful.createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN,
});

class AllCourseViewList extends Component {
  state = {
    Timinf: [],
    searchString: "",
  };

  constructor() {
    super();
    this.getGDPinfo();
  }

  getGDPinfo = () => {
    client
      .getEntries({
        content_type: "gdpr",
        query: this.state.searchString,
      })
      .then((response) => {
        this.setState({ Timinf: response.items });
        console.log(response.items);
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
        {this.state.Timinf ? (
          <div>
            <TextField
              style={{ padding: 24 }}
              id="searchInput"
              placeholder="Search for ExGames"
              margin="normal"
              onChange={this.onSearchInputChange}
            />

            <h1>I am here</h1>
            <Grid container spacing={2} style={{ padding: 24 }}>
              {this.state.Timinf.map((currentTimelement, idw) => (
                <Grid key={idw} item xs={12} sm={6} lg={4} xl={3}>
                  <AllCourseView courseview={currentTimelement} />
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
export default AllCourseViewList;
