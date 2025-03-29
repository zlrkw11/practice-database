import * as _admin from "firebase-admin";

const keysEnvVar = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;

const keys = JSON.parse(keysEnvVar ?? "{}");
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig =
  Object.keys(keys).length > 0
    ? {
        credential: _admin.credential.cert(keys),
      }
    : {};

const firebase = _admin.initializeApp(firebaseConfig);

export const admin = _admin;

export const auth = firebase.auth();
