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
import LoyaltyRoundedIcon from "@mui/icons-material/LoyaltyRounded";
import { PageGrid, SectionCard } from "../components/Common";

function NewOfferPage() {
  return (
    <PageGrid>
      <SectionCard title="Campaign Setup" subtitle="New Offer" md={8} accent="dark" actions={<Chip label="Promo Ready" color="primary" size="small" />}>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", xl: "1.15fr 0.85fr" }, gap: 2 }}>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))" }, gap: 1.5 }}>
            <TextField label="Campaign Name" defaultValue="Weekend Frenzy" fullWidth />
            <TextField label="Promo Code" defaultValue="WEEKEND120" fullWidth />
            <TextField label="Discount Type" defaultValue="Flat" fullWidth />
            <TextField label="Discount Value" defaultValue="৳120" fullWidth />
            <TextField label="Valid From" defaultValue="2026-04-18" fullWidth />
            <TextField label="Valid Until" defaultValue="2026-04-30" fullWidth />
            <TextField label="Usage Limit" defaultValue="500 redemptions" fullWidth />
            <TextField label="Audience" defaultValue="All signed-in users" fullWidth />
            <TextField label="Restrictions" defaultValue="Applicable only on Gold and Platinum seats after 5 PM." multiline minRows={4} fullWidth sx={{ gridColumn: { xs: 'span 1', sm: 'span 2' } }} />
          </Box>

          <Paper elevation={0} sx={(theme) => ({ p: 2, borderRadius: "10px", border: "1px solid", borderColor: "divider", backgroundColor: alpha(theme.palette.background.paper, theme.palette.mode === "dark" ? 0.98 : 0.96) })}>
            <Stack spacing={1.5}>
              {[
                { icon: SellRoundedIcon, title: "Flat Discount", copy: "Clear value-based offer for fast conversion." },
                { icon: CampaignRoundedIcon, title: "Promo Broadcast", copy: "Push to homepage banner and notifications instantly." },
                { icon: LoyaltyRoundedIcon, title: "Retention Push", copy: "Best suited for inactive users from last 30 days." }
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <Paper key={item.title} elevation={0} sx={(theme) => ({ p: 2, borderRadius: "10px", border: "1px solid", borderColor: "divider", backgroundColor: alpha(theme.palette.primary.main, theme.palette.mode === "dark" ? 0.08 : 0.06) })}>
                    <Stack direction="row" spacing={1.5}>
                      <Box sx={{ width: 42, height: 42, borderRadius: "10px", display: "grid", placeItems: "center", bgcolor: alpha("rgb(80 27 148)", 0.16), color: "primary.light" }}>
                        <Icon fontSize="small" />
                      </Box>
                      <Box>
                        <Typography fontWeight={700}>{item.title}</Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>{item.copy}</Typography>
                      </Box>
                    </Stack>
                  </Paper>
                );
              })}
            </Stack>
          </Paper>
        </Box>
      </SectionCard>

      <SectionCard title="Eligibility Matrix" subtitle="Audience Rules" md={4} accent="dark">
        <Stack spacing={1.25}>
          {["New users only", "Weekend evening shows", "Minimum basket ৳500", "Valid once per account"].map((rule) => (
            <Paper key={rule} elevation={0} sx={(theme) => ({ p: 2, borderRadius: "10px", border: "1px solid", borderColor: "divider", backgroundColor: alpha(theme.palette.background.paper, theme.palette.mode === "dark" ? 0.98 : 0.96) })}>
              <Typography variant="body2" color="text.secondary">{rule}</Typography>
            </Paper>
          ))}
        </Stack>
      </SectionCard>

      <SectionCard title="Release Actions" subtitle="Campaign Launch" md={12} accent="dark">
        <Typography variant="body2" color="text.secondary">
          Save this offer for review, activate it instantly, or publish it together with an app notification.
        </Typography>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={1.25} sx={{ mt: 2 }}>
          <Button variant="outlined">Save Draft</Button>
          <Button variant="outlined">Attach Notification</Button>
          <Button variant="contained">Publish Offer</Button>
        </Stack>
      </SectionCard>
    </PageGrid>
  );
}

export default NewOfferPage;
