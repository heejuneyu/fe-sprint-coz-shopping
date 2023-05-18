import React from 'react';
import { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { openDB } from 'idb';
import './App.css';


export default function Bookmark () {
//   const [bookmarks, setBookmarks] = useState([]);
//   const [db, setDb] = useState(null);

//   useEffect(() => {
//     openDB('my-bookmarks-db', 1, {
//       upgrade(db) {
//         if (!db.objectStoreNames.contains('bookmarks')) {
//           db.createObjectStore('bookmarks', { keyPath: 'id' });
//         }
//       },
//     }).then((database) => {
//       setDb(database);
//       fetchBookmarks(database);
//     });
//   }, []);

//   const fetchBookmarks = async (database) => {
//     const tx = database.transaction('bookmarks', 'readonly');
//     const store = tx.objectStore('bookmarks');
//     const data = await store.getAll();
//     setBookmarks(data);
//   };

//   const handleBookmarkToggle = async (bookmark) => {
//     if (!db) return;

//     const tx = db.transaction('bookmarks', 'readwrite');
//     const store = tx.objectStore('bookmarks');

//     if (bookmarks.some((b) => b.id === bookmark.id)) {
//       await store.delete(bookmark.id);
//       setBookmarks(bookmarks.filter((b) => b.id !== bookmark.id));
//     } else {
//       await store.put(bookmark);
//       setBookmarks([...bookmarks, bookmark]);
//     }

//     await tx.complete;
//   };

  return (
    <div id="item-list-container">
    <div id="item-list-body">
    <div>
      <div>북마크 목록sadfdsfsadfasdfasdfasfdasdfasdfadsgfsgfsagdsfgvdfkl;cgbhjdgorklfsvnujdskhcnisuka</div>
      {/* <ul>
        {bookmarks.map((bookmark) => (
          <li key={bookmark.id}>
            {bookmark.title}
            <FaStar
              color={bookmarks.some((b) => b.id === bookmark.id) ? 'gold' : 'gray'}
              onClick={() => handleBookmarkToggle(bookmark)}
            />
          </li>
        ))}
      </ul> */}
    </div>
    </div>
    </div>
  );
};
