import { useContext, useEffect, useState } from "react";
import { bookContext } from "../App";
import { useParams } from "react-router-dom";

export default function BookListView() {
  const {
    bookList,
    loading,
    error,
    url,
    setUrl,
    setFavoritesList,
    favoritesList,
    apiURL,
  } = useContext(bookContext);

  const [pageCount, setPageCount] = useState(1);

  const { category } = useParams();
  useEffect(() => {
    if (url !== `${apiURL}?topic=${category}`)
      setUrl(category ? `${apiURL}?topic=${category}` : apiURL);
  }, [category]);

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
      {bookList.previous && (
        <button
          type="button"
          onClick={() => {
            setPageCount((prev) => prev - 1);
            setUrl(bookList.previous);
          }}
        >
          Prevoius Page
        </button>
      )}
      <p>Page: {pageCount}</p>
      {bookList.next && (
        <button
          type="button"
          onClick={() => {
            setPageCount((prev) => prev + 1);
            setUrl(bookList.next);
          }}
        >
          Next Page
        </button>
      )}
    </>
  );
}
