import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

// interface defines structure of an object
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios
  .get(url)
  .then((response) => {
    // tell typescript response.data is a Todo
    const todo = response.data as Todo;
    const { id, title, completed } = todo;
    console.log(`ID ${id}, title: ${title}, completed: ${completed}`);
  })
  .catch((error) => console.log(error));
