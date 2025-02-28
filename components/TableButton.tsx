import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DeleteButtonProps {
  onDelete: () => void;
}

export function TableButton({ onDelete }: DeleteButtonProps) {
  return (
    <Button variant="destructive" size="sm" onClick={onDelete}>
      <Trash2 className="w-4 h-4" />
    </Button>
  );
}
