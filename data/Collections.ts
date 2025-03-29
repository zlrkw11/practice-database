import "dotenv/config";
import firestore from "./Firestore";
import { User } from "models/user";

const Collections = {
  users: firestore.collection<User>("users"),
};

export default Collections;
