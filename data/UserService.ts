import { User } from "models/user";
import Collections from "./Collections";

class Service {
  /**
   *
   * @param user to add
   * @returns the created document ref
   */
  public async createUser(user: User) {
    return await Collections.users.add(user);
  }
  /**
   *
   * @param userID to delete
   */
  public async deleteUser(userID: string) {
    return await Collections.users.doc(userID).delete();
  }
}

export default Service;
