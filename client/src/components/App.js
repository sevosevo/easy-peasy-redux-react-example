import React, {useEffect, Fragment} from 'react';
 
import { useStore, useActions } from 'easy-peasy';
//Importing spinner from  react-bootstrap
import { Spinner }  from 'react-bootstrap';
//Import form component
import Form from './Form';
//Import Todos component
import Todos from './Todos';


const App = () => {

    //List of todos
    const todos = useStore(state=>state.todos.items);
    //Loading effect - not doing anything async
    const loadingEffect = useStore(state=>state.todos.loadingEffect);
    //Stop loading
    const stopLoading = useActions(actions=>actions.todos.stopLoading);

    
    useEffect( () => {
        setTimeout(() => {
            stopLoading();
        }, 2000);
    }, [stopLoading] );

    return <div className="container">
        {
            loadingEffect ? <div className="text-center">Loading<hr /><Spinner animation="border" size="sm" />
            <Spinner animation="border" />
            <Spinner animation="grow" size="sm" />
            <Spinner animation="grow" /></div> : <Fragment>
            <Todos todos={todos} />
            <Form />
            </Fragment>
        }
    </div>
}

export default App;


