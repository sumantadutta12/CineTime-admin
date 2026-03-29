import { Box, Button, Chip, Stack } from "@mui/material";
import {
  activityHighlights,
  activityLogStats,
  activityLogs,
  activityPolicies
} from "../data/mockData";
import {
  DataTable,
  MetricCard,
  PageGrid,
  SectionCard,
  SimpleList
} from "../components/Common";

function AdminActivityLogsPage() {
  return (
    <PageGrid>
      {activityLogStats.map((item) => (
        <MetricCard key={item.label} item={item} />
      ))}

      <SectionCard
        title="Audit Stream"
        subtitle="Admin Activity Logs"
        md={8}
        accent="dark"
        actions={<Chip label="Real-time Ready" color="primary" size="small" />}
      >
        <DataTable rows={activityLogs} />
      </SectionCard>

      <SectionCard title="Logging Rules" subtitle="Audit Policy" md={4} accent="dark">
        <SimpleList items={activityPolicies} />
      </SectionCard>

      <SectionCard title="High-Impact Events" subtitle="Operational Summary" md={12} accent="dark">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(4, minmax(0, 1fr))" },
            gap: 1.5
          }}
        >
          {activityHighlights.map((item) => (
            <Box
              key={item.title}
              sx={(theme) => ({
                p: 2,
                borderRadius: "10px",
                border: "1px solid",
                borderColor: "divider",
                backgroundColor: theme.palette.background.paper
              })}
            >
              <Chip label={item.value} color="primary" size="small" sx={{ mb: 1.25 }} />
              <Box sx={{ fontWeight: 700, mb: 0.75 }}>{item.title}</Box>
              <Box sx={{ color: "text.secondary", fontSize: 14 }}>{item.copy}</Box>
            </Box>
          ))}
        </Box>

        <Stack direction={{ xs: "column", sm: "row" }} spacing={1.25} sx={{ mt: 2 }}>
          <Button variant="outlined">Export Audit CSV</Button>
          <Button variant="outlined">Filter by Manager</Button>
          <Button variant="contained">Open Event Trace</Button>
        </Stack>
      </SectionCard>
    </PageGrid>
  );
}

export default AdminActivityLogsPage;
