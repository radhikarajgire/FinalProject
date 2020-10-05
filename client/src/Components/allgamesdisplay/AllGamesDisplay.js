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
            style={{ height: 0, paddingTop: "56.25%" }}
            title={props.exgame.fields.description}
            image={props.exgame.fields.screenshot.fields.file.url}
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="h2">
              {props.exgame.fields.description}
            </Typography>
          </CardContent>
          <CardActions>
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
              <Link
                to={
                  props.exgame.fields.description === "Spell Shot"
                    ? "/play/SpellShot"
                    : props.exgame.fields.description === "Match"
                    ? "/play/Match"
                    : props.exgame.fields.description === "PoshorNot"
                    ? "/play/PoshOrNot"
                    : "/play/ExGames"
                }
              >
                Go To Game
              </Link>
            </Button>
          </CardActions>
        </Card>
      ) : null}
    </div>
  );
};
export default ExGames;
