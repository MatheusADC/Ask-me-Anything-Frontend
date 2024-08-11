import { useParams } from "react-router-dom"
import { Share2 } from 'lucide-react'
import { toast } from "sonner"

import amaLogo from '../assets/ama-logo.svg'
import { Messages } from "../components/messages"
import { Suspense } from "react"
import { CreateMessageForm } from "../components/create-message-form"

export function Room() {
    const { roomId } = useParams()

    function handleShareRoom() {
        const url = window.location.href.toString()

        // Primeira condição verifica se a API existe, segunda verifica se o navegador suporta compartilhar.
        if(navigator.share !== undefined && navigator.canShare ()) {
            navigator.share({ url })
        } else {
            // Copia a URL para a área de transferência, porque o navegador não tem suporte.
            navigator.clipboard.writeText(url)

            toast.info('O link da sala foi copiado para a área de transferência!')
        }
    }
    
    return (
        <div className="mx-auto max-w-[640px] flex flex-col gap-6 py-10 px-4">
            <div className="flex items-center gap-3 px-3 ">
                <img src={amaLogo} className="h-5" alt="AMA" />

                <span className="test-sm test-zinc-500 truncate">Código da sala: <span className="text-zinc-300">{roomId}</span>
                </span>
                <button onClick={handleShareRoom} type="submit" className="bg-zinc-800 text-zinc-300 ml-auto px-3 py-1.5 gap-1.5 flex items-center rounded-lg font-medium text-sm tranmsition-colors hover:bg-zinc-700">
                    Compartilhar
                    <Share2 className="size-4" />
                </button>
            </div>
            <div className="h-px w-full bg-zinc-900"></div>

            <CreateMessageForm />
            
            <Suspense fallback={<p>Carregando...</p>}>
                <Messages />
            </Suspense>
        </div>
    )
}