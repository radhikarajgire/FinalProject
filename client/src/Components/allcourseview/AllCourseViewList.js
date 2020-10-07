import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import * as contentful from "contentful";
import AllCourseView from "./AllCourseView.js";
import Typography from "@material-ui/core/Typography";

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
  };

  constructor() {
    super();
    this.getGDPinfo();
  }

  getGDPinfo = () => {
    client
      .getEntries({
        content_type: "gdpr",
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

  render() {
    return (
      <div>
        {this.state.Timinf ? (
          <div>
            <Typography
              style={{ padding: 12 }}
              gutterBottom
              variant="h3"
              component="h2"
            >
              Your Current Course
            </Typography>
            <h3>{console.log(this.state)}</h3>
            <Grid container spacing={2} style={{ padding: 12 }}>
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
