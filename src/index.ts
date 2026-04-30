import express from "express";
import { envs } from "./config/envs.js";
import { createRoutesApp } from "./routes/index.js";
import { errorHandlerMiddleware } from "./middlewares/errorHandler.js";


const app = express();

if (process.env.NODE_ENV === 'development') {
  const morgan = (await import('morgan')).default;
  app.use(morgan('dev'));
}

app.use(express.json());


app.use(createRoutesApp())


app.use(errorHandlerMiddleware)


const server = app.listen(envs.PORT,()=>{
    console.log(`Server on! ${envs.PORT}`)
})