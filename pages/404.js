import styled from "@emotion/styled";
import React from "react";

const Poo = styled.div`
  font-size: 80px;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NotFoundPage = () => {
  return <Poo>Oops 💩</Poo>;
};

export default NotFoundPage;
