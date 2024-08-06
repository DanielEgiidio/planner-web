import { User, X } from "lucide-react";
import { FormEvent } from "react";
import { Button } from "../../components/button";
import { DateRange } from "react-day-picker";
import { format } from "date-fns";

interface ConfirmTripModalProps {
  closeConfirmedTripModal: () => void;
  setOwnerName: (name: string) => void;
  setOwnerEmail: (email: string) => void;
  createTrip: (event: FormEvent<HTMLFormElement>) => void;
  destination: string;
  eventStartAndEndDates: DateRange | undefined;
}

export default function ConfirmTripModal({
  closeConfirmedTripModal,
  createTrip,
  setOwnerName,
  setOwnerEmail,
  destination,
  eventStartAndEndDates,
}: ConfirmTripModalProps) {
  const formattedDates =
    eventStartAndEndDates &&
    eventStartAndEndDates.from &&
    eventStartAndEndDates.to
      ? `${format(
          eventStartAndEndDates.from,
          "d 'de' MMMM 'de' yyyy"
        )} a ${format(eventStartAndEndDates.to, "d 'de' MMMM 'de' yyyy")}`
      : "";

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5 text-lime-500">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">
              Confirmar criação de viagem
            </h2>
            <button onClick={closeConfirmedTripModal}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>

          <p className="text-sm text-zinc-400">
            Para concluir a criação da viagem para{" "}
            <span className="text-zinc-100 font-semibold">{destination}</span>{" "}
            nas datas de{" "}
            <span className="text-zinc-100 font-semibold">
              {formattedDates}
            </span>{" "}
            preencha seus dados abaixo:
          </p>
        </div>

        <form onSubmit={createTrip} className="space-y-3">
          <div className="h-14 px-4 bg-zinc-950 border-zinc-800 rounded-lg flex items-center gap-2">
            <User className="text-zinc-400 size-5" />
            <input
              className="bg-transparent text-lg placeholder:zinc-400 flex-1 outline-none"
              type="name"
              name="text"
              placeholder="Seu nome completo"
              onChange={(event) => setOwnerName(event.target.value)}
            />
          </div>
          <div className="h-14 px-4 bg-zinc-950 border-zinc-800 rounded-lg flex items-center gap-2">
            <User className="text-zinc-400 size-5" />
            <input
              className="bg-transparent text-lg placeholder:zinc-400 flex-1 outline-none"
              type="email"
              name="email"
              placeholder="Seu email pessoal"
              onChange={(event) => setOwnerEmail(event.target.value)}
            />
          </div>

          <Button type="submit" variant="primary" size="full">
            Confirmar criação da viagem
          </Button>
        </form>
      </div>
    </div>
  );
}
