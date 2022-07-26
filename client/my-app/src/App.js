import logo from "./logo.svg";
import "./App.css";

function App() {
  const sanityClient = require("@sanity/client");
  const client = sanityClient({
    projectId: "ckcnytzw",
    dataset: "production",
    apiVersion: "2021-03-25", // use current UTC date - see "specifying API version"!
    token:
      "skQSfJMJjXr4fnBBHoOUjJXvZthhbMuCZT32pzdywejxOFmRcYwbbpiNvECuCjmz48JweFrLIIMjI8HKyTcTjK1Bi5rbo1BEVxzGi4kamU6mcijZYVjr4cvhMPHG7dUtmQyuruNUe5Laq3w2rki7F1rbW0tCm64GIKMZy9S6eEZdkQs8iSag", // or leave blank for unauthenticated usage
    useCdn: true, // `false` if you want to ensure fresh data
  });

  client.fetch("*[_type == 'company']").then((companies) => {
    console.log("Our companies:");
    companies.forEach((company) => {
      console.log(company);
    });
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
