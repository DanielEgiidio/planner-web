import { Tag, X } from "lucide-react";
import { Button } from "../../components/button";
import { FormEvent, useState } from "react";
import { api } from "../../lib/axios";
import { useParams } from "react-router-dom";

interface CreateActivityModalProps {
  closeCreateActivityModal: () => void;
}

export default function CreateActivityModal({
  closeCreateActivityModal,
}: CreateActivityModalProps) {
  const { tripId } = useParams();

  const [occursAtDate, setOccursAtDate] = useState<string>("");
  const [occursAtTime, setOccursAtTime] = useState<string>("");

  async function createActivity(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const title = data.get("title")?.toString();
    const occurs_at_date = data.get("occurs_at_date")?.toString();
    const occurs_at_time = data.get("occurs_at_time")?.toString();

    const occurs_at = `${occurs_at_date}T${occurs_at_time}`;

    await api.post(`/trips/${tripId}/activities`, {
      title,
      occurs_at,
    });

    window.document.location.reload();
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="font-lg font-semibold">Cadastrar atividade</h2>
            <button onClick={closeCreateActivityModal}>
              <X className="w-5 h-5 text-zinc-400" />
            </button>
          </div>

          <p className="text-sm text-zinc-400">
            Todos convidados podem visualizar as atividades.
          </p>
        </div>

        <form onSubmit={createActivity} className="space-y-3">
          <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <Tag className="text-zinc-400 w-5 h-5" />
            <input
              name="title"
              placeholder="Qual a atividade?"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
            />
          </div>

          <div className="flex gap-2">
            <div className="h-14 flex-1 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
              <input
                type="date"
                name="occurs_at_date"
                placeholder={occursAtDate ? "" : "Data da atividade"}
                value={occursAtDate}
                onChange={(e) => setOccursAtDate(e.target.value)}
                className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
              />
            </div>
            <div className="h-14 w-44 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
              <input
                type="time"
                name="occurs_at_time"
                placeholder={occursAtTime ? "" : "Horário"}
                value={occursAtTime}
                onChange={(e) => setOccursAtTime(e.target.value)}
                className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
              />
            </div>
          </div>

          <Button size="full">Salvar atividade</Button>
        </form>
      </div>
    </div>
  );
}
