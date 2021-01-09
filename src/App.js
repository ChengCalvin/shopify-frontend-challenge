import "./App.css";

import Header from "./components/Header/Header";
import SearchPage from "./components/Pages/SearchPage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />

      <SearchPage />

      <Footer />
    </div>
  );
}

export default App;
