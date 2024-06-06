import Task from '../models/Task.js';
const mongoose = require('mongoose');

export const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createTask = async (req, res) => {
  const task = new Task({
    title: req.body.title,
    description: req.body.description
  });

  try {
    const newTask = await task.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteTask = async (req, res) => {
  const { id } = req.params; // Haal het taak-ID op uit de URL-parameter

  try {
    await Task.findByIdAndDelete(id); // Zoek de taak op basis van het ID en verwijder deze

    res.status(200).json({ message: 'Task deleted successfully' }); // Retourneer een succesbericht als de taak succesvol is verwijderd
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' }); // Als er een fout optreedt, retourneer een 500-fout
  }
};

export const updateTask = async (req, res) => {
  const { id } = req.params; // Haal het taak-ID op uit de URL-parameter

  try {
    let task = await Task.findById(id); // Zoek de taak op basis van het ID
    if (!task) {
      return res.status(404).json({ error: 'Task not found' }); // Als de taak niet wordt gevonden, retourneer een 404-fout
    }

    task = await Task.findByIdAndUpdate( // Update de taak met de gegevens uit het verzoeklichaam
      id, // Zoekopdracht op basis van het ID
      {
        ...req.body, // Gebruik de gegevens uit het verzoeklichaam om de taak te updaten
      },
      { new: true } // Geeft de bijgewerkte taak terug in plaats van de oude
    );

    res.status(200).json(task); // Retourneer de bijgewerkte taak als JSON met statuscode 200
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' }); // Als er een fout optreedt, retourneer een 500-fout
  }
};

module.exports = {
  getAllTasks,
  createTask,
  deleteTask,
  updateTask
};