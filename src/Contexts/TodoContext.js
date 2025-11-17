import { createContext, useContext } from "react";

const TodoContext = createContext({
   todos: [
            {
                id: 1,
                todo: "task",
                completed: false
            }
    ],                                                          // Context only takes one thing and that could be a single variable,
    add : (todo) => {},                                       // a function, an array or an object.
    update: (id, todo) => {},                                    // so giving an Object is considered to be the best thing, 
    deleteTodo: (id) => {},                                          // as inside it we can give whatever we want to.
    complete: (id)=>{},
})

export const TodoContextProvider = TodoContext.Provider

export const useTodo = () => {
    return useContext(TodoContext)
}

/* There is a difference in the export and export default, export directly will export the variable, function and then while importing it we have
to use the same name as the exporting function unless we are using the 'as' 
and export default is used to export the main thing of the file so if we export default anything we can import it directly by using the {} */

/* Barrel File or Index Barrel :- 
    If you import a folder, JS automatically loads the index.js file inside it.

    So this:
import { TodoProvider } from './contexts'

is exactly the same as:
import { TodoProvider } from './contexts/index.js
*/
