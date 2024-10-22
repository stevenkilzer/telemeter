import React from 'react';
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, MapPin } from "lucide-react";

interface CardEventProps {
  title: string;
  date: string;
  time: string;
  track: string;
  participants: number;
  maxParticipants: number;
  status: 'upcoming' | 'in-progress' | 'completed';
}

export const CardEvent: React.FC<CardEventProps> = ({
  title,
  date,
  time,
  track,
  participants,
  maxParticipants,
  status
}) => {
  const statusColors = {
    'upcoming': 'bg-primary/10 text-primary hover:bg-primary/20',
    'in-progress': 'bg-orange-500/10 text-orange-500 hover:bg-orange-500/20',
    'completed': 'bg-muted text-muted-foreground hover:bg-muted/80'
  };

  return (
    <Card className="hover:border-primary/50 transition-colors">
      <CardHeader className="space-y-1">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-lg">{title}</h3>
          <Badge className={statusColors[status]} variant="secondary">
            {status.replace('-', ' ')}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="mr-2 h-4 w-4" />
            <span>{date} at {time}</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="mr-2 h-4 w-4" />
            <span>{track}</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Users className="mr-2 h-4 w-4" />
            <span>{participants} / {maxParticipants} participants</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};