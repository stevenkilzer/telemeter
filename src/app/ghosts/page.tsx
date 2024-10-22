import { PageHeader } from '@/components/PageHeader';

export default function GhostsPage() {
  return (
    <div className="">
      <PageHeader
        title="Ghosts"
        subtitle="Ghost laps added to any of your ghost lap collections are synchronized directly to your PC."
      />
      {/* Add your ghosts content here */}
      <p>Manage your ghost laps and collections in this section.</p>
    </div>
  );
}