import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1em;
  padding: 1em;
  background-color: #edf5e0;
  border-bottom: 2px #e4f0d1 solid;
  position: sticky;
  top: 0;
  z-index: 1;
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

export const SearchBtn = styled.button`
  border: 2px #cbddae solid;
  border-radius: 0.3em;
  padding: 0.5em;
  background-color: #daebc1;
  cursor: pointer;
  &:hover {
    background-color: #cbddae;
  }
`;

export const SearchBar = styled.input`
  width: 90%;
  font-size: 16px;
  height: 2em;
`;

export const FavListBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.1em;
  border: 2px #cbddae solid;
  border-radius: 0.5em;
  cursor: pointer;
  background-color: #edf5e0;
  &:hover {
    background-color: #cbddae;
  }
`;

export const ButtonImg = styled.img`
  filter: invert(24%) sepia(83%) saturate(3031%) hue-rotate(349deg)
    brightness(107%) contrast(103%);
`;

export const LinkContainer = styled.nav`
  display: flex;
  gap: 0.5em;
`;

export const CatLink = styled(Link)`
  color: ${(props) => (props.$selected ? "red" : "black")};
  text-decoration: none;
  border: 2px gray solid;
  padding: 0.25em 0.5em;
`;
