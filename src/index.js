import React,{useEffect,useState} from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import useLocation from './useLocation';
/*
const App = () => {

    let lat;

    window.navigator.geolocation.getCurrentPosition(
        (position) => 
        { 
            lat = position ;
            console.log(position);
        },
        (err) => console.log(err) )


    return(
        <div>
            <h1> Latitude : {lat}  </h1>
        </div>
    )
}
*/

const App = () => {
   
    const [lat,errorMessage] = useLocation();
    let content; 

    if(errorMessage){
        content = <div> error message : {errorMessage} </div>
    }
    else if(lat) {
        content = <div> <SeasonDisplay lat={lat} /></div>
    }
    else{
        content  = <Spinner message="Please accept location request" />
    }

    return <div className="border red"> {content} </div>
}

// class App extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {lat :  null , errorMessage : ''};
//     }

//     componentDidMount() {
//         window.navigator.geolocation.getCurrentPosition(   
//             (position) => this.setState({lat : position.coords.latitude}) ,
//             (err) => this.setState({errorMessage : err.message}) )
//     }

//     renderContent(){
        
//         if(!this.state.errorMessage && this.state.lat)
//         {
//             return <SeasonDisplay latitude = {this.state.lat} />
//         }
//         else if(this.state.errorMessage && !this.state.lat)
//         {
//             return <div> Error Message :  {this.state.errorMessage} </div>
//         }
//         else if(!this.state.errorMessage && !this.state.lat)
//         {
//             return <div> <Spinner message="Please accept location request" /> </div>
//         }
//     }
//     render() {
//         return  <div className="border red"> { this.renderContent() } </div>
//     }
// }

ReactDOM.render(
    <App />, 
    document.querySelector('#root') );
