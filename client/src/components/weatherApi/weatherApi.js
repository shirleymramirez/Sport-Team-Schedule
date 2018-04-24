import React, { Component } from "react";
import Forecast from './forecast';

class Weather extends Component {
  render(){
    return (
      <Forecast latitude={34.04} longitude={-111.83} name='Mesa, AZ' />
    )
  };
};

export default Weather;

