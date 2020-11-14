import styled from "@emotion/styled/";
import useSWR from "swr";
import { serializeError } from "serialize-error";
import * as utilStyles from "../styles/utils";
import Alert from "./Alert";

const Container = styled.div`
  max-width: 36rem;
  padding: 0 1rem;
  border: 2px solid grey;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 3rem auto;
  padding: 1rem;
`;

const List = styled.ul`
  margin: 0 auto;
  list-style: square;
  padding: 0;
`;
const ListItem = styled.li`
  padding: 0;
`;

const HeaderHomeImage = styled.img`
  width: 8rem;
  height: 8rem;
  margin: 0.5rem auto;
`;

const UserAttribute = styled.span`
  font-style: italic;
`;

const fetcher = (url) => fetch(url).then((r) => r.json());

const Profile = ({ userName }) => {
  const { data, error } = useSWR(
    `https://api.github.com/users/${userName}`,
    fetcher
  );

  if (error) {
    const { message, ...rest } = serializeError(error);
    return (
      <Container>
        <Alert type="error">Something went wrong: {message}</Alert>
      </Container>
    );
  }

  if (!data) {
    return (
      <Container>
        <Alert type="loading">Loading...</Alert>
      </Container>
    );
  }

  return (
    <Container>
      {data.message ? (
        <Alert>{data.message}</Alert>
      ) : (
        <Alert type="success">
          <h1>{data.name}</h1>
          <HeaderHomeImage
            src="/images/profile.png"
            css={utilStyles.borderCircle}
            alt={name}
          />
          <List>
            <ListItem>
              👮‍♀️ Username: <UserAttribute>{data.login}</UserAttribute>
            </ListItem>
            <ListItem>
              <a href={data.html_url} target="_blank">
                🏠 Url →
              </a>
            </ListItem>
            <ListItem>
              🙋‍♂️ Followers: <UserAttribute>{data.followers} </UserAttribute>
            </ListItem>
            <ListItem>
              👨‍💻 Following: <UserAttribute>{data.following} </UserAttribute>
            </ListItem>
            <ListItem>
              🌍 Location: <UserAttribute>{data.location} </UserAttribute>
            </ListItem>
          </List>
        </Alert>
      )}
    </Container>
  );
};

export default Profile;
