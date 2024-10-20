import { PageHeader } from '@/components/PageHeader';

export default function TeamsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Teams"
        subtitle="Join a team to drive, learn, and compete with the racing community."
        primaryCTA={{
          label: "Join a Team",
          onClick: () => console.log("Join a Team clicked"),
        }}
        secondaryCTA={{
          label: "Create a Team",
          onClick: () => console.log("Create a Team clicked"),
        }}
      />
      {/* Add your teams content here */}
      <p>Explore teams, manage your team memberships, or create a new team here.</p>
    </div>
  );
}