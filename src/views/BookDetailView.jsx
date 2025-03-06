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
  const { setUrl, fetchData, apiURL, loading } = useContext(bookContext);
  useEffect(() => {
    setUrl(`${apiURL}/${bookID}`);
  }, [bookID]);

  return loading ? (
    <p>loading...</p>
  ) : (
    fetchData.title && (
      <BookDetailContainer>
        <img src={fetchData.formats["image/jpeg"]} alt="Book Cover" />
        <InfoContainer>
          <h3>{fetchData.title}</h3>
          <InfoLists>
            Authors:
            {fetchData.authors.map((author, i) => (
              <li key={i}>{author.name}</li>
            ))}
          </InfoLists>
          <p>{fetchData.download_count} Downloads</p>
          <InfoLists>
            Categories:
            {fetchData.subjects.map((cat, i) => (
              <li key={i}>{cat}</li>
            ))}
          </InfoLists>
          <InfoLists>
            Languages:
            {fetchData.languages.map((language, i) => (
              <li key={i}>{language}</li>
            ))}
          </InfoLists>
          <a href={fetchData.formats["text/html"]}>Link til Ebok</a>
          <DetailFavBtn book={fetchData} />
        </InfoContainer>
      </BookDetailContainer>
    )
  );
}
