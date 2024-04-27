import Delivery from "./components/Delivery.js";
import Featured from "./components/Featured.js";
import Meal from "./components/Meal.js";
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
</div>
   </>
  );
}

export default App;
