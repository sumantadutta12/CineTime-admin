import { bookings } from "../data/mockData";
import { DataTable, PageGrid, SectionCard, SimpleList } from "../components/Common";

function BookingsPage() {
  return (
    <PageGrid>
      <SectionCard title="Booking Workflow" subtitle="Action Queue" md={4} accent="warm">
        <SimpleList
          items={[
            "View all bookings",
            "Track booking ID and user",
            "Cancel booking manually",
            "Approve refund status"
          ]}
        />
      </SectionCard>
      <SectionCard title="Booking Ledger" subtitle="Reservation Log" md={8} accent="dark">
        <DataTable rows={bookings} />
      </SectionCard>
    </PageGrid>
  );
}

export default BookingsPage;
