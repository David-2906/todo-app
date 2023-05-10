import { Fragment, useState } from 'react';

export default function TaskForm(props) {
const [textEntered, setTextEntered] = useState("");

    const onChangerHandler = function (event) {
        setTextEntered(event.target.value); // permet de recuperer la valeur de l'input
    };

    const submitHandler = function(event){
        event.preventDefault();
        props.createTask(textEntered);
        setTextEntered('');
    }

  return (
   <Fragment>
    <form onSubmit={submitHandler} className="my-4 form-floating">
        <input type="text" name="task" className="form-control" onChange={onChangerHandler}/>
        <label htmlFor="task">Enter a task</label>
        {/* <input type="submit" value="Save"/> */}
    </form>
    <div className="d-grid gap-2 d-md-block">
        <button onClick={submitHandler} type="button" className="btn py-2 btn-primary me-md-3">Add</button>
        <button onClick={() => props.searchTask(textEntered)} type="button" className="btn py-2 btn-secondary">Get Tasks</button>
    </div>
    </Fragment>
  )
}

// rfc