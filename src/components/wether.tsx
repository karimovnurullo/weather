import React, { Component, ChangeEvent, FormEvent } from "react";

interface WeatherState {
  input: string;
  temperature: number;
  humidity: number;
  description: string;
  error: string;
}

class Weather extends Component<{}, WeatherState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      input: "",
      temperature: 0,
      humidity: 0,
      description: "",
      error: "",
    };
  }

  getData = async () => {
    const { input } = this.state;
    const apiKey = "895284fb2d2c50a520ea537456963d9c"; // Replace with your OpenWeatherMap API key
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}`
      );
      const data = await response.json();
      if (data.cod === 200) {
        const { main, weather } = data;
        this.setState({
          temperature: main.temp,
          humidity: main.humidity,
          description: weather[0].description,
          error: "",
        });
      } else {
        this.setState({
          error: "City not found",
        });
      }
    } catch (error) {
      console.log(error);
      this.setState({
        error: "An error occurred",
      });
    }
  };

  handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    this.setState({ input: value });
  };

  handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.getData();
  };

  render() {
    const { input, temperature, humidity, description, error } = this.state;
    const temperatureCelsius = temperature - 273.15; // Convert temperature from Kelvin to Celsius

    return (
      <div className="bg-white p-8">
        <form onSubmit={this.handleSubmit} className="flex gap-4">
          <input
            type="text"
            className="h-10 outline-none border-b border-black text-black text-lg px-2"
            value={input}
            onChange={this.handleInput}
            placeholder="Enter city"
          />
          <button type="submit" className="h-10 px-4 bg-black text-white">
            Get Weather
          </button>
        </form>
        {error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          temperature && (
            <div className="mt-8">
              <h2 className="text-2xl font-bold">Weather Information</h2>
              <p className="text-lg">
                Temperature: {temperatureCelsius.toFixed(2)} °C
              </p>
              <p className="text-lg">Humidity: {humidity}%</p>
              <p className="text-lg">Description: {description}</p>
            </div>
          )
        )}
      </div>
    );
  }
}

export default Weather;
