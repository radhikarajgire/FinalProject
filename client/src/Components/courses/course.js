import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";


const Course = (props) => {

  const primary = {
    main: "#82b1ff",
  };

  return (
    <div styles={{ display: "flex", justifyContent: "center" }}>
      {props.course ? (
        <Card>
          <CardMedia
            style={{
              height: 300,
              padding: "5%",
              backgroundColor: "#e6fffa",
            }}
            component="img"
            src={props.course.fields.courseImage.fields.file.url}
            title={props.course.fields.title}
          />
          <CardContent style={{ backgroundColor: "#e6fffa" }}>
            <Typography gutterBottom variant="h4" component="h2">
              {props.course.fields.title}
            </Typography>
            <Typography component="p">
              {props.course.fields.description}
            </Typography>
          </CardContent>
          <CardActions style={{ backgroundColor: "#e6fffa" }}>
            <Button
              size="small"
              color="primary"
              href={props.course.fields.url.content[0].content[0].value}
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
