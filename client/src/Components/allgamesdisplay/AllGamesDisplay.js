import React, { useContext, useState } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { StateContext } from "../statecontext/stateContext";

const ExGames = (props) => {
  //const [display, setDisplay] = useState();
  const { setReferenceExGame, setReferenceData } = useContext(StateContext);

  //href={props.exgame.fields.reference}
  //image={props.exgame.fields.courseImage.fields.file.url}
  return (
    <div>
      {props.exgame !== undefined ? (
        <Card>
          <CardMedia
            style={{
              height: 300,
              padding: "5%",
              backgroundColor: "#e6fffa",
            }}
            component="img"
            title={props.exgame.fields.description}
            src={props.exgame.fields.screenshot.fields.file.url}
          />
          <CardContent style={{ backgroundColor: "#e6fffa" }}>
            <Typography gutterBottom variant="h4" component="h2">
              {props.exgame.fields.description}
            </Typography>
            <Typography gutterBottom variant="h6" component="h4">
              {props.exgame.fields.subdescription}
            </Typography>
          </CardContent>
          <CardActions style={{ backgroundColor: "#e6fffa" }}>
            <Button
              size="small"
              onClick={() => {
                if (props.exgame.fields.description === "Spell Shot") {
                  const fish = props.exgame.fields.input2;
                  setReferenceData(fish);
                } else if (props.exgame.fields.description === "Match") {
                  const fish = props.exgame.fields.input2;
                  setReferenceData(fish);
                }

                setReferenceExGame(props.exgame.fields.reference);
              }}
              color="primary"
              target=""
            >
              <Link to={switchDescription(props.exgame.fields.description)}>
                Go To Game
              </Link>
            </Button>
          </CardActions>
        </Card>
      ) : null}
    </div>
  );
};

const switchDescription = (description) => {
  let str = "/play/";
  switch (description) {
    case "Spell Shot":
      str += "SpellShot";
      break;
    case "Match":
      str += "Match";
      break;
    case "PoshOrNot":
      str += "PoshorNot";
      break;
    case "Level":
      str += "levelgame";
      break;
    default:
      str += "ExGames";
  }
  return str;
};
export default ExGames;
