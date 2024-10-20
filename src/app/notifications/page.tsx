import { PageHeader } from '@/components/PageHeader';

export default function NotificationsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Notifications"
        subtitle="Stay updated with your latest alerts and messages"
      />
      {/* Add your notifications content here */}
      <p>Your notifications will be displayed here.</p>
    </div>
  );
}