import { Usuario } from '@/core/model/Usuario'
import usuarios from '../../data/constants/usuarios'
import LinhaUsuario from './LinhaUsuario'

export interface ListaUsuarioProps {
    onClick?: (usuario: Usuario) => void
}

export default function ListaUsuario(props: ListaUsuarioProps) {
    return (
        <div className="flex flex-col gap-4">
            {usuarios.map((usuario: Usuario) => {
                return <LinhaUsuario key={usuario.id} usuario={usuario} onClick={props.onClick}/>
            })}
        </div>
    )
}