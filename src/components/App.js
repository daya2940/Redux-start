import "./App.css";
import SongList from "./Songlist";
import SongDetail from './songDetail'
const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui  row">
        <div className="column eight wide">
          <SongList />
        </div>
        <div className="column eight wide">
          <SongDetail  />
        </div>
      </div>
    </div>
  );
};

export default App;
