import { TodoCounter } from './TodoCounter'
import { TodoSearch } from './TodoSearch'
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';

const defaultTodos= [
  {text:'lavarme el pelo', completed:false},
  {text:'lavar platos',completed:true},
  {text:'estudiar',completed:false}
];

function App() {
  return (
    <>
      <TodoCounter completed={15} total={20} /> 
      <TodoSearch />  
      <TodoList>      
        {defaultTodos.map(todo =>(
          <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed} 
          />
        ))}
      </TodoList>
      <CreateTodoButton /> 
    </>
  );
}

export default App;
