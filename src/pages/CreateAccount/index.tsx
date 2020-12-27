import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import AuthContainer from "../../components/AuthContainer";
import Form, { Label, Input, Item, Error } from "../../components/Form";
import Button from "../../components/Button";
import Divider from "../../components/Divider";

import GoogleLogo from "../../assets/images/google-logo.svg";

import { validateEmail } from "../../modules/validate";

import { Container } from "./styles";

interface Data {
  name: string;
  email: string;
  password: string;
}

interface Errors {
  name: string;
  email: string;
  password: string;
}

const CreateAccount: React.FC = () => {
  const initialData = {
    name: "",
    email: "",
    password: "",
  };

  const initialErrors = {
    name: "",
    email: "",
    password: "",
  };

  const history = useHistory();

  const [data, setData] = useState<Data>(initialData);

  const [errors, setErrors] = useState<Errors>(initialErrors);

  function handleOnChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
    const name = e.target.name;
    const value = e.target.value;

    setData({ ...data, [name]: value });
  }

  function handleValidate() {
    let response = { status: true };
    let errors = { name: "", email: "", password: "" };

    if (!data.name) {
      document
        .querySelector("input[name=name]")
        ?.parentElement?.classList.add("input-error");

      errors.name = "Full Name is required!";

      response = { status: false };
    } else {
      document
        .querySelector("input[name=name]")
        ?.parentElement?.classList.remove("input-error");
    }

    if (data.email && !validateEmail(data.email)) {
      document
        .querySelector("input[name=email]")
        ?.parentElement?.classList.add("input-error");

      errors.email = "Users name or Email is invalid!";

      response = { status: false };
    } else {
      if (!data.email) {
        document
          .querySelector("input[name=email]")
          ?.parentElement?.classList.add("input-error");

        errors.email = "Users name or Email is required!";

        response = { status: false };
      } else {
        document
          .querySelector("input[name=email]")
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

    history.push("/auth");
  }

  return (
    <AuthContainer>
      <Container>
        <header>
          <h1>Getting Started</h1>
        </header>

        <Form onSubmit={handleSubmit}>
          <Item>
            <Label>
              Full Name
              <Input
                type="text"
                name="name"
                value={data.name}
                onChange={handleOnChangeInput}
              />
            </Label>
            {errors.name && <Error>{errors.name}</Error>}
          </Item>

          <Item>
            <Label>
              Users name or Email
              <Input
                type="text"
                name="email"
                value={data.email}
                onChange={handleOnChangeInput}
              />
            </Label>
            {errors.email && <Error>{errors.email}</Error>}
          </Item>

          <Item>
            <Label>
              Create Password
              <Input
                type="password"
                name="password"
                value={data.password}
                onChange={handleOnChangeInput}
              />
            </Label>
            {errors.password && <Error>{errors.password}</Error>}
          </Item>

          <Button backgroundColor="#707070" color="#FFF" type="submit">
            Sign up
          </Button>
        </Form>
        <Divider legend="Or" />

        <Button backgroundColor="#FFF" color="#000">
          <img src={GoogleLogo} alt="Google Logo" />
          Sign up with Google
        </Button>
        <p>
          By signing up, you agree to <strong>Invision</strong>
          <br /> <Link to="terms-of-conditions">
            Terms of Conditions
          </Link> and <Link to="privacy-policy">Privacy Policy</Link>
        </p>

        <span>
          Already on Invision? <Link to="/auth">Log in</Link>
        </span>
      </Container>
    </AuthContainer>
  );
};

export default CreateAccount;
