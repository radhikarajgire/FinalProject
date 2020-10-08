import React, { useContext, useState } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { StateContext } from "../statecontext/stateContext";

const SingleCourseModule = () => {
  //const [display, setDisplay] = useState();
  const { referencedata } = useContext(StateContext);
  const imgLink = {
    height: 300,
    padding: "5%",
    backgroundColor: "#e6fffa",
  };
  console.log(referencedata);
  //href={props.exgame.fields.reference}
  //image={props.exgame.fields.courseImage.fields.file.url}
  return (
    <div>
      {referencedata ? (
        <Card
          style={{
            backgroundColor: "#e6fffa",
            paddingTop: "2%",
          }}
        >
          <Typography gutterBottom variant="h4" component="h2">
            {referencedata.fields.title}
          </Typography>
          <Typography gutterBottom variant="h6" component="h2">
            {referencedata.fields.part}
          </Typography>
          <CardMedia
            style={imgLink}
            component="img"
            title={referencedata.fields.title}
            src={referencedata.fields.thebeginning[0].fields.file.url}
          />
          <CardContent>
            <h4>
              {referencedata.fields.link1.content.map((entry) =>
                entry.content.map((ent) => <span>{ent.value}</span>)
              )}{" "}
            </h4>
          </CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            <CardActions style={{ backgroundColor: "#e6fffa" }}>
              <Button
                href={referencedata.fields.thebeginning[1].fields.file.url}
                size="small"
                color="primary"
                target=""
              >
                Go To Useful Website
              </Button>
            </CardActions>
          </Typography>
          <Typography gutterBottom variant="h4" component="h2">
            Useful Connections
          </Typography>
          <CardMedia
            style={{
              height: 500,
              padding: "5%",
            }}
            component="iframe"
            title={referencedata.fields.title}
            src={referencedata.fields.videolink}
          />
          <CardActions style={{ backgroundColor: "#e6fffa" }}>
            <Button size="small" color="primary" target="">
              <Link to={"/review"}>
                Now that you have learnt something go practice
              </Link>
            </Button>
          </CardActions>
        </Card>
      ) : null}
    </div>
  );
};
export default SingleCourseModule;
