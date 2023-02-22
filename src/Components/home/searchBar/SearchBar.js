import SelectCityOption from "./SelectCityOption";
import {
  BtnSearch,
  FormSearch,
  SelectCity,
  SearchBarContainer,
  SearchBarTitle,
  SearchDateBtn,
  IconLocation,
  IconCalendar,
  SelectCityOptionContainer,
} from "./styledSearchBar";

const citysHardCode = [
  {
    id: 1,
    country: "Argentina",
    name: "Buenos Aires",
  },
  {
    id: 2,
    country: "Colombia",
    name: "Bogotá",
  },
  {
    id: 3,
    country: "México",
    name: "Ciudad de México",
  },
  {
    id: 4,
    country: "Perú",
    name: "Lima",
  },
  // {
  //   id: 5,
  //   country: "Brasil",
  //   name: "São Paulo",
  // },
  // {
  //   id: 6,
  //   country: "Estados Unidos",
  //   name: "Nueva York",
  // },
  // {
  //   id: 7,
  //   country: "Francia",
  //   name: "París",
  // },
  // {
  //   id: 8,
  //   country: "Japón",
  //   name: "Tokio",
  // },
  // {
  //   id: 9,
  //   country: "España",
  //   name: "Madrid",
  // },
];

export default function SearchBar({
  showCitys,
  citySelected,
  handleSelectCity,
  handleShowCity,
}) {
  return (
    <SearchBarContainer>
      <SearchBarTitle>
        Busca ofertas en hoteles, casas y mucho más
      </SearchBarTitle>
      <FormSearch>
        <SelectCity onClick={handleShowCity} $empty={citySelected}>
          <IconLocation $empty={citySelected} />
          <p>
            {citySelected
              ? `${citySelected.name}, ${citySelected.country}`
              : "¿A dónde vamos?"}
          </p>
          <SelectCityOptionContainer $show={showCitys}>
            {citysHardCode.map((city) => (
              <SelectCityOption
                key={city.id}
                city={city}
                handleSelectCity={handleSelectCity}
              />
            ))}
          </SelectCityOptionContainer>
        </SelectCity>

        <SearchDateBtn>
          <IconCalendar $empty />
          Check in - Check Out
        </SearchDateBtn>
        <BtnSearch>Buscar</BtnSearch>
      </FormSearch>
    </SearchBarContainer>
  );
}
