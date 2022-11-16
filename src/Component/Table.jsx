import React from "react";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import style from "./Table.module.css";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Stack } from "@mui/system";
import { deleterec } from "../Redux/action";

export const Tabledata = () => {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const deleterow = (el) => {
    console.log(el);
    const payload = {
      el,
    };
    dispatch(deleterec(payload));
  };
  return (
    <TableContainer>
      <Table sx={{ width: "90%" }}>
        <TableHead className={style.head}>
          <TableRow>
            <TableCell>Printer#</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>WorkStation</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        {data.map((rec) => (
          <TableBody>
            <TableRow>
              <TableCell>{rec.recid}</TableCell>
              <TableCell>{rec.name}</TableCell>
              <TableCell>{rec.stationnum}</TableCell>
              <TableCell>{rec.prtype}</TableCell>
              <TableCell>
                <Stack spacing={0} direction="row">
                  <Button onClick={() => deleterow(rec.recid)}>
                    {" "}
                    <DeleteIcon />
                  </Button>{" "}
                  <Button>
                    <ModeEditIcon />
                  </Button>
                </Stack>
              </TableCell>
            </TableRow>
          </TableBody>
        ))}
      </Table>
    </TableContainer>
  );
};
