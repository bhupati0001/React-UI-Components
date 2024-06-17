import './App.css';
import Accordian from './components/Accordian/Accordian';
import ImageSlider from './components/ImageSlider/ImageSlider';
import RandomColor from './components/Random-color-generator/Random-color';
import Menu from './components/RecursiveMenu/Menu';
import StarRating from './components/StarRating/StarRating';
import Test from './components/Test/Test';
import LoadMore from './components/load-more-data/LoadMore';
import { menuData } from './components/RecursiveMenu/menuData';
import { ThemeProvider, ThemeSwitcher } from './contexts/themeContext/ThemContextProvider'



function App() {
  return (
    <div className="App">
      {/* <Accordian />
      <RandomColor />
      <StarRating noOfStars={10} />
      <ImageSlider />
      <LoadMore />
      <Menu data={menuData} /> */}
      <ThemeProvider>
        <div>

          <ThemeSwitcher />
        </div>
      </ThemeProvider>
      {/* <Test /> */}
    </div>
  );
}

export default App;
