import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Stack } from "@mui/system";
import style from "./Table.module.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Navbar = () => {
  return (
    <Stack direction="row">
      <div
        className={style.navid}
        style={{
          width: "90%",
          height: "70px",
          backgroundColor: "blue solid ",
        }}
      >
        <div style={{ display: "flex" }}>
          <MenuIcon
            sx={{
              color: "white",
              marginTop: "7px",
              // border: "1px solid red",

              fontSize: "60px",
            }}
          />

          <img
            width="120px"
            height="70px"
            src="labgen-trans.png"
            marginTop="20%"
          />

          <AccountCircleIcon
            sx={{
              marginLeft: "80%",
              marginTop: "7px",
              color: "white",
              fontSize: "60px",
            }}
          />
        </div>
      </div>
    </Stack>
  );
};

export default Navbar;
