import { reviews } from "../data/mockData";
import { DataTable, PageGrid, SectionCard, SimpleList } from "../components/Common";

function ReviewsPage() {
  return (
    <PageGrid>
      <SectionCard title="Ratings & Reviews" subtitle="Community Voice" md={8} accent="dark">
        <DataTable rows={reviews} />
      </SectionCard>
      <SectionCard title="Review Actions" subtitle="Moderation" md={4} accent="red">
        <SimpleList
          items={[
            "Delete inappropriate reviews",
            "Watch low-rated shows",
            "Detect spam bursts",
            "Escalate abusive content"
          ]}
        />
      </SectionCard>
    </PageGrid>
  );
}

export default ReviewsPage;
