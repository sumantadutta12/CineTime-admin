import { Chip, Stack } from "@mui/material";
import { movies } from "../data/mockData";
import { DataTable, FormFields, PageGrid, SectionCard } from "../components/Common";

function MoviesPage() {
  return (
    <PageGrid>
      <SectionCard
        title="Add / Edit Movie"
        subtitle="New Entry"
        md={5}
        accent="warm"
        actions={<Chip label="Poster + Trailer" color="primary" size="small" />}
      >
        <FormFields
          fields={[
            ["Movie Title", "The Last Metro"],
            ["Language", "Bangla"],
            ["Genre", "Thriller"],
            ["Duration", "2h 08m"],
            ["Release Date", "2026-03-21"],
            ["Trailer Link", "https://youtube.com/watch?v=..."]
          ]}
        />
        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mt: 2 }}>
          <Chip label="Now Showing" color="primary" />
          <Chip label="Coming Soon" variant="outlined" />
        </Stack>
      </SectionCard>
      <SectionCard title="Movie Inventory" subtitle="Library" md={7} accent="dark">
        <DataTable rows={movies} />
      </SectionCard>
    </PageGrid>
  );
}

export default MoviesPage;
