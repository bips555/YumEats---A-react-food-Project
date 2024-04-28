import Categories from "./components/Categories.js";
import Delivery from "./components/Delivery.js";
import Featured from "./components/Featured.js";
import Footer from "./components/Footer.js";
import Meal from "./components/Meal.js";
import NewsLetter from "./components/NewsLetter.js";
import TopNav from "./components/TopNav.js";
import TopPicks from "./components/TopPicks.js";

function App() {
  return (
   <>
<div className="App">
  <TopNav/>
  <Featured/>
  <Delivery/>
  <TopPicks/>
  <Meal/>
<Categories/>
<NewsLetter/>
<Footer/>
</div>
   </>
  );
}

export default App;
