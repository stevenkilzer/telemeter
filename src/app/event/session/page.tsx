'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { PageHeader } from '@/components/PageHeader';
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Cloud, Thermometer } from "lucide-react";

interface WeatherInfo {
  trackTemp: number;
  airTemp: number;
  cloudCover: number;
}

interface LapData {
  LapID: number;
  Run: number;
  Lap: string;
  'Lap time': string;
  'Fuel used': number;
  'Pit in': string;
  'Pit out': number;
}

interface GroupedData {
  [run: number]: {
    laps: LapData[];
    weather: WeatherInfo;
  };
}

export default function SessionPage() {
  const [groupedData, setGroupedData] = useState<GroupedData>({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSessionData = async () => {
      try {
        setIsLoading(true);
        const { data, error } = await supabase
          .from('Session')
          .select(`
            LapID,
            Run,
            Lap,
            "Lap time",
            "Fuel used",
            "Pit in",
            "Pit out",
            "Track temp",
            "Air temperature",
            "Cloud cover"
          `)
          .order('Run', { ascending: true })
          .order('LapID', { ascending: true });

        if (error) throw error;

        const grouped = (data || []).reduce<GroupedData>((acc, lap) => {
          const run = lap.Run;
          if (!acc[run]) {
            acc[run] = {
              laps: [],
              weather: {
                trackTemp: lap['Track temp'],
                airTemp: lap['Air temperature'],
                cloudCover: lap['Cloud cover'],
              }
            };
          }
          acc[run].laps.push(lap);
          return acc;
        }, {});

        setGroupedData(grouped);
      } catch (err) {
        console.error('Error fetching session data:', err);
        setError('Failed to load session data. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchSessionData();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="animate-pulse">Loading session data...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-full text-destructive">
        {error}
      </div>
    );
  }

  return (
    <div className="">
      <PageHeader
        title="Session Data"
        subtitle="View detailed information about your session laps"
      />
      
      {Object.entries(groupedData).map(([run, data]) => (
        <div key={run} className="space-y-0 mb-12">
          <Card className="rounded-none border-0 border-x border-t">
            <CardHeader>
              <CardTitle>Run {run}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4">
                <div className="flex items-center space-x-2">
                  <Thermometer className="w-4 h-4 text-muted-foreground" />
                  <span>Track: {data.weather.trackTemp}°C</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Thermometer className="w-4 h-4 text-muted-foreground" />
                  <span>Air: {data.weather.airTemp}°C</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Cloud className="w-4 h-4 text-muted-foreground" />
                  <span>Cloud Cover: {data.weather.cloudCover}%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="border border-border">
            <Table>
              <TableHeader>
                <TableRow className="border-b border-border">
                  <TableHead>Lap</TableHead>
                  <TableHead>Lap Time</TableHead>
                  <TableHead>Fuel Used</TableHead>
                  <TableHead>Pit</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
  {data.laps.map((lap: LapData, index: number) => (
    <TableRow
      key={lap.LapID}
      className={`
        ${index !== data.laps.length - 1 ? 'border-b border-border' : ''}
        [&>td]:border-0
      `}
    >
      <TableCell>{lap.Lap}</TableCell>
      <TableCell>{lap['Lap time']}</TableCell>
      <TableCell>{lap['Fuel used']?.toFixed(2) || '-'} L</TableCell>
      <TableCell className="space-x-2">
        {lap['Pit in'] === '1' && <Badge variant="outline">In Lap</Badge>}
        {lap['Pit out'] === 1 && <Badge variant="outline">Out Lap</Badge>}
      </TableCell>
    </TableRow>
  ))}
</TableBody>
            </Table>
          </div>
        </div>
      ))}
    </div>
  );
}