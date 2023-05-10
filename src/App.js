import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import TaskForm from './components/TaskForm';
import { useState } from 'react';

function App() {

 const [tasks, setTasks] = useState([]);
 const [filterTask, setFilterTask] = useState(null)
  // Create Task
  const createTask = function(value){
    console.log("Copy With Spread Operator", ... tasks);
    setTasks([... tasks, value]); // ... => permettent de copier un tableau ou un objet (spread operator) et rajoute les valeur dans le tableau sans ecraser les precedentes valeures
  };

  // Update Task

  const updateTask = function(index){
    const value = prompt(`Please enter your new task`);
    const copy = [ ... tasks];
   
    copy[index] = value;
    setTasks(copy);
  }

    // Delete Task

    const deleteTask = function(index){
      const copy = [ ... tasks];
      copy.splice(index, 1) // le 1 pour supprimer ou renommer (pour renommer = 1 + l'element a remplacer), le 0 pour ajouter un element à un index donné
      setTasks(copy);
    }
//  search tasks
    const searchTask = function (searchTerm) {
      const filter = tasks.filter(function (value){
        const valueLower = value.toLowerCase();
        const searchTermLower = searchTerm.toLowerCase();
        return valueLower.includes(searchTermLower)
      })
      setFilterTask(filter);
    }

    const resetSearch = function() {
      setFilterTask(null);
    }

    const data = filterTask || tasks
    

  return (
    <>
    <header className="bg-secondary py-2">
      <Container fluid className="p-0">
        <h1 className="text-white text-center">ToDo App</h1>
      </Container>
    </header>

    {/* Task Form */}
  <main className="container">
    <TaskForm searchTask={searchTask} createTask={createTask}/>

    {/* Display task */}
    <section className="mt-5">
      {filterTask ? (
        <button onClick={resetSearch} className="btn btn-primary">Reset</button>
      ) : null }

    {data.map(function (value, index){
      return ( 
      <div key={index} className="bg-secondary p-2 mb-3">
        <p className="text-white">
          # {index + 1 } - {value}
        </p>
      <div className="d-flex gap-2">
        <span onClick={()=> updateTask(index)} className= " btn text-bg-warning text-white p-2">Edit</span>

        <span onClick={()=> deleteTask(index)} className=" btn text-bg-danger text-white p-2">Delete</span>
      </div>
      </div>
      );
    })}

    {data.length === 0 && (<h2 className="text-danger fs-1"> Any task...</h2>)}
    </section>
  </main>
  </>
  );
}

export default App;
