import React from "react";
import { ZONES } from "zones";

const CoordinateList = ({ list }) => {
  return (
    <div>
      <h3>총 조각 개수 {list.length}</h3>
      <table border="1">
        <thead>
          <tr>
            <th>구역 이름</th>
            <th>조각 ID</th>
            <th>구역 ID</th>
            <th>좌표 목록</th>
            <th>coords</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(list) && list.length > 0 ? (
            list.map((row, index) => (
              <tr key={index}>
                <td>{ZONES[row.zoneId].nameKr}</td>
                <td>{row.pieceId}</td>
                <td>{row.zoneId}</td>
                <td>{row.coordinates}</td>
                <td>{row.coordinates.replace(/[\[\]]/g, "")}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
      <div>
        {Array.isArray(list) && list.length > 0
          ? list.map((e) => Object.values(e).join(",")).join("★")
          : " "}
      </div>
    </div>
  );
};

export default CoordinateList;
