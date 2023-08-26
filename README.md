# To-Do List Webpage

This is a simple to-do list webpage where you can manage your tasks and keep track of things you need to do. The webpage is built using HTML, CSS, and JavaScript. You can add tasks, mark them as completed, and remove tasks that you no longer need.

## Features

- Add tasks to your to-do list.
- Mark tasks as completed by clicking on them.
- Remove tasks from the list.
- Your to-do list data is saved in your browser's local storage, so you won't lose your tasks even if you close the webpage.

## How to Use

1. Clone or download the project files to your computer.

2. Open the `index.html` file in your web browser to view the to-do list webpage.

3. You'll see an input field where you can type your tasks. Press the "Add" button or hit "Enter" to add a task to the list.

4. Your tasks will appear in the list. Click on a task to mark it as completed. Click the "x" button next to a task to remove it from the list.

5. Your to-do list is automatically saved in your browser's local storage, so you can close the webpage and come back later without losing your tasks.

## Code Overview

The functionality of the to-do list webpage is implemented using JavaScript. Here's a brief overview of the JavaScript code:

- The JavaScript code starts by selecting the necessary HTML elements using `document.querySelector`.

- Event listeners are added to the "Add" button and the input box to capture tasks when the button is clicked or "Enter" is pressed.

- The `addtask` function is responsible for adding tasks to the list. It checks if the input is empty before creating a new list item (`li`) and appending it to the `listContainer`.

- Click events on the list items (`li`) and the "x" button are handled in the `listContainer` event listener. Tasks can be marked as completed or removed by clicking on the respective elements.

- The `saveData` function uses `localStorage` to store the HTML content of the `listContainer`, ensuring that the tasks persist even after the webpage is closed.

- The `showData` function retrieves the saved HTML content from `localStorage` and displays it when the page loads.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Contribution

Feel free to contribute to this project by fixing bugs, adding new features, or improving the user interface. Create a pull request to submit your changes.

Enjoy using the to-do list webpage! If you have any questions or suggestions, feel free to contact us.

**Happy task management!**
