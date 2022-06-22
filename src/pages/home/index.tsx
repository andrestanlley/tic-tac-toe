import React from "react";
import { Form } from "@unform/web";
import { Input } from "../../componets/input";
import { MainContent } from "./styles";
import Button from "../../componets/input/button";

const Home = () => {
  return (
    <MainContent>
      <Form onSubmit={() => console.log("a fazer")}>
        <img src="../assets/logo.png" alt="Logo TicTacToe" />
        <Input name="Name" />
        <Button buttonType="submit" label="PRESS START" />
      </Form>
    </MainContent>
  );
};

export default Home;
