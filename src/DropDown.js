import React from "react";
import { HiOutlineChevronDown } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

export default function DropDown({
  setActive,
  colors,
  setColors,
  toggleActive,
  input,
  setInput,
}) {
  return (
    <div className="search">
      <div className="searchItemContainer">
        {colors.map((color) => (
          <SearchItem key={color.id} color={color} setColors={setColors} />
        ))}
        <input
          placeholder={colors.length <= 0 ? "Select..." : ""}
          type="text"
          onChange={(e) => {
            setInput(e.target.value.toLowerCase());
          }}
          value={input}
          onFocus={() => setActive(true)}
        />
      </div>
      <div className="searchIcons">
        {colors.length !== 0 && (
          <IoMdClose className="icon" onClick={() => setColors([])} />
        )}
        <span
          style={{
            height: "100%",
            borderRight: "1px solid #868686",
            marginInline: "10px",
          }}
        ></span>
        <HiOutlineChevronDown className="icon" onClick={toggleActive} />
      </div>
    </div>
  );
}

function SearchItem({ color, setColors }) {
  return (
    <div
      className="SearchItem"
      style={{ backgroundColor: color.bgColor, color: color.txtColor }}
    >
      <span>{color.label}</span>
      <IoMdClose
        className="icon"
        onClick={() => {
          setColors((prev) =>
            prev.filter((item) => {
              return item.label !== color.label;
            })
          );
        }}
      />
    </div>
  );
}
