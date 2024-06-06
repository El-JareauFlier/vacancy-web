import express from 'express';
import { getAllTasks, createTask, deleteTask, updateTask } from '../controllers/taskController.js'

const router = express.Router();

// Endpoint om alle taken op te halen
router.get('/', getAllTasks);

// Endpoint om een nieuwe taak toe te voegen
router.post('/', createTask);

//Eindpoint om een taak te verwijderen
router.delete('/:id', deleteTask);

//Eindpoint om een taak te updaten
router.put('/:id', updateTask);


export default router;