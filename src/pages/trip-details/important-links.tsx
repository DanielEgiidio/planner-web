import { Link2, Plus } from "lucide-react";
import { Button } from "../../components/button";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";

interface Links {
  id: string;
  title: string;
  url: string;
}

export default function ImportantLinks() {
  const { tripId } = useParams();
  const [importantLinks, setImportantLinks] = useState<Links[]>([]);

  useEffect(() => {
    api
      .get(`/trips/${tripId}/links`)
      .then((response) => setImportantLinks(response.data.links))
      .catch((error) => {
        console.error("Error fetching links:", error);
      });
  }, [tripId]);

  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Links Importantes</h2>
      <div className="space-y-5">
        {importantLinks.map((link) => (
          <div
            key={link.id}
            className="flex items-center justify-between gap-4"
          >
            <div className="space-y-1.5">
              <span className="block font-medium text-zinc-100">
                {link.title}
              </span>
              <a
                href={link.url}
                className="block text-xs text-zinc-400 truncate hover:text-zinc-200"
              >
                {link.url}
              </a>
            </div>
            <Link2 className="text-zinc-400 w-5 h-5 shrink-0" />
          </div>
        ))}
      </div>

      <Button variant="secondary" size="full">
        <Plus className="w-5 h-5" />
        Cadastrar novo link
      </Button>
    </div>
  );
}
