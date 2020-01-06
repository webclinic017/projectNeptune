let url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=TWLO&interval=5min&apikey=XM6YR1VHVCMCA4E2`
let series = []

function fetcher(url) {
  fetch(url).then(
    response => response.json(),
    reason => Promise.reject(reason))
    .then(
      stockData => {
        let data = stockData["Time Series (Daily)"];
        for (let tick in data) {
          series.push([
            new Date(tick).getTime(),
            data[tick]['1. open'],
            data[tick]['2. high'],
            data[tick]['3. low'],
            data[tick]['4. close'],
            data[tick]['5. volume'],
          ]);
        }
      })
}

fetcher(url);

export default series;