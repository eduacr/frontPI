import React, { useState } from 'react'
import SearchBar from '../Components/home/searchBar/SearchBar'

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

function Home() {
  const [showCitys, setShowCitys] = useState(false);
  const [citySelected, setCitySelected] = useState(null);

  const [showCalendar, setShowCalendar] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleShowCity = () => {
    setShowCitys(!showCitys);
  };

  const handleSelectCity = id => {
    const citySelected = citysHardCode.find(city => city.id === id);
    setCitySelected(citySelected);
  }


  const handleShowCalendar = () => {
    setShowCalendar(!showCalendar);
  }

  const onChangeDate = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };


  return (
    <main>
        <SearchBar
          showCitys={showCitys}
          citySelected={citySelected}
          handleSelectCity={handleSelectCity}
          handleShowCity={handleShowCity}
        />
    </main>
  )
}

export default Home