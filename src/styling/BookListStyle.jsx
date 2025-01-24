import { Link } from "react-router-dom";
import styled from "styled-components";
import FavouriteBtn from "../components/FavouriteBtn";

export const BookGrid = styled.ul`
  margin: 2.5rem 4rem;
  display: grid;
  grid-template-columns: repeat(6, 16%);
  justify-content: center;
  gap: 1rem;
`;

export const BookLi = styled.li`
  display: flex;
  position: relative;
  justify-content: center;
`;

export const BookLink = styled(Link)`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 0.5em;
`;

//TODO cut off word at certain length and display on hover
export const BookTitle = styled.p`
  text-align: center;
  max-width: 23ch;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const BookCoverBackground = styled.div`
  display: flex;
  justify-content: center;
  background-color: #edf5e0;
  border-radius: 2rem;
  padding: 0.8em;
  flex: 1;
`;

export const BookCover = styled.img`
  width: 80%;
  object-fit: contain;
`;

export const StyledFavBtn = styled(FavouriteBtn)`
  padding: 1em;
  position: absolute;
  right: 1em;
  bottom: 1em;
  border: none;
  border-radius: 2em;
  cursor: pointer;
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

export const PageNavBtn = styled.button``;
