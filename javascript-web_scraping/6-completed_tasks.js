#!/usr/bin/node
const axios = require('axios');

const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

axios.get(apiUrl)
  .then(response => {

    const todos = response.data;

    const completedTasksByUser = {};

    todos.forEach(todo => {
      if (todo.completed) {
        if (!completedTasksByUser[todo.userId]) {
          completedTasksByUser[todo.userId] = 1;
        } else {
          completedTasksByUser[todo.userId]++;
        }
      }
    });

    console.log('Users with completed tasks:');
    for (const userId in completedTasksByUser) {
      console.log(`User ID: ${userId}, Completed Tasks: ${completedTasksByUser[userId]}`);
    }
  })
  .catch(error => {
    console.error('Error fetching data from JSONPlaceholder API:', error);
  });
