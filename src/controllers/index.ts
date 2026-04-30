import type{ Response ,Request } from "express"
import { getAllUsers , getUserById } from "../services/index.js";
import { CustomError } from "../errors/index.js";

export const getUsers = async (req: Request, res: Response) => {
  const result = await getAllUsers();
  return res.json(result);
};


export const getUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id || Array.isArray(id)) {
    throw CustomError.badRequest("Invalid id"); // lo lanzas
  }

  const result = await getUserById(id);
  if(!result) throw CustomError.badRequest("Id no valido")

  return res.json(result);
};
