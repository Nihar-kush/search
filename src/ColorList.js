import React, { useEffect, useState } from "react";

export default function ColorList({ colors, setColors, input, setInput }) {
  const colorOptions = [
    { id: 1, label: "Ocean", txtColor: "#5FD2E7", bgColor: "#E5F8FB" },
    { id: 2, label: "Blue", txtColor: "#2684FF", bgColor: "#DEEBFF" },
    { id: 3, label: "Purple", txtColor: "#5243AA", bgColor: "#EDECF6" },
    { id: 4, label: "Red", txtColor: "#FF9881", bgColor: "#FFEEEA" },
    { id: 5, label: "Orange", txtColor: "#FFA439", bgColor: "#FFF3E5" },
    { id: 6, label: "Green", txtColor: "#36B37E", bgColor: "#EAF7F2" },
  ];
  const [currentColors, setCurrentColors] = useState(colorOptions);
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    setCurrentColors(
      colorOptions.filter((color) => {
        let index = colors.findIndex((item) => item.id === color.id);
        if (index !== -1) {
          return false;
        } else return true;
      })
    );
  }, [colors]);

  useEffect(() => {
    if (input) {
      setSearchResults(
        currentColors.filter((color) => {
          let res = color.label.toLowerCase().includes(input);
          return res;
        })
      );
    }
  }, [input]);
  const arrToUse = input ? searchResults : currentColors;
  return (
    <div className="ColorList">
      {arrToUse.length === 0 ? (
        <div
          style={{
            backgroundColor: "white",
            color: "#5c5b5b",
            width: "100%",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "10px",
          }}
        >
          No results
        </div>
      ) : (
        arrToUse.map((color) => {
          return (
            <ListItem
              key={color.id}
              color={color}
              colors={colors}
              setColors={setColors}
              setInput={setInput}
            />
          );
        })
      )}
    </div>
  );
}

function ListItem({ color, setColors, colors, setInput }) {
  const [activeColor, setActiveColor] = useState(false);

  return (
    <div
      onMouseEnter={() => setActiveColor(true)}
      onMouseLeave={() => setActiveColor(false)}
      style={{
        backgroundColor: activeColor ? color.bgColor : "white",
        color: color.txtColor,
        width: "100%",
        height: "40px",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        padding: "10px",
      }}
      onClick={() => {
        setColors([...colors, color]);
        setInput("");
      }}
    >
      {color.label}
    </div>
  );
}
