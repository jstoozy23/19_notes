import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

export const putDb = async (content) => console.error('putDb not implemented');

  const jateDb = await openDB('jate', 1);

  const obj = jateDb.transaction('jate', 'readwrite');

  // Open up the desired object store.
  const store = obj.objectStore('jate');

  // Use the .add() method on the store and pass in the content.
  const request = store.add({ jate: content });

export const getDb = async () => console.error('getDb complete');

const result = await request;
  console.log(':rocket: - saved', result)

initdb();
