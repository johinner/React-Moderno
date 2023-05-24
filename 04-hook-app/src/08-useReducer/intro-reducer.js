console.log('reducer')

const inicialState = [{
    id: 1,
    todo: "ReCOLECTAR",
    done: false
}]

const todoReducer = (state= inicialState, action = {}) => {

    if(action.type === '[TODO] add todo'){
        return [...state, action.plyload];
    }
    return state;
}

let todos = todoReducer();

const newTodo1 = {
    id:2,
    todo: 'otro1/',
    done: false
}
const newTodo2 = {
    id:3,
    todo: 'otro2/',
    done: false
}

const addTodoAction = {
    type: '[TODO] add todo',
    plyload: newTodo1
}
const addTodoAction2 = {
    type: '[TODO] add todo',
    plyload: newTodo2
}

todos = todoReducer(todos, addTodoAction)

todos = todoReducer(todos, addTodoAction2)

console.log({state: todos})