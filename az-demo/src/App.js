import logo from './logo.svg';
import './App.css';

function App() {
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
        <h1>Hello User..!</h1>
        <button onClick={callApi1}>Call API1</button>
        <button onClick={callApi2}>Call API2</button>
      </header>
    </div>
  );
}

async function callApi1() {
  fetch('https://par2ashishazure118oct.azurewebsites.net/api/webapi1', { method: 'GET' })
    .then(data => data.json()) // Parsing the data into a JavaScript object
    .then(json => alert(JSON.stringify(json))) // Displaying the stringified data in an alert popup
}

async function callApi2() {
  fetch('https://par2ashishazure118octwebapi2.azurewebsites.net/api/webapi2', { method: 'GET' })
    .then(data => data.json()) // Parsing the data into a JavaScript object
    .then(json => alert(JSON.stringify(json))) // Displaying the stringified data in an alert popup
}

export default App;
