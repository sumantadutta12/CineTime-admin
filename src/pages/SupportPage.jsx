import { Box, Button, Chip, Stack, Typography } from "@mui/material";
import {
  supportActions,
  supportCategories,
  supportLanes,
  supportStats,
  supportTickets
} from "../data/mockData";
import {
  DataTable,
  MetricCard,
  PageGrid,
  SectionCard,
  SimpleList
} from "../components/Common";

function SupportPage() {
  return (
    <PageGrid>
      {supportStats.map((item) => (
        <MetricCard key={item.label} item={item} />
      ))}

      <SectionCard
        title="Live Complaint Queue"
        subtitle="Support Desk"
        md={8}
        accent="dark"
        actions={<Chip label="SLA Tracking" color="primary" size="small" />}
      >
        <DataTable rows={supportTickets} />
      </SectionCard>

      <SectionCard title="Resolution Playbook" subtitle="Manager Rules" md={4} accent="dark">
        <SimpleList items={supportActions} />
      </SectionCard>

      <SectionCard title="Escalation Lanes" subtitle="Issue Watch" md={12} accent="dark">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(4, minmax(0, 1fr))" },
            gap: 1.5
          }}
        >
          {supportLanes.map((item) => (
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
              <Typography sx={{ fontWeight: 700, mb: 0.75 }}>{item.title}</Typography>
              <Typography variant="body2" color="text.secondary">
                {item.copy}
              </Typography>
            </Box>
          ))}
        </Box>
      </SectionCard>

      <SectionCard title="Issue Categories" subtitle="Complaint Breakdown" md={12} accent="dark">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(4, minmax(0, 1fr))" },
            gap: 1.5
          }}
        >
          {supportCategories.map((item) => (
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
              <Typography sx={{ fontWeight: 700, mb: 0.75 }}>{item.title}</Typography>
              <Typography variant="body2" color="text.secondary">
                {item.copy}
              </Typography>
            </Box>
          ))}
        </Box>

        <Stack direction={{ xs: "column", sm: "row" }} spacing={1.25} sx={{ mt: 2 }}>
          <Button variant="outlined">Export Ticket Log</Button>
          <Button variant="outlined">Escalation Rules</Button>
          <Button variant="contained">Create Support Ticket</Button>
        </Stack>
      </SectionCard>
    </PageGrid>
  );
}

export default SupportPage;
