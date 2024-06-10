import "./App.css";
import Canvas from "containers/Canvas";
import CoordinateList from "components/CoordinateList";
import { useState } from "react";
import { ZONES } from "zones";
const init = {
  pieceId: 0,
  zoneId: 0,
  coordinates: `[[0, 0],[0, 0],[0, 0]]`,
};
function App() {
  const [rows, setRows] = useState([]);
  const [pieceData, setPieceData] = useState(init);

  const addPiece = (e) => {
    e.preventDefault();
    const _rows = [...rows, pieceData].sort((a, b) => a.pieceId - b.pieceId);
    setRows(_rows);
    setPieceData(init);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPieceData({
      ...pieceData,
      [name]: value,
    });
  };

  return (
    <div className="App">
      <Canvas />
      <form onSubmit={addPiece}>
        <input
          type="text"
          name="coordinates"
          size={100}
          height={20}
          value={pieceData.coordinates}
          onChange={handleInputChange}
        ></input>
        <input
          type="text"
          name="pieceId"
          placeholder="0"
          value={pieceData.pieceId}
          onChange={handleInputChange}
        ></input>
        <select
          name="zoneId"
          value={pieceData.zoneId}
          onChange={handleInputChange}
        >
          <option value="">Select a zone</option>
          {Array.from({ length: 20 }, (_, i) => (
            <option key={i} value={i}>
              {ZONES[i].nameKr}
            </option>
          ))}
        </select>
        <button type="submit">조각 추가</button>
        {/* <Button name="조각 추가" type={"submit"}></Button> */}
      </form>
      <CoordinateList list={rows}></CoordinateList>
    </div>
  );
}

export default App;

// input: 좌표목록, 조각아이디, zone아이디
// 버튼으로 입력..
// 목록에 보여주기
