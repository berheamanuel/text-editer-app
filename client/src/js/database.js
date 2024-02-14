import { openDB } from "idb";

const initdb = async () => {
  try {
    const db = openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  
  });
} catch (error) {
  console.error("Failed to initialize database", error);
    throw error;
}
};

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log("PUT to the database");

  // Create a connection to the database database and version we want to use.
  const jateDb = await openDB("jate", 1);

  // Create a new transaction and specify the database and data privileges.
  const tx = jateDb.transaction("jate", "readwrite");

  // Access the object store
  const store = tx.objectStore("jate");

  // Add the content to the database
  const request = store.add({ id: id, value: content });

  // Get confirmation of the request.
  const result = await request;

  // Wait for the transaction to complete.
  await tx.done;

  console.log("Data saved to the database", result);

  // check if it has errors
  console.error("putDb not implemented");
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log("GET from the database");

  // Create a connection to the database database and version we want to use.
  const contactDb = await openDB("jate", 1);

  // Create a new transaction and specify the database and data privileges.
  const tx = contactDb.transaction("jate", "readonly");

  // Open up the desired object store.
  const store = tx.objectStore("jate");

  // Use the .getAll() method to get all data in the database.
  const request = store.getAll();

  // Get confirmation of the request.
  const result = await request;

  console.log("result.value", result);

  console.error("getDb not  implemented");
  
  return result?.value;
  
};

initdb();
