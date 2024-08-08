import { MapPin, Calendar, Settings2 } from "lucide-react";
import { Button } from "../../components/button";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { format } from "date-fns";
import { DateRange } from "react-day-picker";
import { ptBR } from "date-fns/locale";
import ModalUpdateDateLocation from "./modal-update-date-location";

interface Trip {
  id: string;
  destination: string;
  starts_at: string;
  ends_at: string;
  is_confirmed: boolean;
  owner_email: string;
}

export default function DestinationAndDateHeader() {
  const { tripId } = useParams();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [eventStartAndEndDates, setEventStartAndEndDates] = useState<
    DateRange | undefined
  >();
  const [destination, setDestination] = useState<string>("");

  useEffect(() => {
    api.get(`trips/${tripId}`).then((response) => {
      const tripData = response.data.trip;
      setEventStartAndEndDates({
        from: new Date(tripData.starts_at),
        to: new Date(tripData.ends_at),
      });
      setDestination(tripData.destination);
    });
  }, [tripId]);

  const displayedDate =
    eventStartAndEndDates?.from && eventStartAndEndDates?.to
      ? `${format(eventStartAndEndDates.from, "d' de 'MMMM'", {
          locale: ptBR,
        })} até ${format(eventStartAndEndDates.to, "d' de 'MMMM'", {
          locale: ptBR,
        })}`
      : null;

  return (
    <div className="px-4 h-16 rounded-xl bg-zinc-900 shadow-shape flex items-center justify-between">
      <div className="flex items-center gap-2">
        <MapPin className="size-5 text-zinc-400" />
        <span className="text-zinc-100">{destination}</span>
      </div>

      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <Calendar className="size-5 text-zinc-400" />
          <span className="text-zinc-100">{displayedDate}</span>
        </div>

        <div className="w-px h-6 bg-zinc-800" />

        <Button onClick={() => setIsModalOpen(true)} variant="secondary">
          Alterar local/data
          <Settings2 className="size-5" />
        </Button>
      </div>

      {isModalOpen && (
        <ModalUpdateDateLocation
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          tripId={tripId!}
          currentDates={eventStartAndEndDates!}
          currentDestination={destination}
          setTripDates={setEventStartAndEndDates}
          setTripDestination={setDestination}
        />
      )}
    </div>
  );
}
