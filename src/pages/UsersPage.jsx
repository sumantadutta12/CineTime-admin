import { Box, Button, Chip, Stack, Typography } from "@mui/material";
import {
  userAudienceStats,
  userControls,
  userSegments,
  users
} from "../data/mockData";
import {
  DataTable,
  MetricCard,
  PageGrid,
  SectionCard,
  SimpleList
} from "../components/Common";

function UsersPage() {
  return (
    <PageGrid>
      {userAudienceStats.map((item) => (
        <MetricCard key={item.label} item={item} />
      ))}

      <SectionCard
        title="Audience Profiles"
        subtitle="User Management"
        md={8}
        accent="dark"
        actions={<Chip label="Audience Watch" color="primary" size="small" />}
      >
        <DataTable rows={users} />
      </SectionCard>

      <SectionCard title="Control Tools" subtitle="Support Use Case" md={4} accent="dark">
        <SimpleList items={userControls} />
      </SectionCard>

      <SectionCard title="Audience Segments" subtitle="Retention View" md={12} accent="dark">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(4, minmax(0, 1fr))" },
            gap: 1.5
          }}
        >
          {userSegments.map((item) => (
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
          <Button variant="outlined">Export Users</Button>
          <Button variant="outlined">View Fraud Flags</Button>
          <Button variant="contained">Create VIP Segment</Button>
        </Stack>
      </SectionCard>
    </PageGrid>
  );
}

export default UsersPage;
