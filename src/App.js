import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Typography from '@material-ui/core/Typography';

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
    },
});

const styles = theme => ({
    text: {
        margin: theme.spacing.unit,
    },
});

class App extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <MuiThemeProvider theme={theme}>
                    <CssBaseline />
                    <Typography className={classes.text}>
                        Hello world!
                    </Typography>
                </MuiThemeProvider>
            </React.Fragment>
        );
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
