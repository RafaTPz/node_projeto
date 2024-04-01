import { Usuario} from "../entires/usuario"
import {MyDB} from "../../db/MyDB"
import 
class UsuarioRepositorio extends BaseRepositorio<Usuario>{
    constructor(){
        super(MyDB.usuarios);
    }
}