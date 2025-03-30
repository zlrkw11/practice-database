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
  /**
   *
   * @param userID to edit
   */
  public async editUsername(userID: string, newName: string) {
    try {
      const user = await Collections.users.doc(userID).get();
      if (!user) {
        throw new Error(`User with ID: ${userID} does not exist!`);
      }
      await Collections.users.doc(userID).update({ username: newName });
      return { success: true };
    } catch (error) {
      console.log("error updating username: ", error);
      return { success: false, error };
    }
  }
}

export default Service;
