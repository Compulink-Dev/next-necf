"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PencilLine } from "lucide-react";
import { Button } from "@/components/ui/button";

export type GridItem = {
  id: string;
  title: string;
  image: string;
  description?: string;
};

function getPageButtons(current: number, total: number) {
  if (total <= 5) return Array.from({ length: total }, (_, i) => i + 1);
  const start = Math.max(1, Math.min(current - 2, total - 4));
  return [start, start + 1, start + 2, start + 3, start + 4];
}

function GridTile({
  item,
  basePath,
}: {
  item: GridItem;
  basePath: string;
}) {
  return (
    <Link
      href={`${basePath}/${item.id}`}
      title={item.description || item.title}
      className="group relative block overflow-hidden rounded-2xl bg-background/80 ring-1 ring-border/60 transition duration-300 hover:-translate-y-0.5 hover:shadow-md hover:ring-emerald-500/40"
    >
      <div className="relative aspect-[3/2] overflow-hidden">
        <Image
          alt={item.title}
          src={`${item.image}`}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover transition duration-300 group-hover:scale-[1.04]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <div className="pointer-events-none absolute top-3 right-3 flex size-8 items-center justify-center rounded-full bg-white/90 text-emerald-800 opacity-0 shadow-sm transition duration-300 group-hover:opacity-100">
          <PencilLine className="size-4" />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 p-3">
        <p className="truncate text-sm font-semibold text-white drop-shadow">
          {item.title}
        </p>
      </div>
    </Link>
  );
}

export function PaginatedImageGrid({
  items,
  basePath,
  perPage = 12,
}: {
  items: GridItem[];
  basePath: string;
  perPage?: number;
}) {
  const [page, setPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(items.length / perPage));

  const clampedPage = Math.min(page, totalPages);
  const pageItems = useMemo(() => {
    const start = (clampedPage - 1) * perPage;
    return items.slice(start, start + perPage);
  }, [items, clampedPage, perPage]);

  const buttons = getPageButtons(clampedPage, totalPages);

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-4">
        {pageItems.map((item) => (
          <GridTile key={item.id} item={item} basePath={basePath} />
        ))}
      </div>

      {totalPages > 1 ? (
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-background/60 p-3 ring-1 ring-border/60">
          <p className="text-xs text-muted-foreground">
            Page {clampedPage} of {totalPages}
          </p>

          <div className="flex flex-wrap items-center gap-2">
            <Button
              type="button"
              variant="outline"
              className="h-9 rounded-xl bg-background/70"
              disabled={clampedPage === 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
            >
              Previous
            </Button>

            {buttons.map((n) => (
              <Button
                key={n}
                type="button"
                variant={n === clampedPage ? "default" : "outline"}
                className={
                  n === clampedPage
                    ? "h-9 rounded-xl bg-emerald-800 hover:bg-emerald-700"
                    : "h-9 rounded-xl bg-background/70"
                }
                onClick={() => setPage(n)}
              >
                {n}
              </Button>
            ))}

            <Button
              type="button"
              variant="outline"
              className="h-9 rounded-xl bg-background/70"
              disabled={clampedPage === totalPages}
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            >
              Next
            </Button>
          </div>
        </div>
      ) : null}
    </div>
  );
}