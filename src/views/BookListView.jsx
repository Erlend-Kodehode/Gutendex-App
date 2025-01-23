import { useContext, useEffect, useState } from "react";
import { bookContext } from "../App";
import { useParams } from "react-router-dom";
import {
  BookCover,
  BookGrid,
  BookLi,
  BookLink,
  BookTitle,
  StyledFavBtn,
} from "../styling/BookListStyle";

export default function BookListView() {
  const { bookList, loading, error, url, setUrl, apiURL } =
    useContext(bookContext);

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
    bookList.results && (
      <>
        <BookGrid>
          {bookList.results.map((book) => (
            <BookLi key={book.id}>
              <BookLink to={`/book/${book.id}`}>
                <BookTitle>{book.title}</BookTitle>
                <BookCover src={book.formats["image/jpeg"]} alt="Book Cover" />
              </BookLink>
              <StyledFavBtn book={book} />
            </BookLi>
          ))}
        </BookGrid>
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
    )
  );
}
