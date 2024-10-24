export interface Lap {
    LapID: number;
    Run: number;
    Lap: string;
    'Lap time': string;
    'Fuel used': number;
    'Pit in': string;
    'Pit out': number;
  }
  
  export interface Analysis {
    id: string;
    title: string;
    description?: string;
    createdAt: Date;
    updatedAt: Date;
    laps: Lap[];
  }
  