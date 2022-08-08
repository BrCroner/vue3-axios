// Contém todos os tipos que pretendo usar no app

export interface EventItem {
  id: number
  category: string
  title: string
  description: string
  location: string
  date: string
  time: string
  organizer: string
}

type TaskType = 'personal' | 'work' | 'miscellaneous'

export interface ToDoItem {
  label: string
  type: TaskType
  isComplete: boolean
}
