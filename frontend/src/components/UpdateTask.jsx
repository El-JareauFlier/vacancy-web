import React, { useState } from 'react';

const UpdateTask = ({ taskId, onUpdateTask }) => {
  // Staat om het bijgewerkte titel en beschrijving op te slaan
  const [updatedTitle, setUpdatedTitle] = useState('');
  const [updatedDescription, setUpdatedDescription] = useState('');

  // Functie om de bijgewerkte taak naar de bovenliggende component te verzenden
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Bel de onUpdateTask-functie en geef het taak-ID en bijgewerkte gegevens door
      await onUpdateTask(taskId, { title: updatedTitle, description: updatedDescription });
      // Reset de inputvelden na het verzenden van de update
      setUpdatedTitle('');
      setUpdatedDescription('');
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  return (
    <div>
      <h2>Update Task</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          {/* Inputveld voor het bijgewerkte titel */}
          <input
            type="text"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Description:</label>
          {/* Textareaveld voor de bijgewerkte beschrijving */}
          <textarea
            value={updatedDescription}
            onChange={(e) => setUpdatedDescription(e.target.value)}
          />
        </div>
        {/* Knop om de update in te dienen */}
        <button type="submit">Update Task</button>
      </form>
    </div>
  );
};

export default UpdateTask;