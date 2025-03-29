import Service from "data/Service";
import { User } from "models/user";
const UserService = new Service();

const user: User = {
  username: "ray",
  age: 21,
};

const user2: User = {
  username: "Jeffery",
  age: 19,
};

UserService.createUser(user);
UserService.createUser(user2);
