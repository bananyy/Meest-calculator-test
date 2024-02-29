import React, { useState } from "react";
import Switch from "react-switch";

const SwitchBar = ({ onChange }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (checked) => {
    setChecked(checked);
    onChange(checked ? "in" : "cm");
  };

  return (
    <Switch
      checked={checked}
      onChange={handleChange}
      offColor="#99A4AF"
      onColor="#99A4AF"
      offHandleColor="#ffffff"
      onHandleColor="#ffffff"
      handleDiameter={30}
      height={30}
      width={60}
      borderRadius={15}
      uncheckedIcon={
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            fontSize: 15,
            color: "#ffffff",
          }}
        >
          <p>in</p>
        </div>
      }
      checkedIcon={
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            fontSize: 15,
            color: "#ffffff",
          }}
        >
          <p>cm</p>
        </div>
      }
      uncheckedHandleIcon={
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            fontSize: 15,
            color: "#99A4AF",
          }}
        >
          <p>cm</p>
        </div>
      }
      checkedHandleIcon={
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            fontSize: 15,
            color: "#99A4AF",
          }}
        >
          <p>in</p>
        </div>
      }
      className="react-switch"
      id="small-radius-switch"
    />
  );
};

export default SwitchBar;
