import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
import { createTruck, updateTruck } from "../../redux/actions/trucks";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const Form = ({ currentId, setCurrentId }) => {
  const classes = useStyles();
  const [truckData, setTrucData] = useState({
    company: "",
    product: "",
    quantity: "",
    source: "",
    destination: "",
  });
  const truck = useSelector((state) =>
    currentId ? state.trucks.find((truck) => truck._id === currentId) : null
  );
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));

  useEffect(() => {
    if (truck) setTrucData(truck);
  }, [truck]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(
        updateTruck(currentId, { ...truckData, name: user?.result?.name })
      );
    } else {
      dispatch(createTruck({ ...truckData, name: user?.result?.name }));
    }
    clear();
  };

  const clear = () => {
    setCurrentId(null);
    setTrucData({
      company: "",
      product: "",
      quantity: "",
      source: "",
      destination: "",
    });
  };

  return (
    <form
      className={`${classes.root} form`}
      noValidate
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <div>
        <TextField
          required={true}
          label="Company"
          placeholder="company"
          multiline
          variant="outlined"
          value={truckData.company}
          onChange={(e) =>
            setTrucData({ ...truckData, company: e.target.value })
          }
        />
        <TextField
          required={true}
          label="Product"
          placeholder="product"
          multiline
          variant="outlined"
          value={truckData.product}
          onChange={(e) =>
            setTrucData({ ...truckData, product: e.target.value })
          }
        />
        <TextField
          required={true}
          label="Quantity"
          placeholder="quantity"
          multiline
          variant="outlined"
          value={truckData.quantity}
          onChange={(e) =>
            setTrucData({ ...truckData, quantity: e.target.value })
          }
        />
        <TextField
          required={true}
          label="Source"
          placeholder="source"
          multiline
          variant="outlined"
          value={truckData.source}
          onChange={(e) =>
            setTrucData({ ...truckData, source: e.target.value })
          }
        />

        <TextField
          required={true}
          label="Destination"
          placeholder="Destination"
          multiline
          variant="outlined"
          value={truckData.destination}
          onChange={(e) =>
            setTrucData({ ...truckData, destination: e.target.value })
          }
        />
      </div>
      <Button type="submit" variant="outlined" color="primary">
        <b className="Icons">SAVE</b>
      </Button>
    </form>
  );
};
export default Form;
