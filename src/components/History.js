import React from 'react';
import { Grid, Button, Typography } from '@material-ui/core';

const History = (props) => {
  const steps = props.steps.filter(step => step.tries > 0).map(step =>
    <Grid item key={step.tries}>
      <Button variant="contained" color="primary" onClick={() => { if (props.goToStep) props.goToStep(step.tries) }}>
        <Typography variant="body1">
          Step #{step.tries}
        </Typography>
      </Button>
    </Grid>
  );
  return (
    <Grid item container xs={12}>
      <Typography variant="h5">History:</Typography>
      {steps}
    </Grid>
  );
}

export default History;