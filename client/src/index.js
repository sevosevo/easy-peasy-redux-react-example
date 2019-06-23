import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
//Redux with easy-peasy
import { action, createStore, StoreProvider } from 'easy-peasy';
//Import bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import './main.css';

//Creating a store, actions and reducers
const store = createStore({
    todos: {
        //State
        loadingEffect: true,
        items: [{title: 'example title', body: 'example body', id: '1', completed: false},{title: 'example title 2', body: 'example body 2', id: '2', completed: false}, {title: 'example title 3', body: 'example body 3', id: '3', completed: false}],
        //Actions
        add: action((state, todo) => {
           state.items.push({
               ...todo,
               id: Math.floor(Math.random() * 10000)
           }) 
        }),
        delete: action((state, id) => {
            state.items = state.items.filter(item => item.id !== id);
        }),
        stopLoading: action((state) => {
            state.loadingEffect = false;
        }),
        mark: action((state, id) => {
            state.items = state.items.map(item => {
                if(item.id === id){
                    item.completed = !item.completed;
                }
                return item;
            })
        })
    },
    //Not added on front end, but you can work with this one to get the selected todo to display on new component or something
    selected: {
        selectedTodo: '',
        selectTodo: action((state, title) => {
            state.selectedTodo = title;
        })
    }
});
//Rendering
ReactDOM.render(
    <StoreProvider store={store}><App /></StoreProvider>
    ,
    document.querySelector('#root')
);