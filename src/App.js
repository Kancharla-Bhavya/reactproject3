import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header.js';
import Footer from './footer.js';
import StateComponent from './statecom.js';
import Cards from './components/card.js';
import {BrowserRouter,Route} from 'react-router-dom';
import resume from './components/resume';
/*function App() {
  return (
    <div>
    <h1>GOOD evening</h1>
    <p>welcome all</p>
    <Header></Header>
    <Footer/>
    <StateComponent/>
    <h4>{57%34}</h4>

    <Head name="bhavya">
    <p>hello guys</p>
    </Head>
    </div>
  );
}

function Head(props){
  return(
    <div>
    <h2>this is head part {props.name}</h2>
    {props.children}
    </div>
    );
}*/
class App extends React.Component{
    render(){
        return(
            <div className="App">
            <BrowserRouter>
            <Route exact path="/" component={Cards}/>

            <Route exact path="/resume" component={resume}/>
            </BrowserRouter>
            </div>
            );
    }
}



export default App;
