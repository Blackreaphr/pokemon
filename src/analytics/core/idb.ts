/** Simple IndexedDB helper */
export function getDB(store: string): Promise<IDBObjectStore> {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open('analytics');
    req.onupgradeneeded = () => {
      if (!req.result.objectStoreNames.contains(store)) {
        req.result.createObjectStore(store, { keyPath: 'id', autoIncrement: true });
      }
    };
    req.onerror = () => reject(req.error);
    req.onsuccess = () => {
      const tx = req.result.transaction(store, 'readwrite');
      resolve(tx.objectStore(store));
    };
  });
}
