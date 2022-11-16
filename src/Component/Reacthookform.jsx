import React from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import InputAdornment from "@mui/material/InputAdornment";

import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import style from "./Reacthookform.module.css";
import { Stack } from "@mui/system";

export const Reacthookform = () => {
  const alphanumeric = /^[A-Za-z]+$/i;
  // const numeric = /^[0-9]+$/i;
  const initialvalues = {
    patientname: "",
    dateofbirth: "",
    appointdate: "",
    Consultation_Charge: "",
    doctors: "",
    height: "",
    weight: "",
    bloodpressure: "",
    temperature: "",
  };
  const schema = yup
    .object({
      patientname: yup
        .string()
        .required("Patient Name is required")
        .matches(alphanumeric, "Please Enter Patient Name in Alphabets  "),
      dateofbirth: yup
        .date()
        .typeError("Please Enter Date of Birth")
        .required(),
      appointdate: yup
        .date()
        .typeError("Please Enter Appointment Date ")
        .required("Appointdate Date is required"),
      Consultation_Charge: yup
        .number()
        .typeError("Consultation Charge is not Empty and Must be in Number")
        .required(),
      doctors: yup.string().required("Please Select Doctor Name"),
      height: yup.number().typeError("Height Must be in Number").required(),
      weight: yup.number().typeError("Weight Must be in Number").required(),
      bloodpressure: yup
        .number()
        .typeError("Blood Pressure Must be a Number")
        .required(),
      temperature: yup
        .number()
        .typeError("Temperature Must be a Number")
        .required(),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: initialvalues,
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const submitform = (data) => {
    const currentdate = new Date();

    if (data.tnc !== true) {
      alert("Please accept Terms and Conditions*");
    } else if (data.dateofbirth > currentdate) {
      alert("Please Select Correct Date of Birth");
    } else if (data.appointdate < currentdate) {
      alert("Appointment Date Must be Future");
    } else {
      alert("Registered Successfully ");
    }
    console.log(data);
  };
  return (
    <div className={style.maindiv}>
      <Paper elevation={3}>
        <form onSubmit={handleSubmit(submitform)}>
          <Typography variant="h5">Patient consultation Form</Typography>
          <br />
          <TextField
            name="patientname"
            label="Patient Name"
            {...register("patientname")}
            className={style.dateid}
          />
          <p className={style.error}>{errors.patientname?.message}</p>

          <Typography> Date of Birth </Typography>
          <div>
            <TextField
              type="date"
              name="dateofbirth"
              className={style.dateid}
              {...register("dateofbirth")}
            />
            <p className={style.error}>{errors.dateofbirth?.message}</p>
          </div>
          <br />
          <FormControl>
            <FormLabel>Gender</FormLabel>
            <RadioGroup
              row
              aria-label="gender"
              name="gender"
              defaultValue="female"
            >
              <FormControlLabel
                value="female"
                control={<Radio {...register("gender")} />}
                label="Female"
              />
              <FormControlLabel
                value="male"
                control={<Radio {...register("gender")} />}
                label="Male"
              />
              <FormControlLabel
                value="other"
                control={<Radio {...register("gender")} />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
          <Typography>Appointment Date</Typography>
          <TextField
            type="date"
            name="appointdate"
            {...register("appointdate")}
            className={style.dateid}
          />
          <p className={style.error}>{errors.appointdate?.message}</p>
          <br />
          <TextField
            label="Doctors"
            select
            name="doctors"
            className={style.selectid}
            {...register("doctors")}
          >
            <MenuItem value="Aikenhead">Dr.Aikenhead</MenuItem>
            <MenuItem value="Abhiram">Dr.Abhiram</MenuItem>
            <MenuItem value="Manu">Dr.Manu</MenuItem>
            <MenuItem value="Harish">Dr.Harish</MenuItem>
          </TextField>
          <br />
          <p className={style.error}>{errors.doctors?.message}</p>
          <br />
          <div>
            <TextField
              type="number"
              name="Consultation_Charge"
              label="Consultation Charge"
              className={style.dateid}
              {...register("Consultation_Charge")}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">$</InputAdornment>
                ),
              }}
            />
            <p className={style.error}>{errors.Consultation_Charge?.message}</p>
          </div>

          <br />
          <Stack direction="row" spacing={1}>
            <div>
              <TextField
                type="number"
                name="height"
                label="Height"
                {...register("height")}
                defaultValue={0}
              />
              <p className={style.error}>{errors.height?.message}</p>
            </div>

            <div>
              <TextField
                type="number"
                name="bloodpressure"
                label="Blood Pressure"
                {...register("bloodpressure")}
                defaultValue={0}
              />
              <p className={style.error}>{errors.bloodpressure?.message}</p>
            </div>

            <div>
              <TextField
                type="number"
                name="weight"
                label=" Weight"
                {...register("weight")}
                defaultValue={0}
              />
              <p className={style.error}>{errors.weight?.message}</p>
            </div>

            <div>
              <TextField
                type="number"
                name="temperature"
                label="Temperature "
                {...register("temperature")}
                defaultValue={0}
              />
              <p className={style.error}>{errors.temperature?.message}</p>
            </div>
          </Stack>
          <FormGroup
            error={Boolean(errors.tnc)}
            style={{ display: "block", marginTop: "10px" }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  name="tnc"
                  {...register("tnc", {
                    required: "Please Agree Our Terms and Conditions",
                  })}
                />
              }
              label="I have read and agree to the Terms *"
            />
          </FormGroup>

          <Button type="submit" variant="contained">
            REGISTER
          </Button>
          <br />
        </form>
      </Paper>
    </div>
  );
};
