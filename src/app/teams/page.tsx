import { PageHeader } from '@/components/PageHeader';

export default function TeamsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Teams"
        subtitle="Join a team to drive, learn, and compete with the racing community."
      />
      {/* Add your teams content here */}
      <p>Explore teams, manage your team memberships, or create a new team here.</p>
    </div>
  );
}