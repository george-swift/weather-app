require('dotenv').config();

describe('Async function', () => {
  const mockWeatherReport = {
    data: {
      coord: { lon: 3.75, lat: 6.5833 },
      weather:
      [{
        main: 'Clouds',
        description: 'overcast clouds',
      }],
      main:
      {
        temp: 299.33,
        feels_like: 299.33,
        temp_min: 299.33,
        temp_max: 299.33,
        pressure: 1012,
        humidity: 66,
        sea_level: 1012,
      },
      visibility: 10000,
      wind: { speed: 3.23, deg: 232, gust: 4.53 },
      clouds: { all: 99 },
      dt: 1622539021,
      sys:
      {
        country: 'England',
        sunrise: 1622525320,
        sunset: 1622570242,
      },
      name: 'Manchester',
      timezone: 3600,
    },
  };

  let isFetchCalled = false;

  const mockFetch = jest.fn().mockImplementation((city) => {
    const url = `https://${process.env.WEATHER_URL}?q=${city}&appid=${process.env.API_KEY}`;
    expect(url).toContain(city);
    isFetchCalled = true;
    return Promise.resolve({
      json: () => Promise.resolve(mockWeatherReport),
    });
  });

  it('calls Open Weather API', () => mockFetch('Manchester')
    .then((response) => {
      expect(isFetchCalled).toBe(true);
      const data = response.json();
      expect(data).toBeInstanceOf(Promise);
      expect(data).resolves.toBe(mockWeatherReport);
    }));
});