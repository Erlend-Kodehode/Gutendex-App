import { Link } from "react-router-dom";
import styled from "styled-components";
import FavouriteBtn from "../components/FavouriteBtn";

export const BookGrid = styled.ul`
  margin-top: 2.5rem;
  display: grid;
  grid-template-columns: repeat(6, 14%);
  justify-content: center;
  gap: 1rem;
`;

export const BookLi = styled.li`
  display: flex;
  position: relative;
  justify-content: center;
  background-color: #f6f0fa;
  border-radius: 2rem;
  padding: 0.75em;
`;

export const BookLink = styled(Link)`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const BookTitle = styled.p`
  text-align: center;
`;

export const BookCover = styled.img`
  width: 80%;
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
