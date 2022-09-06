import { v4 as uuidV4 } from "uuid"

type Task = { 
  id: string, 
  title: string, 
  completed: boolean, 
  createdAt: Date
}

const input = document.querySelector<HTMLInputElement>("#new-task-title")
const list = document.querySelector<HTMLUListElement>("#list")
const taskForm = document.querySelector<HTMLFormElement>("#new-task-form")


function addListItem(task: Task) {
  // create our three elements, li, label, and input
  const item = document.createElement("li")
  const label = document.createElement("label")
  const checkbox = document.createElement("input")

  // create our checkbox
  checkbox.type = "checkbox"
  // append the checkbox and the task title to our label
  label.append(checkbox, task.title)
  item.append(label)
  list?.append(item)
}


taskForm?.addEventListener("submit", e => {
  e.preventDefault()

  // adding ? after input to check for the null value
  if(input?.value == "" || input?.value == null) return 

  const newTask: Task = {
    id: uuidV4(),
    title: input.value,
    completed: false,
    createdAt: new Date()
  }
  addListItem(newTask)
})

