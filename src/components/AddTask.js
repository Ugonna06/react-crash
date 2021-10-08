import { useState } from "react";
import Button from "./Button"
import FormElementsInput from "./FormElementsInput"

const AddTask = (props) => {
    let {onSubmit} = props;

    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    const SubmitProcess = (e) => {
        e.preventDefault()

        if(!text){
            alert("please input a task!!!");
            return
        }
        onSubmit({text,day,reminder});

        setText('');
        setDay('');
        setReminder(false);
    }

    return (
        <div className = "add-form">
            <FormElementsInput classstyle="form-control" type="text" label="Task" placeholder="Add text" value={text} onChange ={(e)=>setText(e.target.value)}/>
            <FormElementsInput classstyle="form-control" type="text" label="Day & Time" placeholder="Day & Time" value={day} onChange ={(e)=>setDay(e.target.value)} />
            <FormElementsInput classstyle="form-control form-control-check" type="checkbox" label="Set Reminder" value={reminder} checked={reminder} onChange ={(e)=>setReminder(e.currentTarget.checked)} />

            <Button classstyle="btn btn-block" text='Save text' color='blue' onClick={(e) => SubmitProcess(e)}/>
        </div>
    );
}

export default AddTask
