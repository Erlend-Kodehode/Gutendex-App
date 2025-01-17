import { useContext, useEffect } from "react";
import { bookContext } from "../App";
import { useParams } from "react-router-dom";

export default function BookListView() {
  const {
    bookList,
    loading,
    error,
    setUrl,
    setFavoritesList,
    favoritesList,
    apiURL,
  } = useContext(bookContext);
  const { category } = useParams();
  useEffect(() => {
    if (category) setUrl(`${apiURL}?topic=${category}`);
  }, []);

  return error ? (
    <p>{error}</p>
  ) : loading ? (
    <p>loading..</p>
  ) : (
    <>
      <ul>
        {bookList.results.map((book) => (
          <li key={book.id}>
            {book.title}
            <button
              type="button"
              onClick={() => {
                if (!favoritesList.includes(book))
                  setFavoritesList((prev) => [...prev, book]);
              }}
            >
              {favoritesList.includes(book) ? "<03" : "<3"}
            </button>
          </li>
        ))}
      </ul>
      {/* TODO Page number */}
      {bookList.previous && (
        <button type="button" onClick={() => setUrl(bookList.previous)}>
          Prevoius Page
        </button>
      )}
      {bookList.next && (
        <button type="button" onClick={() => setUrl(bookList.next)}>
          Next Page
        </button>
      )}
    </>
  );
}
