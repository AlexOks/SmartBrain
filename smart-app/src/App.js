import React, {Component} from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Rank from './components/Rank/Rank';
import './App.css';



const app = new Clarifai.App({
 apiKey: 'e6d76fd02a2f459f8e0f2328b98e17a1'
});
const particlesOptions = {
  particles: {
    number: {
      value: 230,
      density: {
        enable: true,
        value_area: 800
      },
    },
    color:{
      value: '#1e40af'
    },
    line_linked: {
      color: '#000'
    }
  }
}
class App extends Component {
  constructor () {
    super();
    this.state = {
      input: '',
      imageUrl: '',
    }
  }
  onInputChange = (event) => this.setState({input: event.target.value});

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input})
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input).then(
    function(response) {
     console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
    },
    function(err) {
      // there was an error
    }
  );

  }
  render () {
  return (
    <div className="App">
    <Particles className = 'particles'
    params={particlesOptions}
    />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm  onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
      <FaceRecognition imageUrl={this.state.imageUrl} />
    </div>
  );
  }
}

export default App;
