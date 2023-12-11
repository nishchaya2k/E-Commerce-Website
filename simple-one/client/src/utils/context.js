import { createContext,useState } from "react";

// Create a Context object.
export const Context = createContext();


// Create a Provider component.
const AppContext = ({children}) => {

   const [categories,setCategories] = useState();
   const [products,setProducts] = useState();

   //we will pass all the states which we want them to be available globally for the all components
   //we will write them in values     
    


// Make the user available to all descendant components.
    return <Context.Provider value={{ categories,setCategories,products,setProducts}}>
                {children}
           </Context.Provider>
};

export default AppContext;


/* 
 React Context is a method to pass props from parent to child component(s),
 by storing the props in a store(similar in Redux) and using these props from the 
 store by child component(s) without actually passing them manually at each level of
 the component tree.

1. React Context is a feature that allows you to easily share data between components 
   without having to pass props down manually. This is useful for data that needs to be
   accessed by multiple components, such as the current user or the current theme.

2. To use Context, you first need to create a Context object. This object will store the 
   data that you want to share. Once you have created the Context object, you can create a
   Provider component. This component will make the data available to all of its descendant 
   components. 
   
3. Finally, you can use the useContext hook to access the data in any component.
   The useContext hook will return the value of the Context object for the current component.

4. Basically we can refer AppContext is a higher higher order component in which we will
   wrap all the components. Now, all the states we will create in AppContext we can use 
   them in all the childrens(all the components it contained).

5. the states we need at multiple places, we create here like cart logic (update,delete,..etc) and so many states
*/



// in this file now we will main states for the categories and for the products