'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { Clock, Car, Flag, Timer, ChevronRight } from "lucide-react";

interface SessionDetail {
  session: 'Offline Testing' | 'Practice' | 'Qualify' | 'Race';
  laps: number;
  fastestLap: string;
  timeOnTrack: string;
}

interface CardEventProps {
  date: string;
  circuit: string;
  car: string;
  totalLaps: number;
  sessions: SessionDetail[];
  key?: number; // Added to handle the index prop
}

export const CardEvent = React.forwardRef<HTMLDivElement, CardEventProps>(({
  date,
  circuit,
  car,
  totalLaps,
  sessions,
}, ref) => {
  const router = useRouter();

  const handleSessionClick = (session: SessionDetail) => {
    router.push('/event/session');
  };

  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem
        value="event"
        className="border-b border-x-0 border-t-0 rounded-none py-0"
      >
        <AccordionTrigger className="hover:no-underline py-3 pr-4 [&>svg]:ml-0 [&>svg]:mr-4">
          <div className="flex w-full items-center">
            <div className="grid grid-cols-[1fr_1fr_1fr_1fr_24px] w-full gap-4">
              <div className="flex items-center text-sm">
                <Clock className="w-4 h-4 mr-2 text-muted-foreground" />
                {date}
              </div>
              <div className="flex items-center text-sm">
                <Timer className="w-4 h-4 mr-2 text-muted-foreground" />
                {totalLaps} laps
              </div>
              <div className="flex items-center text-sm">
                <Flag className="w-4 h-4 mr-2 text-muted-foreground" />
                {circuit}
              </div>
              <div className="flex items-center text-sm">
                <Car className="w-4 h-4 mr-2 text-muted-foreground" />
                {car}
              </div>
              <div className="flex justify-end">
                {/* Empty div for chevron alignment */}
              </div>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className="py-2 space-y-1">
            {sessions.map((session, index) => (
              <div
                key={index}
                onClick={() => handleSessionClick(session)}
                className={cn(
                  "grid grid-cols-[1fr_1fr_1fr_1fr_24px] gap-4 py-2 pl-4 pr-8 text-sm items-center",
                  "cursor-pointer transition-colors duration-200",
                  "hover:bg-secondary",
                  index % 2 === 0 ? "" : "",
                  "group"
                )}
              >
                <div>{session.session}</div>
                <div>{session.laps} laps</div>
                <div>{session.fastestLap}</div>
                <div>{session.timeOnTrack}</div>
                <div className="flex justify-end">
                  <ChevronRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
});

CardEvent.displayName = 'CardEvent';