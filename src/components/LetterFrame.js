import React from 'react';
import { Grid, Button, Typography } from '@material-ui/core';

const LetterFrame = (props) => {
  const boxes = props.set.map((letter, index) => {
    const variantColor = (index % 2 === 0) ? "secondary" : "default";
    return (
      <Grid item  key={index}>
        <Button variant="contained" color={variantColor} onClick={() => {if (props.onClick) props.onClick(letter)}}>
          <Typography variant="body1">
            {letter}
          </Typography>
        </Button>
      </Grid>
    );
  });

  return (boxes);
}

export default LetterFrame;