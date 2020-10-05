import React, { useContext, useState } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { StateContext } from "../statecontext/stateContext";

const ReviewTest = (props) => {
  //const [display, setDisplay] = useState();
  const { setReferenceExGame, setReferenceData } = useContext(StateContext);

  //href={props.exgame.fields.reference}
  //image={props.exgame.fields.courseImage.fields.file.url}
  return (
    <div>
      {props.reviewtest !== undefined ? (
        <Card>
          <CardMedia
            style={{
              height: 0,
              paddingTop: "56.25%",
              backgroundColor: "red",
            }}
            title={props.reviewtest.fields.description}
            image={props.reviewtest.fields.screenshot.fields.file.url}
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="h2">
              {props.reviewtest.fields.description}
            </Typography>
            <Typography gutterBottom variant="h6" component="h4">
              {props.reviewtest.fields.subdescription}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              onClick={() => {
                if (props.reviewtest.fields.description === "Snap") {
                  const fish = props.reviewtest.fields.input2;
                  setReferenceData(fish);
                } else if (
                  props.reviewtest.fields.description === "Flashcard"
                ) {
                  const fish = props.reviewtest.fields.input2;
                  setReferenceData(fish);
                }
                setReferenceExGame(props.reviewtest.fields.reference);
              }}
              color="primary"
              target=""
            >
              <Link
                to={
                  props.reviewtest.fields.description === "Snap"
                    ? "/review/Snap"
                    : props.reviewtest.fields.description === "Flashcard"
                    ? "/review/Flashcard"
                    : props.reviewtest.fields.description === "Listening"
                    ? "/review/Listening"
                    : "/review/Knowledge"
                }
              >
                Go To Review/Test
              </Link>
            </Button>
          </CardActions>
        </Card>
      ) : null}
    </div>
  );
};
export default ReviewTest;
