import React,{useState} from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import News from "./News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import './index.css'


const App= () => {
  const apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)

  return (
    <Router>
      <LoadingBar
            height={3}
            color='#f11946'
            progress={progress}/>
      <Navbar />
      <Switch>
        <Route exact path="/business"><News setProgress={setProgress} apiKey={apiKey} category="business" key="Business"/></Route>
        <Route exact path="/entertainment"><News setProgress={setProgress} apiKey={apiKey} category="entertainment" key="Entertainment"/></Route>
        <Route exact path="/general"><News setProgress={setProgress} apiKey={apiKey} category="general" key="General"/></Route>
        <Route exact path="/"><News setProgress={setProgress} apiKey={apiKey} category="" key="Home"/></Route>
        <Route exact path="/health"><News setProgress={setProgress} apiKey={apiKey} category="health" key="Health"/></Route>
        <Route exact path="/science"><News setProgress={setProgress} apiKey={apiKey} category="science" key="Science"/></Route>
        <Route exact path="/sports"><News setProgress={setProgress} apiKey={apiKey} category="sports" key="Sports"/></Route>
        <Route exact path="/technology"><News setProgress={setProgress} apiKey={apiKey} category="technology" key="Technology"/></Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
