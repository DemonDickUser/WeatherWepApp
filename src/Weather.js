import React, { useEffect, useState } from "react";
import { Button, TextField } from "@material-ui/core";
import Icon from "./Icon";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300&family=Nerko+One&display=swap');
</style>;

function Weather() {
  /*----usestates----- */

  const [city, setCity] = useState("polokwane");
  const [deg, setDeg] = useState("");
  const [condition, setCondition] = useState("");
  const [country, setCountry] = useState("");
  const [feelsLike, setFeelsLike] = useState("");

  /*---------useeffext------------*/

  useEffect(() => {
    fetchData();
  }, [city]);

  /*--------asysn-fetch-data---------*/

  const fetchData = async () => {
    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=44c3df15e279e0d33f36bc627bd26005`
    );

    /*-----data-to-json-----------*/

    const info = await data.json();
    return info;
  };

  /*----------button-handler---------*/

  const clickHandler = (e) => {
    e.preventDefault();

    /*---------fetch-if-clicked-city-from-input-----*/

    fetchData().then((info) => {
      setCity(info.name);
      setDeg(info.main.temp);
      setCondition(info.weather[0].main);
      setCountry(info.sys.country);
      setFeelsLike(info.main.feels_like);
    });
  };

  /*-------jsx--------------*/

  return (
    <div className="main-app">
      <div className="header">
        <h2>Weather</h2>
        <ul>
          <li>about</li>
          <li>latest news</li>
          <li>sign in</li>
        </ul>
      </div>
      <div className="form-icon">
        <form className="form">
          <TextField
            onChange={(e) => setCity(e.target.value)}
            type="text"
            id="standard-basic"
            className="input"
            label="city"
            value={city}
          />
          <Button
            className="button"
            onClick={(e) => clickHandler(e)}
            variant="contained"
            color="primary"
          >
            Search
          </Button>
        </form>
        <div className="icon">
          <Icon condition={condition} />
        </div>
      </div>
      <section className="main-page">
        <div className="inline">
          <h3>{city}</h3>
          <h3>{deg}°C</h3>
          <h3>{condition}</h3>
        </div>
        <div className="last">
          <h3>feels like: {feelsLike}°C</h3>

          <h3>{country}</h3>
        </div>
      </section>
    </div>
  );
}
export default Weather;
