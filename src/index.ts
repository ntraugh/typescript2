import { v4 as uuidV4 } from "uuid"

const input = document.querySelector<HTMLInputElement>("#new-task-title")
const list = document.querySelector<HTMLUListElement>("#list")
const taskForm = document.querySelector<HTMLFormElement>("#new-task-form")

taskForm?.addEventListener("submit", e => {
  e.preventDefault()

  // adding ? after input to check for the null value
  if(input?.value == "" || input?.value == null) return 

  const task = {
    id: uuidV4(),
    title: input.value,
    complete: false,
    createdAt: new Date()
  }
  input.value
})