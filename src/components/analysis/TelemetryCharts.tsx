// components/analysis/TelemetryCharts.tsx
import React from 'react';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

interface TelemetryChartsProps {
  data: {
    distance: number;
    speed: number;
    throttle: number;
    brake: number;
    steeringAngle: number;
    gear: number;
  }[];
  selectedSector?: [number, number];
}

export function TelemetryCharts({ data, selectedSector }: TelemetryChartsProps) {
  // Filter data based on selected sector if provided
  const chartData = selectedSector 
    ? data.filter(d => d.distance >= selectedSector[0] && d.distance <= selectedSector[1])
    : data;

  return (
    <div className="space-y-4">
      {/* Speed Chart */}
      <div className="h-48 bg-card rounded-lg p-4">
        <ChartContainer
          config={{
            speed: {
              label: "Speed (km/h)",
              color: "hsl(var(--chart-1))"
            }
          }}
        >
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
            <XAxis 
              dataKey="distance" 
              label={{ value: 'Distance (m)', position: 'insideBottom', offset: -10 }} 
            />
            <YAxis 
              domain={[0, 300]} 
              label={{ value: 'Speed (km/h)', angle: -90, position: 'insideLeft', offset: 10 }}
            />
            <Line
              type="monotone"
              dataKey="speed"
              stroke="var(--color-speed)"
              dot={false}
              strokeWidth={1.5}
            />
            <ChartTooltip />
          </LineChart>
        </ChartContainer>
      </div>

      {/* Pedals Chart */}
      <div className="h-48 bg-card rounded-lg p-4">
        <ChartContainer
          config={{
            throttle: {
              label: "Throttle (%)",
              color: "hsl(var(--chart-2))"
            },
            brake: {
              label: "Brake (%)",
              color: "hsl(var(--chart-3))"
            }
          }}
        >
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
            <XAxis dataKey="distance" />
            <YAxis domain={[0, 100]} />
            <Line
              type="monotone"
              dataKey="throttle"
              stroke="var(--color-throttle)"
              dot={false}
              strokeWidth={1.5}
            />
            <Line
              type="monotone"
              dataKey="brake"
              stroke="var(--color-brake)"
              dot={false}
              strokeWidth={1.5}
            />
            <ChartTooltip />
          </LineChart>
        </ChartContainer>
      </div>

      {/* Steering Chart */}
      <div className="h-48 bg-card rounded-lg p-4">
        <ChartContainer
          config={{
            steering: {
              label: "Steering Angle (deg)",
              color: "hsl(var(--chart-4))"
            }
          }}
        >
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
            <XAxis dataKey="distance" />
            <YAxis domain={[-180, 180]} />
            <Line
              type="monotone"
              dataKey="steeringAngle"
              stroke="var(--color-steering)"
              dot={false}
              strokeWidth={1.5}
            />
            <ChartTooltip />
          </LineChart>
        </ChartContainer>
      </div>

      {/* Gear Chart */}
      <div className="h-48 bg-card rounded-lg p-4">
        <ChartContainer
          config={{
            gear: {
              label: "Gear",
              color: "hsl(var(--chart-5))"
            }
          }}
        >
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
            <XAxis dataKey="distance" />
            <YAxis domain={[0, 8]} ticks={[0, 1, 2, 3, 4, 5, 6, 7, 8]} />
            <Line
              type="monotone"
              dataKey="gear"
              stroke="var(--color-gear)"
              dot={false}
              strokeWidth={1.5}
            />
            <ChartTooltip />
          </LineChart>
        </ChartContainer>
      </div>
    </div>
  );
}