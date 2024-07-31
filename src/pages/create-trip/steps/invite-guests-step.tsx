import { ArrowRight, UserRoundPlus } from "lucide-react";

interface InviteGuestsStepProps {
  openGuestModalOpen: () => void;
  emailsToInvite: string[];
  openConfirmedTripModal: () => void;
}

export default function InviteGuestsStep({
  openGuestModalOpen,
  emailsToInvite,
  openConfirmedTripModal,
}: InviteGuestsStepProps) {
  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow gap-3">
      <button
        type="button"
        onClick={openGuestModalOpen}
        className="flex items-center gap-2 flex-1"
      >
        <UserRoundPlus className="size-5 text-zinc-400" />
        {emailsToInvite.length > 0 ? (
          <span className="text-lg text-zinc-100 flex-1 text-left">
            {emailsToInvite.length} pessoa(s) convidada(s)
          </span>
        ) : (
          <span className="text-lg text-zinc-400 flex-1 text-left">
            Quem estará na viagem ?
          </span>
        )}
      </button>

      <div className="w-px h-6 bg-zinc-800" />

      <button
        onClick={openConfirmedTripModal}
        className="bg-lime-300 flex items-center gap-2 text-lime-950 rounded-lg px-5 py-2 font-medium hover:bg-lime-400"
      >
        Confirmar Viagem
        <ArrowRight className="size-5" />
      </button>
    </div>
  );
}
