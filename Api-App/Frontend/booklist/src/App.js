import './App.css';
import NavBar from './components/NavBar';


function App() {
  return (
    <>
      <body>
        <div class="nav">
          <NavBar />
        </div>
        <footer class="border-top footer text-muted">
          <div class="container">
            &copy; 2024 - Book - Melikov
          </div>
        </footer>
      </body>
    </>
  );
}

export default App;