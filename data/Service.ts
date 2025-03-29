import { User } from "models/user";
import Collections from "./Collections";

class Service {
  /**
   *
   * @param
   * @returns the created document ref
   */
  public async createUser(user: User) {
    return await Collections.users.add(user);
  }
}

export default Service;
