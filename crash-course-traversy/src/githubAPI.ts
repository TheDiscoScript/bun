//bun intall axios)
import axios from "axios";

async function fetchUser(user: string) {
  const { data } = await axios.get(`https://api.github.com/users/${user}`);
  return data;
}

export default fetchUser;
