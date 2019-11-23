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
}

module.exports = TaskService;