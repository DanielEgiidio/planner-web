import { Mail, User, X } from "lucide-react";
import { Button } from "../../components/button";
import { FormEvent } from "react";
import { api } from "../../lib/axios";
import { useParams } from "react-router-dom";

interface CreateGuestsProps {
  closeCreateGuests: () => void;
}

export default function CreateGuestsModal({
  closeCreateGuests,
}: CreateGuestsProps) {
  const { tripId } = useParams();

  async function createInvite(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const name = data.get("name")?.toString();
    const email = data.get("email")?.toString();

    await api.post(`/trips/${tripId}/invites`, {
      name,
      email,
    });

    closeCreateGuests();
    window.document.location.reload();
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="font-lg font-semibold">
              Convide alguém para viajar contigo
            </h2>
            <button onClick={closeCreateGuests}>
              <X className="w-5 h-5 text-zinc-400" />
            </button>
          </div>

          <p className="text-sm text-zinc-400">
            Todos convidados podem visualizar os links e atividades da viagem.
          </p>
        </div>

        <form onSubmit={createInvite} className="space-y-3">
          <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <User className="text-zinc-400 w-5 h-5" />
            <input
              name="name"
              type="text"
              placeholder="Nome do convidado"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
            />
          </div>
          <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <Mail className="text-zinc-400 w-5 h-5" />
            <input
              name="email"
              type="email"
              placeholder="Insira o email do convidado"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
            />
          </div>

          <Button size="full">Enviar convite</Button>
        </form>
      </div>
    </div>
  );
}
