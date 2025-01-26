import { useContext, useEffect, useState } from "react";
import { bookContext } from "../App";
import { useParams } from "react-router-dom";
import {
  BookContainer,
  BookCover,
  BookCoverBackground,
  BookGrid,
  BookLi,
  BookLink,
  BookTitle,
  PageNavBtn,
  PageNavContainer,
  PageNum,
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
    setPageCount(1);
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
              <BookContainer>
                <BookLink title={book.title} to={`/book/${book.id}`}>
                  <BookTitle>{book.title}</BookTitle>
                  <BookCoverBackground>
                    <BookCover
                      src={book.formats["image/jpeg"]}
                      alt="Book Cover"
                    />
                  </BookCoverBackground>
                </BookLink>
                <StyledFavBtn book={book} />
              </BookContainer>
            </BookLi>
          ))}
        </BookGrid>
        <PageNavContainer>
          {bookList.previous && (
            <PageNavBtn
              type="button"
              onClick={() => {
                setPageCount((prev) => prev - 1);
                setUrl(bookList.previous);
              }}
            >
              Prevoius Page
            </PageNavBtn>
          )}
          <PageNum>
            Page {pageCount} of {Math.ceil(bookList.count / 32)}
          </PageNum>

          {bookList.next && (
            <PageNavBtn
              type="button"
              onClick={() => {
                setPageCount((prev) => prev + 1);
                setUrl(bookList.next);
              }}
            >
              Next Page
            </PageNavBtn>
          )}
        </PageNavContainer>
      </>
    )
  );
}
