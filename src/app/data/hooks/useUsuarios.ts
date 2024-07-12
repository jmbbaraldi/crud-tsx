import Backend from "@/backend";
import { useEffect, useState } from "react";
import { Usuario } from "@/core/model/Usuario";

export default function useUsuarios() {
    const [usuarios, setUsuarios] = useState<Usuario[]>([])
    const [usuario, setUsuario] = useState<Partial<Usuario> | null>(usuarios[0])

    useEffect(() => {
        Backend.usuarios.obter().then(setUsuarios)
    }, [])

    async function salvar() {
        if(!usuario) return
        await Backend.usuarios.salvar(usuario)
        const usuarios = await Backend.usuarios.obter()
        setUsuarios(usuarios)
        setUsuario(null)
    }

    async function excluir() {
        if(!usuario  || !usuario.id) return
        await Backend.usuarios.excluir(usuario.id)
        const usuarios = await Backend.usuarios.obter()
        setUsuarios(usuarios)
        setUsuario(null)
    }

    return {
        usuarios,
        usuario,
        salvar,
        excluir,
        cancelar: () => setUsuario(null),
        alterarUsuario: (usuario: Partial<Usuario> | null) => setUsuario(usuario),
    }
}