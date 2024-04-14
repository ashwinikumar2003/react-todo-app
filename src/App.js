import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import { Container, Typography, Grid } from '@mui/material';
import './App.css';

function App() {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        React To-Do App
      </Typography>
      <TaskInput />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TaskList />
        </Grid>
        <Grid item xs={12} sm={6}>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
