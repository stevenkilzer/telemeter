import { PageHeader } from '@/components/PageHeader';

export default function StreamsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Streams"
        subtitle="Nothing on TV? Too tired to race? How about watching what other Garage 61 members are up to?"
      />
      {/* Add your streams content here */}
      <p>Watch live streams and recordings from other Garage 61 members here.</p>
    </div>
  );
}