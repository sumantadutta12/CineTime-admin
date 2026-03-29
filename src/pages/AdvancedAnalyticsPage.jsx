import { Box, Paper, Stack, Typography, alpha } from "@mui/material";
import {
  analyticsBranchPerformance,
  analyticsHighlights,
  analyticsMoviePerformance,
  analyticsRevenueTrend,
  analyticsStats
} from "../data/mockData";
import {
  DataTable,
  MetricCard,
  PageGrid,
  SectionCard,
  SimpleList
} from "../components/Common";

function AdvancedAnalyticsPage() {
  return (
    <PageGrid>
      {analyticsStats.map((item) => (
        <MetricCard key={item.label} item={item} />
      ))}

      <SectionCard title="Revenue Momentum" subtitle="Weekly Trend" md={7} accent="dark">
        <DataTable rows={analyticsRevenueTrend} />
      </SectionCard>

      <SectionCard title="Key Highlights" subtitle="Decision Summary" md={5} accent="dark">
        <SimpleList items={analyticsHighlights} />
      </SectionCard>

      <SectionCard title="Branch Performance" subtitle="Location Comparison" md={6} accent="dark">
        <DataTable rows={analyticsBranchPerformance} />
      </SectionCard>

      <SectionCard title="Top Movie Performance" subtitle="Revenue by Title" md={6} accent="dark">
        <DataTable rows={analyticsMoviePerformance} />
      </SectionCard>

      <SectionCard title="Occupancy Signal" subtitle="Quick View" md={12} accent="dark">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(4, minmax(0, 1fr))" },
            gap: 1.5
          }}
        >
          {[
            ["Prime Time Occupancy", "92%", "Saturday evening slots remain near full capacity."],
            ["Morning Utilization", "44%", "Low fill rate across weekday morning shows."],
            ["Premium Seat Mix", "31%", "Gold, Platinum, and recliner seats drive higher yield."],
            ["Refund Impact", "₹0.38L", "Cancellation-linked revenue leakage this month."]
          ].map(([title, value, copy]) => (
            <Paper
              key={title}
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
                {title}
              </Typography>
              <Typography variant="h5">{value}</Typography>
              <Typography variant="body2" color="text.secondary">
                {copy}
              </Typography>
            </Paper>
          ))}
        </Box>
      </SectionCard>
    </PageGrid>
  );
}

export default AdvancedAnalyticsPage;
