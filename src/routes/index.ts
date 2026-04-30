import { Router } from "express";
import { getUsers ,getUser } from "../controllers/index.js";
import { asyncHandler } from "../config/asyncHandler.js";
import { CustomError } from "../errors/index.js";



export const createRoutesApp = ()=>{
    
    const router = Router();
    
    router.get("/",(req,res)=>{
        throw CustomError.internal()
        res.json("index route")
    })


    router.get("/users",getUsers)
    router.get("/users/:id",asyncHandler(getUser))

    return router;
}