import {z} from 'zod'
const UsuarioDtoValidation = z.object({
    nome: z.string(),
    cpf: z.string(),
    idade: z.coerce.number()
});

type UsuarioDto = z.infer<typeof UsuarioDtoValidation>;

export default{
    UsuarioDtoValidation,UsuarioDto
}