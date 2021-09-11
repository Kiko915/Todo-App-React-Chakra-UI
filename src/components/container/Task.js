import React, { useState, useEffect, useRef } from 'react';
import Containers from '../presentational/Container';
import Form from '../presentational/Form';
import Lists from './Lists';
import Alerts from '../presentational/Alerts';

//TODO: Add localStorage feature to save our Tasks!
function Task() {
    const [val, setVal] = useState('');
    const [tasks, setTasks] = useState([]);
    const [open, setOpen] = useState(false);
    const cancelRef = useRef(null);

    useEffect(() => {
        console.log(tasks);
    }, [tasks])

    const changeVal = value => {
        setVal(value);
    }

    const submitTask = () => {
        // just for sure!
        if(!val) {
            return;
        }
        setTasks(prevTasks => {
            setVal('');
            return ([
                {
                    text: val,
                    id: Math.floor(Math.random() * 100000)
                },
                ...prevTasks
            ])
        });
    }

    const submitOnEnter = ({ charCode }) => {
        if(charCode === 13) {
            submitTask();
            return;
        }
    }

    const delItem = (id) => {
        const numId = Number(id)
        console.log(numId);
        setTasks(prevTasks => prevTasks.filter(task => numId !== task.id));
    }

    const onClose = (id) => {
        setOpen(false);
        if(id === 'destructNow') {
            setTasks([]);
            return;
        }

    }

    const openAlert = () => {
        setOpen(true);
    }

    return (
        <>
            <Containers>
                <Form values={val} changerState={changeVal} handleSubmit={submitTask} handleKeyPress={submitOnEnter} />
                <Lists data={tasks} delItem={delItem} openAlert={openAlert} />
            </Containers>
            <Alerts isOpen={open} cancelRef={cancelRef} onClose={onClose} />
        </>
    )
}

export default Task;
