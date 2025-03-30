import UserService from "data/UserService";
import { User } from "models/user";
const UserS = new UserService();

const user: User = {
  username: "Karen",
  age: 49,
};

const user2: User = {
  username: "Jeffery",
  age: 19,
};

// UserS.deleteUser("EAKO9Rsrm4EVFejrFmw9");

(async () => {
  const newUser = await UserS.createUser(user);
  UserS.deleteUser(newUser.id);
})();

UserS.createUser(user2);
UserS.editUsername("5qSoI7Nu6jHRMy0AdtSC", "new ray");
