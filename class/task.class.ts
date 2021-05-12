import { v4 as uuidv4 } from "uuid";
import { TaskInterface } from "interfaces/task.interface";

class Task implements TaskInterface {
  uuid: string;

  value: string;

  done: boolean;

  constructor(value: string) {
    this.uuid = uuidv4();
    this.value = value;
    this.done = false;
  }
}

export default Task;
