export interface IUpdateTask {
  Title?: string;
  Description?: string;
  Priority?: string;
  Status?: string;
  Completed?: boolean;
}

export class AppUpdateTask implements IUpdateTask {
  Title?: string;
  Description?: string;
  Priority?: string;
  Status?: string;
  Completed?: boolean;
  constructor(data: AppUpdateTask) {
    this.Title = data.Title;
    this.Description = data.Description;
    this.Priority = data.Priority;
    this.Status = data.Status;
    this.Completed = data.Completed;
  }
}