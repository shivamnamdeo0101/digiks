import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./routes/home/Home";
import Header from "./routes/comp/Header";
import Footer from "./routes/comp/Footer";
import About from "./routes/about/About";
import Contact from "./routes/contact/Contact";
import Work from "./routes/work/Work";
import Service from "./routes/services/Service";
import "./App.css";
function App() {
  return (

    <Router>
    
      <div className="App">
          <Header />
            <Route exact path = "/" component={Home} />
            <Route exact path = "/about" component={About} />
            <Route exact path = "/contact" component={Contact} />
            <Route exact path = "/work" component={Work} />
            <Route exact path = "/service" component={Service} />
            <Route exact path = "/service/:id" component={Service} />

          <Footer />
      </div>
    
    </Router>
  );
}

export default App;
