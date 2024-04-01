import {Request, Response} from "express";

export interface UsuarioController{
    criaUsuario(req: Request, res: Response): void;
    verificaUsuario(req: Request, res: Response): void;
    listarUsuarios(req: Request, res: Response): void;
    deletaUsuario(req: Request, res: Response): void;

}