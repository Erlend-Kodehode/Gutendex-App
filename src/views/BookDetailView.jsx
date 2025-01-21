import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { bookContext } from "../App";

export default function BookDetailView() {
  const { bookID } = useParams();
  const { setUrl, bookList, apiURL, loading, setFavoritesList } =
    useContext(bookContext);
  useEffect(() => {
    setUrl(`${apiURL}/${bookID}`);
  }, [bookID]);

  return loading ? (
    <p>loading...</p>
  ) : (
    <>
      <h3>{bookList.title}</h3>
      <img src={bookList.formats["image/jpeg"]} alt="Book Cover" />
      <ul>
        Forfattere:
        {bookList.authors.map((author, i) => (
          <li key={i}>{author.name}</li>
        ))}
      </ul>
      <p>Nedlastinger: {bookList.download_count}</p>
      <ul>
        Kategorier:
        {bookList.subjects.map((cat, i) => (
          <li key={i}>{cat}</li>
        ))}
      </ul>
      <ul>
        Språk:
        {bookList.languages.map((language, i) => (
          <li key={i}>{language}</li>
        ))}
      </ul>
      <a href={bookList.formats["text/html"]}>Link til Ebok</a>
      {/* TODO gjør knappen en component */}
      <button
        type="button"
        onClick={() =>
          setFavoritesList((prev) =>
            prev.includes(book)
              ? prev.toSpliced(prev.indexOf(book), 1)
              : [...prev, book]
          )
        }
      >
        {favoritesList.includes(book) ? "<03" : "<3"}
      </button>
    </>
  );
}
