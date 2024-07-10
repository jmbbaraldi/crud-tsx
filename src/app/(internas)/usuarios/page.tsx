'use client'

import Pagina from "@/app/components/template/Pagina";
import Titulo from "@/app/components/template/Titulo";
import FormularioUsuario from "@/app/components/usuario/FormularioUsuario";
import ListaUsuario from "@/app/components/usuario/ListaUsuario";
import usuarios from "@/app/data/constants/usuarios";
import Backend from "@/backend";
import { Usuario } from "@/core/model/Usuario";
import { IconPlus, IconUser } from "@tabler/icons-react";
import { useState } from "react";

export default function Page() {
    const [usuarios, setUsuarios] = useState<Usuario[]>([])
    const [usuario, setUsuario] = useState<Partial<Usuario> | null>(usuarios[0])

    function salvar() {
        if(!usuario) return
        Backend.usuarios.salvar(usuario)
    }

    return (
        <Pagina className="flex flex-col gap-10">
            <Titulo icone={IconUser} principal="Usuários" secundario="Cadastro de Usuários"/>
            <div className="flex justify-end">
                <button
                    className="flex items-center gap-2 bg-blue-500 px-4 py-2 rounded-md"
                    onClick={() => setUsuario({})}>
                    <IconPlus />
                    <span>Novo Usuário</span>
                </button>
            </div>
            {usuario ? (
                <FormularioUsuario usuario={usuario} onChange={setUsuario}
                    salvar={salvar} 
                    cancelar={() => setUsuario(null)}/>
            ) : (
                <ListaUsuario onClick={setUsuario}/>
            )}
        </Pagina>
    )
}