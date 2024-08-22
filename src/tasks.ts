//const btn = document.querySelector('test-btn')!; // if I don't use the "!" sign at the end of my code, I will get an error, and "addEventListener" will not work. So, either I should use "!" at the end of my code or "?" at the end of the "btn" below. In general, correct usage is the first one. It means, I know the element going to be there, I am sure of it. .

// const btn = document.querySelector('.test-btn')! as HTMLButtonElement; //

const taskForm = document.querySelector<HTMLFormElement>(".form");
const formInput = document.querySelector<HTMLInputElement>(".form-input");
const taskListElement = document.querySelector<HTMLUListElement>(".list");

// task type

type Task = {
  description: string;
  isCompleted: boolean;
};

//retrieve tasks from localStorage

const tasks: Task[] = loadTasks();

taskForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const taskDescription = formInput?.value;
  if (taskDescription) {
    //console.log(taskDescription);
    const task: Task = {
      description: taskDescription,
      isCompleted: false,
    };

    //add task to list
    addTask(task);

    //render tasks: So think of it this way, not only we wanna render the task once we add new one to the list, but also when the user first navigates the page or we refresh,
    //we want to grab the tasks from the local storage where they're nicely saved and
    //we wanna render them on the screen.
    renderTask(task);

    //update local storage
    updateStorage();

    formInput.value = "";
    return;
  }
  alert("Please enter a task description");
});

function addTask(task: Task): void {
  tasks.push(task);
  console.log(tasks);
}

function renderTask(task: Task): void {
  const taskElement = document.createElement("li");
  taskElement.textContent = task.description;

  // checkbox
  const taskCheckbox = document.createElement("input");
  taskCheckbox.type = "checkbox";
  taskCheckbox.checked = task.isCompleted;

  //toggle checkbox
  taskCheckbox.addEventListener("change", () => {
    task.isCompleted = !task.isCompleted;
    updateStorage();
  });

  taskElement.appendChild(taskCheckbox);
  taskListElement?.appendChild(taskElement);
}

//load task from localStorage

function loadTasks(): Task[] {
  const storedTasks = localStorage.getItem("tasks");
  return storedTasks ? JSON.parse(storedTasks) : [];
}

//task.forEach((task) => renderTask(task));

tasks.forEach(renderTask);

//update tasks in localStorage
function updateStorage(): void {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
