import {
  Box,
  Button,
  Chip,
  Paper,
  Stack,
  TextField,
  Typography,
  alpha
} from "@mui/material";
import SellRoundedIcon from "@mui/icons-material/SellRounded";
import CampaignRoundedIcon from "@mui/icons-material/CampaignRounded";
import { PageGrid, SectionCard } from "../components/Common";

function PushOfferPage() {
  return (
    <PageGrid>
      <SectionCard
        title="Push Offer"
        subtitle="Campaign Launch"
        md={8}
        accent="dark"
        actions={<Chip label="Audience Ready" color="primary" size="small" />}
      >
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", xl: "1.15fr 0.85fr" }, gap: 2 }}>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))" }, gap: 1.5 }}>
            <TextField label="Offer Name" defaultValue="Weekend Premiere Boost" fullWidth />
            <TextField label="Coupon Code" defaultValue="WEEKEND20" fullWidth />
            <TextField label="Discount Type" defaultValue="20% off" fullWidth />
            <TextField label="Audience" defaultValue="Returning users" fullWidth />
            <TextField label="Valid From" defaultValue="2026-04-26 05:00 PM" fullWidth />
            <TextField label="Valid Until" defaultValue="2026-04-28 11:59 PM" fullWidth />
            <TextField label="Applicable Branches" defaultValue="Downtown, South Square" fullWidth />
            <TextField label="Applicable Shows" defaultValue="Evening and late-night shows" fullWidth />
            <TextField
              label="Campaign Copy"
              defaultValue="Weekend release is live. Unlock 20% off on your next booking before the best seats go."
              multiline
              minRows={5}
              fullWidth
              sx={{ gridColumn: { xs: "span 1", sm: "span 2" } }}
            />
          </Box>

          <Stack spacing={1.5}>
            {[
              {
                icon: SellRoundedIcon,
                title: "Redemption Scope",
                copy: "Covers premium evening slots without affecting already near-full IMAX sessions."
              },
              {
                icon: CampaignRoundedIcon,
                title: "Broadcast Mix",
                copy: "Push notification, in-app banner, and support-led promotion can run together."
              }
            ].map((item) => {
              const Icon = item.icon;
              return (
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
                  <Stack direction="row" spacing={1.5}>
                    <Box
                      sx={{
                        width: 42,
                        height: 42,
                        borderRadius: "10px",
                        display: "grid",
                        placeItems: "center",
                        bgcolor: alpha("rgb(80 27 148)", 0.16),
                        color: "primary.light"
                      }}
                    >
                      <Icon fontSize="small" />
                    </Box>
                    <Box>
                      <Typography fontWeight={700}>{item.title}</Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                        {item.copy}
                      </Typography>
                    </Box>
                  </Stack>
                </Paper>
              );
            })}
          </Stack>
        </Box>
      </SectionCard>

      <SectionCard title="Launch Controls" subtitle="Promotion Actions" md={4} accent="dark">
        <Stack spacing={1.25}>
          {[
            ["Expected Reach", "4.8K users"],
            ["Coupon Limit", "250 redemptions"],
            ["Projected Lift", "+18% booking rate"],
            ["Approval State", "Ready to launch"]
          ].map(([label, value]) => (
            <Paper key={label} elevation={0} sx={{ p: 2, borderRadius: "10px", border: "1px solid", borderColor: "divider" }}>
              <Typography variant="overline" color="primary.light">
                {label}
              </Typography>
              <Typography variant="h6">{value}</Typography>
            </Paper>
          ))}
        </Stack>
      </SectionCard>

      <SectionCard title="Promotion Actions" subtitle="Go Live" md={12} accent="dark">
        <Stack direction={{ xs: "column", sm: "row" }} spacing={1.25}>
          <Button variant="outlined">Save Campaign</Button>
          <Button variant="outlined">Preview Message</Button>
          <Button variant="contained">Push Offer</Button>
        </Stack>
      </SectionCard>
    </PageGrid>
  );
}

export default PushOfferPage;
