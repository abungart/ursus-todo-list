# Creating a Todo List

The application we are creating will allow a user to enter in a task such as "Pick up milk", "Get vehicle license", or "Change air filter" to a an input field and then save it in a list displayed to the page. Each item in the list will be able to be completed by clicking on a **Complete** button to complete the individual item.

## Instruction

The `index.html` and **jQuery** files have already been created and the **jQuery** dependency has been sourced in. A new JavaScript file will need to be created and sourced into the `index.html` for the application.

<img src="documentation/no-styling.png" alt="application with no styling" />

### HTML Needs

1. Create an input field for a user to enter in their task with a label (`<label>`) that says, "**New Task**"
1. Create a button that says, "**Add Task**"
1. Create a heading (`<h3>`) underneath the New Task input and the Add Task button that says, "**My Todo List**"
1. Create an unordered list (`<ul>`) with a single list item (`<li>`) with the word "**There are no tasks**" in it

### Functionality Requirements

1. Clicking on the **Add Task** button
   - create a task object (`{}`) with two properties;
     - `name` - to store the text entered in the input (string value)
     - `completed` - to store the completed status (boolean value)
   - `completed` property should be set initially to `false`
   - the task object should be added to an array of tasks
   - the input should be cleared out
   - render list of tasks to the page
1. Clicking on the **Complete** button for a task
   - toggles the boolean value of that particular task's `completed` property to the opposite of what it currently is
     - if `completed` property is `true` change the value to `false`
     - if `completed` property is `false` change the value to `true`
   - render list of tasks to the page

### Rendering List of Tasks to the Page

1. render each of the task items from the array as a list item in an unordered list on the page
1. each item should be wrapped in an `<li>` with the `name` from the task item and a **Complete** button
1. if the `completed` property is `true` then the **Complete** button should be disabled and the task item should have a different background color than the rest
1. if the `completed` property is `false` then the **Complete** button should not be disabled and the task item should be a standard background color

### Making Things Look Pretty

<img src="documentation/with-styling.png" alt="application with styling" />

1. There is a stylesheet, `style.css`, that has some styles in it for you
1. With the styling that's in place you should just be able to add the appropriate classes to the correct elements and everything should be styled
1. Try to determine where each of the classes should go
1. You may need to alter the HTML you are using for all of the styles to work
