import React, { useContext } from "react";
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
  const { setRefenceExGame } = useContext(StateContext);
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
            <Link to="/play/ExGames">
              <Button
                size="small"
                onClick={() => setRefenceExGame(props.exgame.fields.reference)}
                color="primary"
                target=""
              >
                Go To Game
              </Button>
            </Link>
          </CardActions>
        </Card>
      ) : null}
    </div>
  );
};
export default ExGames;
