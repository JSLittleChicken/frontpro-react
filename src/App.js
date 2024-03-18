import React from "react";
import SmileList from './components/SmileList/SmileList'

const smileList = [
  {
    id: 1,
    symbol: "😀"
  },
  {
    id: 2,
    symbol: "😁"
  },
  {
    id: 3,
    symbol: "😅"
  }
]

function App (props) {
  return (
    <div className="App">
      <SmileList smileList={smileList}/>
    </div>
  );
}

export default App;
