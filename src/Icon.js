import React from "react";

function Icon({ condition }) {
  switch (condition) {
    case "clear sky":
      return <img src="./icon/clear sky.png" alt="icon" />;
      break;

    case "Few Clouds":
      return <img src="few clouds.png" alt="icon" />;
      break;

    case "Scattered Clouds":
      return <img src="./icon/scattered clouds.png" alt="icon" />;
      break;

    case "Clouds":
      return <img src="./icon/broken clouds.png" alt="icon" />;
      break;

    case "Shower Rain":
      return <img src="./icon/shower rain.png" alt="icon" />;
      break;

    case "Rain":
      return <img src="./icon/rain.png" alt="icon" />;
      break;

    case "Thunderstorm":
      return <img src="./icon/thunderstorm.png" alt="icon" />;
      break;

    case "Snow":
      return <img src="./icon/snow.png" alt="icon" />;
      break;

    case "Mist":
      return <img src="./icon/mist.png" alt="icon" />;
      break;

    default:
      return <img src="./icon/clear sky.png" alt="" />;
  }
}

export default Icon;
