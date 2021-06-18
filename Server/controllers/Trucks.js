import CargoTransport from "../models/TruckModel.js";
import mongoose from "mongoose";

export const getTrucks = async (req, res) => {
  try {
    if (!req.userId) return res.json({ message: "Unauthenticated!" });
    console.log("id:", req.userId);
    //const trucks = await CargoTransport.findById(req.userId);
    const trucks = await CargoTransport.find({ userId: req.userId });
    // const trucks = await CargoTransport.find();
    console.log("trucks", trucks);
    res.status(200).json(trucks);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createTruck = async (req, res) => {
  const truck = {
    company:req.body.company,
      product:req.body.product,
      quantity:req.body.quantity,
      source:req.body.source,
      destination:req.body.destination,
      userId:req.userId
  };
  console.log(truck);
  const newTruck = new CargoTransport(truck);
  try {
    await newTruck.save();

    res.status(201).json(newTruck);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateTruck = async (req, res) => {
  const { id: _id } = req.params;
  const truck = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("Not truck With that id");

  const updatedTruck = await CargoTransport.findByIdAndUpdate(_id, truck, {
    new: true,
  });
  //  {...truck,_id}
  res.json(updatedTruck);
};

export const deleteTruck = async (req, res) => {
  const { id: _id } = req.params;
  console.log(req.params);
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("Not Truck With that id");

  await CargoTransport.findByIdAndRemove(_id);
  // console.log("Deleted")
  res.json({ message: "Post Removed Successfully!!👍" });
};

export const getTruck = async (req, res) => {
  try {
    const userTrucks = await CargoTransport.find({ userId: req.userId });
    console.log(userTrucks);
    res.status(200).json(userTrucks);
  } catch (error) {
    console.log(error);
  }
};
