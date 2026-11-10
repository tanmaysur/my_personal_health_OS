import { Badge } from "@/components/ui/badge";

interface HeaderProps {
  title: string;
  description?: string;
  showSampleBadge?: boolean;
}

export function Header({
  title,
  description,
  showSampleBadge = false,
}: HeaderProps) {
  return (
    <header className="mb-6 flex flex-col gap-2 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
      <div className="space-y-1">
        <h1 className="font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          {title}
        </h1>
        {description ? (
          <p className="max-w-2xl text-sm text-muted-foreground sm:text-base">
            {description}
          </p>
        ) : null}
      </div>
      {showSampleBadge ? (
        <Badge
          variant="secondary"
          className="w-fit border border-border/70 bg-secondary/80 font-medium"
        >
          Sample data
        </Badge>
      ) : null}
    </header>
  );
}
