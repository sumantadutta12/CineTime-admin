import { Box, Button, Chip, Stack, Typography } from "@mui/material";
import {
  seatLockIncidents,
  seatLockQueue,
  seatLockRules,
  seatLockStats,
  seatMapHealth
} from "../data/mockData";
import {
  DataTable,
  FormFields,
  MetricCard,
  PageGrid,
  SectionCard,
  SimpleList
} from "../components/Common";

function SeatLockingPage() {
  return (
    <PageGrid>
      {seatLockStats.map((item) => (
        <MetricCard key={item.label} item={item} md={4} />
      ))}

      <SectionCard
        title="Lock Engine Controls"
        subtitle="Timeout Rules"
        md={5}
        accent="dark"
        actions={<Chip label="Realtime Ready" color="primary" size="small" />}
      >
        <FormFields
          fields={[
            ["Default Timeout", "08 minutes"],
            ["Grace Buffer", "30 seconds"],
            ["Failure Release", "Immediate"],
            ["Manual Override", "Manager only"],
            ["Audit Logging", "Enabled"],
            ["Sync Channel", "Web + App + Counter"]
          ]}
        />
        <Stack direction={{ xs: "column", sm: "row" }} spacing={1.25} sx={{ mt: 2 }}>
          <Button variant="outlined">Update Rules</Button>
          <Button variant="contained">Force Unlock Expired</Button>
        </Stack>
      </SectionCard>

      <SectionCard title="Operational Rules" subtitle="Manager Checklist" md={7} accent="dark">
        <SimpleList items={seatLockRules} />
      </SectionCard>

      <SectionCard title="Active Lock Queue" subtitle="Live Seats" md={8} accent="dark">
        <DataTable rows={seatLockQueue} />
      </SectionCard>

      <SectionCard title="Seat Map Health" subtitle="Lock Distribution" md={4} accent="dark">
        <Stack spacing={1.25}>
          {seatMapHealth.map((item) => (
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
              <Typography variant="overline" color="primary.light">
                {item.title}
              </Typography>
              <Typography variant="h6">{item.value}</Typography>
              <Typography variant="body2" color="text.secondary">
                {item.copy}
              </Typography>
            </Box>
          ))}
        </Stack>
      </SectionCard>

      <SectionCard title="Incident Feed" subtitle="Lock Risk Review" md={12} accent="dark">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, minmax(0, 1fr))" },
            gap: 1.5
          }}
        >
          {seatLockIncidents.map((item) => (
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
              <Typography variant="overline" color="primary.light">
                {item.branch}
              </Typography>
              <Typography sx={{ fontWeight: 700, mb: 0.75 }}>{item.title}</Typography>
              <Typography variant="body2" color="text.secondary">
                {item.copy}
              </Typography>
            </Box>
          ))}
        </Box>
      </SectionCard>
    </PageGrid>
  );
}

export default SeatLockingPage;
