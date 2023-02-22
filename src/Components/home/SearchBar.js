import React from "react";
import {
  BtnSearch,
  DataListOption,
  FormSearch,
  SelectCity,
  SearchBarContainer,
  SearchBarTitle,
  SearchDateBtn,
  SelectOption,
  IconLugar
} from "./styledComponentsHome";
import { ReactComponent as IconLocation } from "../../img/icon-location.svg";

const citysHardCode = [
  {
    id: 1,
    pais: "Argentina",
    nombre: "Buenos Aires",
  },
  {
    id: 2,
    pais: "Colombia",
    nombre: "Bogotá",
  },
  {
    id: 3,
    pais: "México",
    nombre: "Ciudad de México",
  },
  {
    id: 4,
    pais: "Perú",
    nombre: "Lima",
  },
  {
    id: 5,
    pais: "Brasil",
    nombre: "São Paulo",
  },
  {
    id: 6,
    pais: "Estados Unidos",
    nombre: "Nueva York",
  },
  {
    id: 7,
    pais: "Francia",
    nombre: "París",
  },
  {
    id: 8,
    pais: "Japón",
    nombre: "Tokio",
  },
  {
    id: 9,
    pais: "España",
    nombre: "Madrid",
  },
];

export default function SearchBar() {
  return (
    <SearchBarContainer>
      <SearchBarTitle>
        Busca ofertas en hoteles, casas y mucho más
      </SearchBarTitle>
      <FormSearch>


        <SelectCity>
          <IconLugar />
          <p>¿A dónde vamos?</p>
        </SelectCity>

        <SearchDateBtn>Check in - Check Out</SearchDateBtn>
        <BtnSearch>Buscar</BtnSearch>

        
      </FormSearch>
    </SearchBarContainer>
  );
}
