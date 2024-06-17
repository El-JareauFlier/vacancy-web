import mongoose from 'mongoose';

//maak een database schema aan, zodat in de database een plek komt voor
//de titel van de taak, beschrijving, of het compleet is en wanneer het is 
//aangemaakt.
const taskSchema = new mongoose.Schema({
  proffesion: { type: String, required: true },

  companyname: { type: String, required: true },
  description: { type: String, required: true },

  duration: { type: String, required: true },
  location: { type: String, required: true }, 

  stipend: { type: String, required: false },
  createdAt: { type: Date, default: Date.now },

  img: { type: String, required: true },

});

const Task = mongoose.model('Task', taskSchema);

export default Task;