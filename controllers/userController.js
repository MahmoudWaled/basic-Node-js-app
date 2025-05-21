const User = require("../models/user");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

const getUserById = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};

const createUser = async (req, res) => {
  const { name , createdAt } = req.body;

  try {
    const newUser = new User({ name ,createdAt });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateUser = async (req, res) => {
    const id = req.params.id;
    const { name , createdAt } = req.body;
    try {
        const user = await User.findByIdAndUpdate(id, { name , createdAt }, { new: true });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }

};
const deleteUser = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await User.findByIdAndDelete(id);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        res.status(204).send();
    } catch (error) {
        res.status(400).json({ error: error.message });
    }

};
module.exports = { getAllUsers, createUser, updateUser, deleteUser , getUserById };
