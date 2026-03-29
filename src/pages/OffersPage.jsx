import { Box, Button, Chip, Stack, Typography } from "@mui/material";
import {
  couponStats,
  coupons,
  offerCampaigns,
  offerPlaybook
} from "../data/mockData";
import {
  DataTable,
  MetricCard,
  PageGrid,
  SectionCard,
  SimpleList
} from "../components/Common";

function OffersPage() {
  return (
    <PageGrid>
      {couponStats.map((item) => (
        <MetricCard key={item.label} item={item} md={4} />
      ))}

      <SectionCard
        title="Offers & Coupons"
        subtitle="Promo Codes"
        md={8}
        accent="dark"
        actions={<Chip label="Campaign Ready" color="primary" size="small" />}
      >
        <DataTable rows={coupons} />
      </SectionCard>

      <SectionCard title="Promotion Playbook" subtitle="Campaign Ideas" md={4} accent="dark">
        <SimpleList items={offerPlaybook} />
      </SectionCard>

      <SectionCard title="Campaign Performance" subtitle="Promotion Snapshot" md={12} accent="dark">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(4, minmax(0, 1fr))" },
            gap: 1.5
          }}
        >
          {offerCampaigns.map((item) => (
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
          <Button variant="outlined">Export Campaigns</Button>
          <Button variant="outlined">Duplicate Offer</Button>
          <Button variant="contained">Create Promotion</Button>
        </Stack>
      </SectionCard>
    </PageGrid>
  );
}

export default OffersPage;
