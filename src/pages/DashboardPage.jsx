import { Alert, Box, Chip, Paper, Stack, Typography, alpha } from "@mui/material";
import {
  alerts,
  bookings,
  branchCards,
  dashboardAiCards,
  dashboardAiNotes,
  dashboardStats,
  quickActions,
  shows
} from "../data/mockData";
import { DataTable, MetricCard, PageGrid, SectionCard } from "../components/Common";

function DashboardPage() {
  const quickActionTargets = {
    "Add Movie": "AddMovie",
    "Create Show": "CreateShow",
    "Block Seats": "BlockSeats",
    "Approve Refund": "ApproveRefund",
    "Push Offer": "PushOffer"
  };

  return (
    <PageGrid>
      {dashboardStats.map((item) => (
        <MetricCard key={item.label} item={item} />
      ))}
      <SectionCard title="Daily Control" subtitle="Quick Actions" md={8} accent="warm">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", xl: "repeat(5, 1fr)" },
            gap: 1.5
          }}
        >
          {quickActions.map((action) => (
            <Paper
              key={action.title}
              elevation={0}
              component="button"
              type="button"
              onClick={() => {
                const target = quickActionTargets[action.title];
                if (target) {
                  window.location.hash = `#${target}`;
                }
              }}
              sx={{
                p: 2,
                minHeight: 140,
                width: "100%",
                textAlign: "left",
                borderRadius: "10px",
                border: "1px solid",
                borderColor: "divider",
                backgroundColor: (theme) =>
                  alpha(theme.palette.background.paper, theme.palette.mode === "dark" ? 0.98 : 0.96),
                transition: "transform 180ms ease, border-color 180ms ease",
                cursor: "pointer",
                "&:hover": {
                  transform: "translateY(-2px)",
                  borderColor: alpha("rgb(80 27 148)", 0.24)
                },
                "&:focus-visible": {
                  outline: "2px solid rgb(80 27 148)",
                  outlineOffset: 2
                }
              }}
            >
              <Typography fontWeight={800}>{action.title}</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                {action.copy}
              </Typography>
            </Paper>
          ))}
        </Box>
      </SectionCard>
      <SectionCard title="Operations Watch" subtitle="Alerts" md={4} accent="red">
        <Stack spacing={1.25}>
          {alerts.map((item) => (
            <Alert key={item} severity="warning" variant="outlined">
              {item}
            </Alert>
          ))}
        </Stack>
      </SectionCard>
      <SectionCard title="Live Branch Status" subtitle="Branch Snapshot" md={5} accent="dark">
        <Stack spacing={1.25}>
          {branchCards.map((branch) => (
            <Paper
              key={branch.name}
              elevation={0}
              sx={(theme) => ({
                p: 2,
                borderRadius: "10px",
                border: "1px solid",
                borderColor: "divider",
                backgroundColor: alpha(
                  theme.palette.background.paper,
                  theme.palette.mode === "dark" ? 0.98 : 0.94
                )
              })}
            >
              <Stack direction="row" justifyContent="space-between" spacing={2}>
                <Box>
                  <Typography fontWeight={700}>{branch.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {branch.footfall} visitors today
                  </Typography>
                </Box>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                  <Chip size="small" label={branch.occupancy} color="primary" />
                  <Chip size="small" label={branch.status} variant="outlined" />
                </Stack>
              </Stack>
            </Paper>
          ))}
        </Stack>
      </SectionCard>
      <SectionCard title="Front Desk Heat Map" subtitle="Top Performing Shows" md={7} accent="dark">
        <Stack spacing={1.25}>
          {shows.map((show) => (
            <Paper
              key={`${show.movie}-${show.time}`}
              elevation={0}
              sx={(theme) => ({
                p: 2,
                borderRadius: "10px",
                border: "1px solid",
                borderColor: "divider",
                backgroundColor: alpha(
                  theme.palette.background.paper,
                  theme.palette.mode === "dark" ? 0.98 : 0.94
                )
              })}
            >
              <Stack direction="row" justifyContent="space-between" spacing={2}>
                <Box>
                  <Typography fontWeight={700}>{show.movie}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {show.theatre}
                  </Typography>
                </Box>
                <Box textAlign="right">
                  <Typography fontWeight={700}>{show.time}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {show.seatsLeft} seats left
                  </Typography>
                </Box>
              </Stack>
            </Paper>
          ))}
        </Stack>
      </SectionCard>
      <SectionCard
        title="AI Operations Brief"
        subtitle="Smart Suggestions"
        md={12}
        accent="dark"
        actions={<Chip label="Realtime AI Ready" color="primary" size="small" />}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", xl: "1.15fr 0.85fr" },
            gap: 2
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(2, minmax(0, 1fr))" },
              gap: 1.5
            }}
          >
            {dashboardAiCards.map((item) => (
              <Paper
                key={item.title}
                elevation={0}
                sx={(theme) => ({
                  p: 2,
                  borderRadius: "10px",
                  border: "1px solid",
                  borderColor: "divider",
                  backgroundColor: alpha(
                    theme.palette.background.paper,
                    theme.palette.mode === "dark" ? 0.98 : 0.96
                  )
                })}
              >
                <Typography variant="overline" color="primary.light">
                  {item.title}
                </Typography>
                <Typography variant="h5" sx={{ mt: 0.5 }}>
                  {item.value}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 0.8 }}>
                  {item.copy}
                </Typography>
              </Paper>
            ))}
          </Box>

          <Paper
            elevation={0}
            sx={(theme) => ({
              p: 2,
              borderRadius: "10px",
              border: "1px solid",
              borderColor: "divider",
              backgroundColor: alpha(
                theme.palette.background.paper,
                theme.palette.mode === "dark" ? 0.98 : 0.96
              )
            })}
          >
            <Typography variant="overline" color="primary.light">
              Manager Recommendations
            </Typography>
            <Stack spacing={1.1} sx={{ mt: 1.25 }}>
              {dashboardAiNotes.map((item) => (
                <Paper
                  key={item}
                  elevation={0}
                  sx={(theme) => ({
                    p: 1.5,
                    borderRadius: "10px",
                    border: "1px solid",
                    borderColor: "divider",
                    backgroundColor: alpha(
                      theme.palette.background.default,
                      theme.palette.mode === "dark" ? 0.58 : 0.5
                    )
                  })}
                >
                  <Typography variant="body2" color="text.secondary">
                    {item}
                  </Typography>
                </Paper>
              ))}
            </Stack>
          </Paper>
        </Box>
      </SectionCard>
      <SectionCard title="Front Desk Feed" subtitle="Recent Bookings" md={12} accent="dark">
        <DataTable rows={bookings} />
      </SectionCard>
    </PageGrid>
  );
}

export default DashboardPage;
