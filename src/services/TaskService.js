const db = {}
let sequence = 0;

class TaskService {

  static add(task) {

    return new Promise((resolve) => {
      const newTask = {
        id: ++sequence,
        done: task.done || false,
        description: task.description
      };

      db[newTask.id] = newTask;

      resolve(newTask);
    })
  }

  static getAll() {

    const toArray = key => db[key];

    return new Promise((resolve) => {

      const tasks = Object.keys(db).map(toArray);
      resolve(tasks);
    })
  }

  static getById(id) {
    return new Promise((resolve) => {
      resolve(db[id]);
    })
  }

  static update(id, updatedTask) {
    return new Promise(async (resolve) => {

      const task = await TaskService.getById(id);

      if(task) {

        const hasValue = updatedTask.done !== null;
        task.done = hasValue ? updatedTask.done : task.done;
        task.description = updatedTask.description || task.description;

        resolve(task);

      }

      resolve(null);
    })
  }

  static delete(id) {
    return new Promise((resolve) => {
      const task = db[id];
      if(task) {
        delete db[id];
        resolve(true);
      }

      resolve(false);

    })
  }

}

module.exports = TaskService;