import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';
import AddIcon from '@mui/icons-material/Add'
import { useDispatch } from 'react-redux';
import { addTodo } from '../actions/todoActions';

const TaskInput = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    dispatch(addTodo({ id: Date.now(), text: task }));
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={8}>
          <TextField
            variant="outlined"
            label="Enter a task..."
            value={task}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Button
            variant="contained"
            color="primary"
            endIcon={<AddIcon/>}
            fullWidth
            type="submit"
          >
            Add Task
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default TaskInput;
