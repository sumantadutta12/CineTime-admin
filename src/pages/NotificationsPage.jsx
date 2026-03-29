import { notifications } from "../data/mockData";
import { DataTable, FormFields, PageGrid, SectionCard } from "../components/Common";

function NotificationsPage() {
  return (
    <PageGrid>
      <SectionCard title="Notification Composer" subtitle="New Broadcast" md={5} accent="warm">
        <FormFields
          fields={[
            ["Title", "Avengers now available! Book now"],
            ["Audience", "Users"],
            ["Channel", "Push notification"],
            ["Schedule", "Tomorrow, 10:00 AM"]
          ]}
        />
      </SectionCard>
      <SectionCard title="Scheduled Notifications" subtitle="Queue" md={7} accent="dark">
        <DataTable rows={notifications} />
      </SectionCard>
    </PageGrid>
  );
}

export default NotificationsPage;
