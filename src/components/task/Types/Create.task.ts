export interface ITask {
  id?: string;
  code: string;
  title: string;
  description: string;
  priority: string;
  status: string; //Status era el estado de la tarea. 'Pendiente', 'En progreso', 'Completada'. Pero y entonces para que hice 'Completed' xd?
  is_completed: boolean;
  isActive?: boolean;
}

export class AppCreateTask implements ITask {
  id?: string;
  code: string;
  title: string;
  description: string;
  priority: string;
  status: string;
  is_completed: boolean;
  isActive?: boolean;

  constructor(data: ITask) {
    this.id = data.id;
    this.code = data.code;
    this.title = data.title;
    this.description = data.description;
    this.priority = data.priority;
    this.status = data.status;
    this.is_completed = data.is_completed;
    this.isActive = data.isActive;
  }
}
