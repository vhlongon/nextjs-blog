import styled from "@emotion/styled";

const colors = {
  success: "green",
  error: "red",
  loading: "orange",
};

const Wrapper = styled.div`
  color: ${({ type }) => colors[type] || "grey"};
`;
const Alert = ({ children, type }) => {
  return <Wrapper type={type}>{children}</Wrapper>;
};

export default Alert;
