import React, { useContext, useState } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { StateContext } from "../statecontext/stateContext";

const AllCourseView = (props) => {
  //const [display, setDisplay] = useState();
  const { setReferenceExGame, setReferenceData } = useContext(StateContext);
  console.log(props);
  //href={props.exgame.fields.reference}
  //image={props.exgame.fields.courseImage.fields.file.url}
  return (
    <div>
      {props.courseview ? (
        <Card>
          <CardMedia
            style={{
              height: 300,
              padding: "5%",
              backgroundColor: "#e6fffa",
            }}
            component="img"
            title={props.courseview.fields.title}
            src={props.courseview.fields.thebeginning[0].fields.file.url}
          />
          <CardContent style={{ backgroundColor: "#e6fffa" }}>
            <Typography gutterBottom variant="h4" component="h2">
              {props.courseview.fields.title}
            </Typography>
            <Typography gutterBottom variant="h6" component="h4">
              {props.courseview.fields.part}
            </Typography>
          </CardContent>
          <CardActions style={{ backgroundColor: "#e6fffa" }}>
            <Button
              size="small"
              onClick={() => {
                const fish = props.courseview;
                setReferenceData(fish);
              }}
              color="primary"
              target=""
            >
              <Link to={"/learn/course/singlecoursemodule"}>Go To Module</Link>
            </Button>
          </CardActions>
        </Card>
      ) : null}
    </div>
  );
};
export default AllCourseView;
