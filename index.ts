import Service from "data/Service";
import { User } from "models/user";
const UserService = new Service();

const user: User = {
  username: "ray",
  age: 21,
};

UserService.createUser(user);
