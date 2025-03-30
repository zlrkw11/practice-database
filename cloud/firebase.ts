const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");

const serviceAccount = require("../practice-c135d-firebase-adminsdk-fbsvc-10c85e1a87.json");

initializeApp({
  credential: cert(serviceAccount),
});

const db = getFirestore();

async function main() {
  const data = {
    name: "ray",
    age: 21,
  };

  await db.collection("people").doc("ray").set(data);
  console.log("document written");
}

main().catch(console.error);
