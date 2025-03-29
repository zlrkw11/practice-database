import { admin } from "../admin/Firebase";

const converter = <T>() => ({
  toFirestore: (data: any) => data,
  fromFirestore: (doc: any) => doc.data() as T,
});

/**
 * Firestore adapter for the application.
 */
const firestore = Object.assign(
  () => {
    return admin.firestore();
  },
  {
    doc: <T>(path: string) => {
      return admin.firestore().doc(path).withConverter<T>(converter<T>());
    },
    /**
     * Collection adapter for Firestore.
     * @param path The path to the collection.
     * @returns The collection adapter.
     */
    collection: <T>(path: string) => {
      return admin
        .firestore()
        .collection(path)
        .withConverter<T>(converter<T>());
    },
  }
);

export default firestore;
