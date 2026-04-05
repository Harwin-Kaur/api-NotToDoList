  import express from 'express';

  const app = express();
  const PORT = 8000;
  import morgan from 'morgan';

  app.use(morgan('dev'));

  app.use(express.json()); // this will help to parse the data coming from post method in json format

  import taskRouter from './src/router/taskRouter.js';

  app.use("/api/v1/tasks",taskRouter);

  app.get('/', (req, res) => {
    res.send('Hello World')
  })

  app.listen(PORT, error => {
      error ? console.log(error):
    console.log(`Server is running on http://localhost:${PORT}`);
  })