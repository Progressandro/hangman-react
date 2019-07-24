import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import './Main.css';
import Header from './Header';
import LetterFrame from './LetterFrame';
import WordDisplay from './WordDisplay';
import History from './History';
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      used: [],
      unused: ("abcdefghijklmnopqrstuvwxyz").toUpperCase().split(""),
      asserted: [],
      word: 'MANGO',
      tries: 0,
      fails: 0,
      victory: false,
      history: [{
        used: [],
        unused: ("abcdefghijklmnopqrstuvwxyz").toUpperCase().split(""),
        asserted: [],
        word: 'MANGO',
        tries: 0,
        fails: 0,
        victory: false,
      }]
    }

    this.useLetter = this.useLetter.bind(this);
    this.goToStep = this.goToStep.bind(this);
  }

  goToStep(step) {
    const pastStep = this.state.history[step];
    this.setState({
      used: pastStep.used,
      unused: pastStep.unused,
      asserted: pastStep.asserted,
      tries: pastStep.tries,
      fails: pastStep.fails,
      victory: pastStep.victory
    });
  }

  async useLetter(letter) {
    const winningLetters = this.state.word.split('');
    const removedLetter = this.state.unused.filter(item => letter !== item);

    this.setState({ unused: removedLetter, used: this.state.used.concat(letter) });
    if (!winningLetters.includes(letter)) {
      await this.setState({ fails: this.state.fails + 1 });
    }
    else {
      await this.setState({ asserted: this.state.asserted.concat(letter) })
    }
    await this.setState({ tries: this.state.tries + 1 });

    if (winningLetters.every(item => this.state.asserted.includes(item))) {
      await this.setState({ victory: true });
    }

    const currentState = {
      used: this.state.used,
      unused: this.state.unused,
      asserted: this.state.asserted,
      tries: this.state.tries,
      fails: this.state.fails,
      victory: this.state.victory,
      history: this.state.history
    }
    this.setState({ history: this.state.history.slice(0, this.state.tries).concat(currentState) });
  }

  // TODO: Fix warnings.
  render() {
    const winString = this.state.victory ? 'YOU WON' : '';
    return (
      <>
        <Header className="Header" title='Hangman' />
        <WordDisplay word={this.state.word} used={this.state.used} />
        <Grid container justify="center">
          <Typography variant="h1">{winString}</Typography>
        </Grid>
        <Grid container justify="center" align="center">
          <Grid item xs={6}>
            <Typography variant="h4">Tries: {this.state.tries}</Typography>
            <Typography variant="h4">Fails: {this.state.fails}</Typography>
          </Grid>
          <History steps={this.state.history} goToStep={this.goToStep}></History>
          <Grid item xs={12}>
            <Typography variant="h5">
              Unused Letters:
            </Typography>
          </Grid>
          <Grid item container direction="row" justify="center" xs={12} spacing={2} className="Letters--Unused">
            <LetterFrame set={this.state.unused} onClick={this.useLetter} />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5">
              Used Letters:
            </Typography>
          </Grid>
          <Grid item container direction="row" xs={6} spacing={3} className="Letters-Used">
            <LetterFrame set={this.state.used} />
          </Grid>
        </Grid>
      </>
    );
  }
}

export default Main;