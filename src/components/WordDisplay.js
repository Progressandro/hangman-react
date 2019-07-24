import React from 'react';
import './WordDisplay.css';
import { Grid, Typography, Paper } from '@material-ui/core';

const WordDisplay = (props) => {
  const letters = props.word.split('');
  const used = props.used;

  const display = letters.map((letter, index) => {
    const output = used.includes(letter) ? letter : '_';
    return (
      <Grid item container justify="center" xs={1} className="Letter" key={index}>
        <Typography variant="h5">
          {output}
        </Typography>
      </Grid>
    );
  });

  return (
    <Paper className="Display">
      <Grid container className="Display--LetterContainer" justify="center" alignItems="center">
        {display}
      </Grid>
    </Paper>
  );
}

export default WordDisplay;