import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete'; 
import CheckIcon from '@mui/icons-material/Check';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo, markCompleted } from '../actions/todoActions';
import { styled } from '@mui/system';

const StyledListItem = styled(ListItem)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  backgroundColor: '#4fc3ff',
  borderRadius: theme.shape.borderRadius,
  marginBottom: theme.spacing(1),
  '&:hover': {
    backgroundColor: '',
  },
}));

const StyledButtonGroup = styled('div')(({ theme }) => ({
  flexShrink: 0,
  marginLeft: theme.spacing(1),
  '& button': {
    marginBottom: theme.spacing(1),
  }
}));

const TaskList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const activeTasks = todos.filter(todo => !todo.completed);
  const completedTasks = todos.filter(todo => todo.completed);

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleMarkCompleted = (id) => {
    dispatch(markCompleted(id));
  };

  return (
    <div>
      <h2>Active Tasks ({activeTasks.length})</h2>
      <List>
        {todos.map((todo) => (
          !todo.completed && (
            <StyledListItem key={todo.id}>
              <ListItemText
                primary={todo.text}
                primaryTypographyProps={{ noWrap: false }}
                style={{ textDecoration: todo.completed ? 'line-through' : 'none', flex: '1 0 auto' }}
              />
              <StyledButtonGroup>
                <Button
                  color='success'
                  variant='contained'
                  startIcon={<CheckIcon />}
                  onClick={() => handleMarkCompleted(todo.id)}
                ></Button>
                <Button
                  color='error'
                  variant='contained'
                  startIcon={<DeleteIcon />}
                  onClick={() => handleDelete(todo.id)}
                ></Button>
              </StyledButtonGroup>
            </StyledListItem>
          )
        ))}
      </List>
      <h2>Completed Tasks ({completedTasks.length})</h2>
      <List>
        {todos.map((todo) => (
          todo.completed && (
            <StyledListItem key={todo.id}>
              <ListItemText
                primary={todo.text}
                primaryTypographyProps={{ noWrap: false }}
                style={{ textDecoration: 'line-through', flex: '1 0 auto' }}
              />
              <StyledButtonGroup>
                <Button
                  variant='contained'
                  color='error'
                  startIcon={<DeleteIcon />}
                  onClick={() => handleDelete(todo.id)}
                ></Button>
              </StyledButtonGroup>
            </StyledListItem>
          )
        ))}
      </List>
    </div>
  );
};

export default TaskList;
