import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { bookContext } from "../App";
import {
  BDetailLinks,
  BookDetailContainer,
  BookTitle,
  DescContainer,
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
          <BookTitle>{fetchData.title}</BookTitle>
          <DescContainer>
            <InfoLists>
              Authors:
              {fetchData.authors.map((author, i) => (
                <li key={i}>{author.name}</li>
              ))}
            </InfoLists>
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
            <p>{fetchData.download_count} Downloads</p>
            <BDetailLinks>
              <DetailFavBtn book={fetchData} />
              <a href={fetchData.formats["text/html"]}>Ebook</a>
            </BDetailLinks>
          </DescContainer>
        </InfoContainer>
      </BookDetailContainer>
    )
  );
}
