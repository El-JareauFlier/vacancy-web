import React, { useEffect, useState } from 'react';

const Tasks = () => {
    // State om de taken op te slaan die worden opgehaald uit de backend
    const [tasks, setTasks] = useState([]);

    // useEffect-hook om de taken op te halen wanneer de component wordt geladen
    useEffect(() => {
        // Functie om taken op te halen vanuit de backend
        const fetchTasks = async () => {
            try {
                // Het uitvoeren van een GET-verzoek naar de backend om taken op te halen
                const response = await fetch('<http://localhost:4000/tasks>');
                // Controleren of het verzoek succesvol is
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                // Het omzetten van de ontvangen data naar JSON-formaat
                const data = await response.json();
                // Het bijwerken van de taken in de state met de ontvangen data
                setTasks(data);
            } catch (error) {
                // Het tonen van een foutmelding als er een fout optreedt bij het ophalen van taken
                console.error('Error fetching tasks:', error);
            }
        };

        // Het uitvoeren van de fetchTasks-functie wanneer de component is gemonteerd
        fetchTasks();
    }, []); // Lege array als tweede argument zorgt ervoor dat deze hook alleen wordt uitgevoerd bij de eerste render

    const handleDeleteTask = async (id) => {
        try {
            const response = await fetch(`http://localhost:4000/tasks/${id}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Failed to delete task');
            }

            // Verwijder de taak uit de lokale staat
            setTasks(tasks.filter(task => task._id !== id));
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };

    return (
        <>
                <h1>Tasks</h1>
            {/* Weergeven van de taken in een geordende lijst */}
            {tasks.map((task) => (
                // Elk taakitem wordt weergegeven in een section met een unieke sleutel
                <section className='Cards' key={task._id}>
                    <img src={task.img} alt={task.companyname} />

                    <article className='CardsContainer'>
                        <div>
                            <h2>{task.title}</h2>
                            <p className='CardFont'>{task.internship}</p>
                        </div>
                        <p>{task.description}</p>
                        <div className='CardFlex'>
                            <div>
                                <p className='CardFont'>{task.location}</p>
                                <p className='CardFont'>{task.profession}</p>
                            </div>
                            <a href='aboutUs.jsx'>Read more...</a>
                        </div>
                    </article>
                </section>
            ))}
        </>
    );
};

export default Tasks;