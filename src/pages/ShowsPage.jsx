import { shows } from "../data/mockData";
import { DataTable, FormFields, PageGrid, SectionCard } from "../components/Common";

function ShowsPage() {
  return (
    <PageGrid>
      <SectionCard title="Show Builder" subtitle="New Show" md={5} accent="warm">
        <FormFields
          fields={[
            ["Movie", "The Last Metro"],
            ["Theatre", "Downtown"],
            ["Screen", "Screen 4"],
            ["Show Time", "07:40 PM"],
            ["Base Price", "₹430"],
            ["Repeat", "Daily"]
          ]}
        />
      </SectionCard>
      <SectionCard title="All Shows" subtitle="Schedule" md={7} accent="dark">
        <DataTable rows={shows} />
      </SectionCard>
    </PageGrid>
  );
}

export default ShowsPage;
