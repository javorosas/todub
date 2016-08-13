const baseUrl = 'http://www.prototech.io/todub/task/';

const routes = {
  getAllTasks: () => baseUrl,
  postTask: () => baseUrl,
  getTask: (id) => `${baseUrl}${id}`,
  markCompleted: (id) => `${baseUrl}${id}`,
  removeTask: (id) => `${baseUrl}${id}`
};

export default routes;
