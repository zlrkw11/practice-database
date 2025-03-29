# Firebase
```
npm install -g typescript
npm install -g ts-node
```

## admin layer
connects you to firebase

## data layer
using firebase - firestore features

**collections** 
creating the table for the database, adds the row into firestore
```Typescript
const Collections = {
  users: firestore.collection<User>("users"),
};
```

## dotenv
storing everything under process folder
```npm i dotenv```

first users = key
second "users" displays on the table as the name

## service 
this is a file that does operations on the database regarding to its objects.

## run index.ts
```
npm i -D tsx
npx tsx src/index.ts
```

## operations using DOC
instead of adding data by separating them, we can also add using .doc
```Typescript
async function main() {
  const data = {
    name: "benson",
    age: 22,
  };

  await db.collection("people").doc("benson").set(data);
  console.log("document written");
}
```
this will add a new **collection** into the database with a new document(object) named 'benson' and
set its data.

