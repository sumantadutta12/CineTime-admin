import { Box, Paper, Typography } from "@mui/material";
import { theatreInsights, theatres } from "../data/mockData";
import { DataTable, FormFields, PageGrid, SectionCard } from "../components/Common";

function TheatresPage() {
  return (
    <PageGrid>
      <SectionCard title="Theatre Configuration" subtitle="Setup" md={4} accent="warm">
        <FormFields
          fields={[
            ["Theatre Name", "CineTime Downtown"],
            ["Location", "Kolkata"],
            ["Screens", "4"],
            ["Seat Types", "Silver / Gold / Platinum"],
            ["Default Layout", "120 seats"]
          ]}
        />
      </SectionCard>
      <SectionCard title="Branches & Screens" subtitle="Screen Management" md={8} accent="dark">
        <DataTable rows={theatres} />
      </SectionCard>
      <SectionCard title="Hall Insights" subtitle="Seat Layout" md={12} accent="red">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: 2
          }}
        >
          {theatreInsights.map((item) => (
            <Paper
              key={item.title}
              elevation={0}
              sx={{ p: 2.25, borderRadius: "10px", border: "1px solid", borderColor: "divider" }}
            >
              <Typography variant="overline" color="primary.light">
                {item.title}
              </Typography>
              <Typography variant="h4">{item.value}</Typography>
              <Typography variant="body2" color="text.secondary">
                {item.copy}
              </Typography>
            </Paper>
          ))}
        </Box>
      </SectionCard>
    </PageGrid>
  );
}

export default TheatresPage;
