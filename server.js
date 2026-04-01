  import express from 'express';

  const app = express();
  const PORT = 8000;

  import taskRouter from './src/router/taskRouter.js';

  app.use("/api/v1/tasks",taskRouter);

  app.get('/', (req, res) => {
    res.send('Hello World')
  })

  app.listen(PORT, error => {
      error ? console.log(error):
    console.log(`Server is running on http://localhost:${PORT}`);
  })