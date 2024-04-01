import { Usuario} from "../entires/usuario"
import {MyDB} from "../../db/MyDB"
import {BaseRepositorio} from "./BaseRepositorio"

class UsuarioRepositorio extends BaseRepositorio<Usuario>{
    constructor(){
        super(MyDB.usuarios);
    }
}