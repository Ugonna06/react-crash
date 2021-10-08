import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Header from './components/Header'
import About from './components/About'
import Footer from './components/Footer'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import * as tasksApis from './apiUrls/tasksApi'


const App = () => {
  const [tasks, setTasks] = useState([]);

  const [toggleAddForm, setToggleAddForm] = useState(false);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    }
    getTasks();
  }, [])

  ////Api function to fetch tasks
  const fetchTasks = async () => {
    try {
      let tasks = await tasksApis.GET_ALL_TASKS();
      return tasks;
    }
    catch (e) {
      throw (e);
    }
  }

  //open add form 
  const openForm = async () => {
    setToggleAddForm(!toggleAddForm);
  }
  //Adding a Task
  const addTask = async (newTasks) => {
    // debugger
    // const id = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;

    // const newTask = { id, ...newTasks };
    // setTasks([...tasks, newTask]);
    // setToggleAddForm(false);
    try {
      await tasksApis.ADD_TASK(newTasks);
      let tasks = await fetchTasks();
      setTasks(tasks);
    }
    catch (e) {
      throw (e);
    }
  }


  //Deleting a Task
  const deleteTask = async (id) => {
    try {
      await tasksApis.DELETE_TASK(id);
      let tasks = await fetchTasks();
      setTasks(tasks);
    }
    catch (e) {
      throw (e);
    }
    //setTasks(tasks.filter((task) => task.id !== id));
  }

  //Toggle Reminder
  const toggleReminder = async (id) => {
    ///normal If method with map
    // setTasks(tasks.map((task) => {
    //     if(task.id === id){
    //       task.reminder = !task.reminder;
    //     }
    //     return task;
    // }))

    //the straight up arrow func for record purposes, it is advisable for me to keep using this one to achieve mastery
    //setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))

    try {
      await tasksApis.TOGGLE_TASK_REMINDER(id)

      let tasks = await fetchTasks();
      setTasks(tasks);
    }
    catch (e) {
      throw (e);
    }
  }
  //&& is used to do a ternary operator that does not return an else
  return (
    <Router>
      <div className='container'>
        <Header title="Task Tracker" onOpen={openForm} buttonToggle={toggleAddForm} />
        <Route path="/" exact render={(props) =>(
          <>
            {toggleAddForm && (<AddTask onSubmit={addTask} />)}
            {tasks !== undefined && tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onRemind={toggleReminder} />) : ('No Tasks available!!!\nReload page!!!')}
          </>
        )} />
        <Route path='/about' component={About} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
