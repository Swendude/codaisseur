import React, {useEffect} from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";
import { useQuery } from "@apollo/react-hooks";
import ErrorIcon from "@material-ui/icons/Error";

import { GET_ALL_MATCHES } from "../graphql/queries";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2em",
  },
}));

function MatchList() {
  const classes = useStyles();

  
  const { loading, error, data } = useQuery(GET_ALL_MATCHES);
  
  useEffect(() => {data && console.log(data.matches)});
  
  if (loading) return "Loading...";
  if (error)
    return (
      <p>
        <ErrorIcon fontSize="large" />
        Error! ${error.message}
      </p>
    );

  return (
    <Container className={classes.root}>
      <Typography variant="h2">All MAtches</Typography>
      <Box>
        {data.matches.map((match) => (
          <article key={match.id}>
            <p>Match ID: {match.id}</p>
            <p>Match date: {match.started_at}</p>
            <p>Player 1: {match.p1.name}</p>
            <p>Player 2: {match.p2.name}</p>
            <h2>Scores</h2>
            <ul>
              {match.setts.map((set) => <li>{set.p1_score} {set.p2_score}</li>)}
            </ul>
            <hr />
          </article>
        ))}
      </Box>
    </Container>
  );
}

export default MatchList;
