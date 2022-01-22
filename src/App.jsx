import TopCard from "./components/TopCard";
import MiddleCard from "./components/MiddleCard";
import BottomCard from "./components/BottomCard";
import "./styles/app.scss";

function App() {
  return (
    <div className="App">
      <TopCard className="top-card" />
      <div>
        <MiddleCard className="middle-card" />
        <BottomCard className="bottom-card" />
      </div>
    </div>
  );
}
export default App;
