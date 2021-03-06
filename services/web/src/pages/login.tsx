import React, { useState, ChangeEventHandler, FormEventHandler } from "react";
import { navigate, Link as GatsbyLink } from "gatsby";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { handleLogin, isLoggedIn } from "../util/auth";
import BaseLayout from "../components/BaseLayout";
import SEO from "../components/seo";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login: React.FC = () => {
  const classes = useStyles();
  const [state, setState] = useState({ username: ``, password: `` });

  const handleUpdate: ChangeEventHandler<HTMLInputElement> = event => {
    setState(
      Object.assign(state, {
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSubmit: FormEventHandler = async event => {
    event.preventDefault();
    try {
      await handleLogin(state);
      navigate(`/app`);
    } catch (error) {
      console.error(error);
    }
  };

  if (isLoggedIn()) {
    navigate(`/app`);
  }

  return (
    <BaseLayout>
      <SEO title="Login" />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form
            className={classes.form}
            noValidate
            method="post"
            onSubmit={event => {
              handleSubmit(event);
              navigate(`/app`);
            }}
          >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              onChange={handleUpdate}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleUpdate}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  variant="body2"
                >
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <GatsbyLink to="/signup/" style={{ textDecoration: "none" }}>
                  <Link href="#" variant="body2">
                    Don&apos;t have an account? Sign Up
                  </Link>
                </GatsbyLink>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </BaseLayout>
  );
};

export default Login;
