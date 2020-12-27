import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import AuthContainer from "../../components/AuthContainer";
import Button from "../../components/Button";
import Divider from "../../components/Divider";
import Form, { Label, Input, Item, Error } from "../../components/Form";

import { validateEmail } from "../../modules/validate";

import GoogleLogo from "../../assets/images/google-logo.svg";

import { Container } from "./styles";

interface Data {
  entry: string;
  password: string;
}

interface Errors {
  entry: string;
  password: string;
}

const Login: React.FC = () => {
  const initialData = {
    entry: "",
    password: "",
  };

  const initialErrors = {
    entry: "",
    password: "",
  };

  const history = useHistory();

  const [data, setData] = useState<Data>(initialData);

  const [errors, setErrors] = useState<Errors>(initialErrors);

  useEffect(() => {
    localStorage.clear();
  }, []);

  function handleOnChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
    const name = e.target.name;
    const value = e.target.value;

    setData({ ...data, [name]: value });
  }

  function handleValidate() {
    let response = { status: true };
    let errors = { entry: "", password: "" };

    if (data.entry && !validateEmail(data.entry)) {
      document
        .querySelector("input[name=entry]")
        ?.parentElement?.classList.add("input-error");

      errors.entry = "Users name or Email is invalid!";

      response = { status: false };
    } else {
      if (!data.entry) {
        document
          .querySelector("input[name=entry]")
          ?.parentElement?.classList.add("input-error");

        errors.entry = "Users name or Email is required!";

        response = { status: false };
      } else {
        document
          .querySelector("input[name=entry]")
          ?.parentElement?.classList.remove("input-error");
      }
    }

    if (!data.password) {
      document
        .querySelector("input[name=password]")
        ?.parentElement?.classList.add("input-error");

      errors.password = "Password is required!";

      response = { status: false };
    } else {
      document
        .querySelector("input[name=password]")
        ?.parentElement?.classList.remove("input-error");
    }

    if (!response.status) {
      setErrors(errors);
    }

    return response;
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const validate = handleValidate();
    if (!validate.status) {
      return;
    }

    localStorage.setItem("token", "authenticated");
    history.push("/");
  }

  return (
    <AuthContainer>
      <Container>
        <header>
          <h1>Welcome to Invision</h1>
        </header>
        <Form onSubmit={handleSubmit}>
          <Item>
            <Label>
              Users name or Email
              <Input
                type="text"
                name="entry"
                value={data.entry}
                onChange={handleOnChangeInput}
              />
            </Label>
            {errors.entry && <Error>{errors.entry}</Error>}
          </Item>

          <Item>
            <Label>
              Password
              <Input
                type="password"
                name="password"
                value={data.password}
                onChange={handleOnChangeInput}
              />
            </Label>
            {errors.password && <Error>{errors.password}</Error>}
          </Item>

          <Link to="/forgot-password">Forgot password?</Link>

          <Button backgroundColor="#707070" color="#FFF" type="submit">
            Sign in
          </Button>
        </Form>
        <Divider legend="Or" />

        <Button backgroundColor="#FFF" color="#000">
          <img src={GoogleLogo} alt="Google Logo" />
          Sign in with Google
        </Button>

        <span>
          New <strong>Invision</strong>?{" "}
          <Link to="/create-account">Create Account</Link>
        </span>
      </Container>
    </AuthContainer>
  );
};

export default Login;
