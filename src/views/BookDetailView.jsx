import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { bookContext } from "../App";
import {
  BookDetailContainer,
  DetailFavBtn,
  InfoContainer,
  InfoLists,
} from "../styling/BookDetailStyle";

export default function BookDetailView() {
  const { bookID } = useParams();
  const { setUrl, bookList, apiURL, loading } = useContext(bookContext);
  useEffect(() => {
    setUrl(`${apiURL}/${bookID}`);
  }, [bookID]);

  return loading ? (
    <p>loading...</p>
  ) : (
    bookList.title && (
      <BookDetailContainer>
        <img src={bookList.formats["image/jpeg"]} alt="Book Cover" />
        <InfoContainer>
          <h3>{bookList.title}</h3>
          <InfoLists>
            Forfattere:
            {bookList.authors.map((author, i) => (
              <li key={i}>{author.name}</li>
            ))}
          </InfoLists>
          <p>{bookList.download_count} Nedlastinger</p>
          <InfoLists>
            Kategorier:
            {bookList.subjects.map((cat, i) => (
              <li key={i}>{cat}</li>
            ))}
          </InfoLists>
          <InfoLists>
            Språk:
            {bookList.languages.map((language, i) => (
              <li key={i}>{language}</li>
            ))}
          </InfoLists>
          <a href={bookList.formats["text/html"]}>Link til Ebok</a>
          <DetailFavBtn book={bookList} />
        </InfoContainer>
      </BookDetailContainer>
    )
  );
}
