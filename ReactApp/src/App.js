import logo from './logo.svg';
import './App.css';

function App() {

  const [posts, setPosts] = useState([]);
   useEffect(() => {
      fetch('http://localhost:8080/api/webapi1')
         .then((response) => response.json())
         .then((data) => {
            console.log(data);
            setPosts(data);
         })
         .catch((err) => {
            console.log(err.message);
         });
   }, []);
  return (
    <div className="App">
      <header className="App-header">
      <h1>Hello World</h1>
      </header>
    </div>
  );
}

export default App;
