1. What is the difference between Component and PureComponent? give an
   example where it might break my app.
### Pure Component is different than Component because it does not triggers a re render everytime as Component. It makes what's called a shallow comparison between props and state, basically checking for references and not values and it will avoid re renders if the component renders the same thing (it is implementing the shouldComponentUpdate behind scenes). It might break the app if there are too much nested PureComponents and the shouldComponentUpdate comparison is not needed

2. Context + ShouldComponentUpdate might be dangerous. Can think of why is
   that?
### In cases where children uses the value of the context but the parent implements should component update. Basically if the parent's shouldComponentUpdate returns false it will avoid re-rendering the child that is using the context to render something. That re-render based on the context will not happen. 

3. Describe 3 ways to pass information from a component to its PARENT.
### 1) By passing a function to the child component that updates the state of the parent
### 2) Using a state management library like redux and modify the piece of the store used by the parent
### 3) Using context and passing a function to the child to allow updating the context value

4. Give 2 ways to prevent components from re-rendering.
### 1) Implementing shouldComponentUpdate and making it return false.
### 2) Using ref to store values instead of state, if state itself is not necessary.

5. What is a fragment and why do we need it? Give an example where it might
   break my app.
### A fragment is a syntax that lets rendering multiple elements in a single group. We need it because every rendered element adds an extra node to the DOM, and with fragments this doesn't happen and improves performance, also allows to return multiple elements from a React component (that only allows one to be returned). It might break the app in cases that there is a need for a DOM node maybe for styling or other needs and there is no node to use.      

6. Give 3 examples of the HOC pattern.
### 1) Wrapping components into a base component
### 2) Wrapping HOCs in other HOCs

7. what's the difference in handling exceptions in promises, callbacks and
   async...await.
### Promises have their .catch method to operate with the errors and handle them, with async/await we need to use the try/catch syntax (also used in callback functions).

8. How many arguments does setState take and why is it async.
### Two: an updater function that takes the current state and props to update the state, and an optional callback function to be executed after setState is finished. It is async to avoid possible unnecessary renders, to optimize performance. 

10. List the steps needed to migrate a Class to Function Component.
### - Write the signature of the function Component
### - Set the state with the useState hook
### - Replace the lifecycle methods with appropiate hooks like useEffect
### - Keep the return from the render method without render method
### - Change all this.state references to state
### - Change all state updates from setState to the state updater defined with useState
### - Change all methods to be const

11. List a few ways styles can be used with components.
### - Inline style
### - Separate stylesheets in .css files
### - Using css pre-processors like sass
### - Using CSS modules

12. How to render an HTML string coming from the server.
### The best way to do so is by using dangerouslySetInnerHTML to set the innerHTML of an element.
