import { Link } from "react-router-dom";
import styled from "styled-components";
import Favourites from "../components/Favourites";

export const StyledFavorites = styled(Favourites)`
  z-index: 1;
  margin: auto;
  /* position: fixed; */
  right: 1em;
`;

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1em;
  margin-top: 1em;
`;

export const TitleSearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const SearchForm = styled.form`
  width: 85%;
  display: flex;
  justify-content: center;
`;

export const SearchBar = styled.input`
  width: 90%;
  font-size: 16px;
  height: 2em;
`;

export const LinkContainer = styled.nav`
  display: flex;
  gap: 0.5em;
`;

export const CatLink = styled(Link)`
  color: ${(props) => props.color};
  text-decoration: none;
  border: 2px gray solid;
  padding: 0.25em 0.5em;
`;
