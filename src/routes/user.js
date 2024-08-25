const express = require("express");
const userSchema = require("../model/user");
router = express.Router();

// endPoint create user
router.post("/user", (req, res) => {
  const user = userSchema(req.body);
  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}))
})

// endPoint consultar usuarios
router.get("/user", (req, res) => {
  userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}))
})

//endPoit user por id
router.get("/user/:id", (req, res) => {
  const {id} = req.params
  userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}))
})

//endPoit actualizar user
router.put("/user/:id", (req, res) => {
  const {id} = req.params
  const {name, age, email} = req.body
  userSchema
    .updateOne({_id: id}, {$set:{name, age, email}})
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}))
})

//eliminar user
router.delete("/user/:id", (req, res) => {
  const {id} = req.params
  userSchema
    .deleteOne({_id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}))
})




module.exports = router


