import { Calendar, X } from "lucide-react";
import { useState } from "react";

import "react-day-picker/dist/style.css";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Button } from "../../components/button";
import { api } from "../../lib/axios";
import { DateRange } from "react-day-picker";
import { DayPicker } from "react-day-picker";

interface ModalUpdateDateLocationProps {
  isOpen: boolean;
  onClose: () => void;
  tripId: string;
  currentDates: DateRange;
  currentDestination: string;
  setTripDates: (dates: DateRange) => void;
  setTripDestination: (destination: string) => void;
}

export default function ModalUpdateDateLocation({
  isOpen,
  onClose,
  tripId,
  currentDates,
  currentDestination,
  setTripDates,
  setTripDestination,
}: ModalUpdateDateLocationProps) {
  const [eventStartAndEndDates, setEventStartAndEndDates] =
    useState<DateRange>(currentDates);
  const [destination, setDestination] = useState(currentDestination);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  const updateTrip = async () => {
    if (eventStartAndEndDates.from && eventStartAndEndDates.to) {
      try {
        // Reajustando as datas para evitar o problema de fusos horários
        const adjustedStartDate = new Date(eventStartAndEndDates.from);
        const adjustedEndDate = new Date(eventStartAndEndDates.to);

        await api.put(`/trips/${tripId}`, {
          destination,
          starts_at: format(adjustedStartDate, "yyyy-MM-dd"),
          ends_at: format(adjustedEndDate, "yyyy-MM-dd"),
        });

        setTripDates(eventStartAndEndDates);
        setTripDestination(destination);
        onClose();
        window.location.reload(); // Atualiza a página após a confirmação
      } catch (error) {
        console.error("Erro ao atualizar a viagem:", error);
      }
    } else {
      console.error("Datas não selecionadas corretamente.");
    }
  };

  if (!isOpen) return null;

  const displayedDate =
    eventStartAndEndDates?.from && eventStartAndEndDates?.to
      ? `${format(eventStartAndEndDates.from, "d' de 'MMMM'", {
          locale: ptBR,
        })} até ${format(eventStartAndEndDates.to, "d' de 'MMMM'", {
          locale: ptBR,
        })}`
      : "Selecione a data";

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Atualizar Viagem</h2>
          <button onClick={onClose}>
            <X className="size-5 text-zinc-400" />
          </button>
        </div>

        <input
          className="bg-transparent text-lg placeholder:zinc-400 outline-none flex-1"
          type="text"
          placeholder="Para onde você vai?"
          value={destination}
          onChange={(event) => setDestination(event.target.value)}
        />

        <div className="flex items-center gap-2">
          <span className="text-lg text-zinc-400">{displayedDate}</span>
          <button onClick={() => setIsDatePickerOpen((prev) => !prev)}>
            <Calendar className="size-5 text-zinc-400" />
          </button>
        </div>

        {isDatePickerOpen && (
          <DayPicker
            mode="range"
            selected={eventStartAndEndDates}
            onSelect={setEventStartAndEndDates}
            required
          />
        )}

        <Button onClick={updateTrip} variant="primary">
          Confirmar
        </Button>
      </div>
    </div>
  );
}
