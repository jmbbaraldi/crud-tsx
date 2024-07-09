import { Usuario } from '@/core/model/Usuario'
import usuarios from '../../data/constants/usuarios'
import LinhaUsuario from './LinhaUsuario'

export default function ListaUsuario() {
    return (
        <div className="flex flex-col gap-4">
            {usuarios.map((usuario: Usuario) => {
                return <LinhaUsuario key={usuario.id} usuario={usuario} />
            })}
        </div>
    )
}