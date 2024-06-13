import './App.css';
import Accordian from './components/Accordian/Accordian';
import ImageSlider from './components/ImageSlider/ImageSlider';
import RandomColor from './components/Random-color-generator/Random-color';
import StarRating from './components/StarRating/StarRating';
import LoadMore from './components/load-more-data/LoadMore';



function App() {
  return (
    <div className="App">
      {/* <Accordian />
      <RandomColor />
      <StarRating noOfStars={10} />
      <ImageSlider /> */}
      <LoadMore />
    </div>
  );
}

export default App;
