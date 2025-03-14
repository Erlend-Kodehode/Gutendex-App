import { Link } from "react-router-dom";
import styled from "styled-components";
import FavouriteBtn from "../components/FavouriteBtn";

export const BookGrid = styled.ul`
  margin: 2.5rem 4rem;
  display: grid;
  grid-template-columns: repeat(5, 20%);
  justify-content: center;
  gap: 1rem;
  @media only screen and (max-width: 1000px) {
    grid-template-columns: repeat(4, 25%);
  }
  @media only screen and (max-width: 850px) {
    grid-template-columns: repeat(3, 35%);
  }
  @media only screen and (max-width: 650px) {
    grid-template-columns: repeat(2, 50%);
  }
  @media only screen and (max-width: 470px) {
    display: flex;
    flex-direction: column;
  }
`;

export const BookLi = styled.li`
  display: flex;
  justify-content: center;
`;

export const BookContainer = styled.div`
  display: flex;
  position: relative;
`;

export const BookLink = styled(Link)`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 0.5em;
  text-decoration: none;
`;

export const BookTitle = styled.p`
  text-align: center;
  max-width: 13em;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  color: black;
`;

export const BookCoverBackground = styled.div`
  display: flex;
  justify-content: center;
  background-color: #edf5e0;
  border-radius: 2rem;
  padding: 0.8em;
  flex: 1;
  ${BookLink}:hover & {
    background-color: #e2edd2;
  }
`;

export const BookCover = styled.img`
  width: 80%;
  object-fit: contain;
`;

export const StyledFavBtn = styled(FavouriteBtn)`
  position: absolute;
  right: 5%;
  bottom: 1em;
  padding: 0.9em;
  border: none;
  border-radius: 2em;
  cursor: pointer;
  background-color: #cfe9c3;
  &:hover {
    background-color: #bed8b2;
  }
`;

export const PageNavContainer = styled.div`
  display: flex;
  gap: 1em;
  margin: 2em;
  justify-content: center;
`;

export const PageNum = styled.p`
  font-size: 1.25em;
`;

export const PageNavBtn = styled.button`
  background-color: #daebc1;
  border: 2px #cbddae solid;
  border-radius: 0.5em;
  padding: 0.25em 0.5em;
  &:hover {
    background-color: #aec97e;
    border: 2px #8aa85a solid;
  }
  cursor: pointer;
`;
