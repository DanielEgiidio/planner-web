import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react";
import React from "react";
import { Button } from "../../../components/button";

interface DestinationAndDateStepProps {
  isGuestInputOpen: boolean;
  closeGuestsInput: () => void;
  openGuestInput: () => void;
}

export default function DestinationAndDateStep({
  isGuestInputOpen,
  closeGuestsInput,
  openGuestInput,
}: DestinationAndDateStepProps) {
  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow gap-3">
      <div className="flex items-center gap-2 flex-1">
        <MapPin className="size-5 text-zinc-400" />
        <input
          className="bg-transparent text-lg placeholder:zinc-400 outline-none flex-1"
          type="text"
          disabled={isGuestInputOpen}
          placeholder="Para onde você vai?"
        />
      </div>

      <div className="flex items-center gap-2">
        <Calendar className="size-5 text-zinc-400" />
        <input
          className="bg-transparent text-lg placeholder:zinc-400 w-40 outline-none"
          type="text"
          disabled={isGuestInputOpen}
          placeholder="Quando?"
        />
      </div>

      <div className="w-px h-6 bg-zinc-800" />

      {isGuestInputOpen ? (
        <Button onClick={closeGuestsInput} variant="secondary">
          Alterar local e data
          <Settings2 className="size-5" />
        </Button>
      ) : (
        <Button onClick={openGuestInput} variant="primary">
          Continuar
          <ArrowRight className="size-5" />
        </Button>
      )}
    </div>
  );
}
