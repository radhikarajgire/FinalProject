import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import blue from "@material-ui/core/colors/blue";

const Course = (props) => {
  const primary = blue["200"];
  return (
    <div styles={{ display: "flex", justifyContent: "center" }}>
      {props.course ? (
        <Card>
          <CardMedia
            style={{
              height: 0,
              paddingTop: "56.25%",
            }}
            image={props.course.fields.courseImage.fields.file.url}
            title={props.course.fields.title}
          />
          <CardContent
            style={{
              backgroundColor: primary,
            }}
          >
            <Typography gutterBottom variant="h4" component="h2">
              {props.course.fields.title}
            </Typography>
            <Typography component="p">
              {props.course.fields.description}
            </Typography>
          </CardContent>
          <CardActions
            style={{
              backgroundColor: primary,
            }}
          >
            <Button
              size="small"
              color="primary"
              href={props.course.fields.url.content[0].content[0].value}
              target="_blank"
            >
              Go To Course
            </Button>
          </CardActions>
        </Card>
      ) : null}
    </div>
  );
};
export default Course;
