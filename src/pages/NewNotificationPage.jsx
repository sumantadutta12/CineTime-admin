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
import NotificationsActiveRoundedIcon from "@mui/icons-material/NotificationsActiveRounded";
import SmsRoundedIcon from "@mui/icons-material/SmsRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import { PageGrid, SectionCard } from "../components/Common";

function NewNotificationPage() {
  return (
    <PageGrid>
      <SectionCard title="Broadcast Composer" subtitle="New Notification" md={8} accent="dark" actions={<Chip label="Push First" color="primary" size="small" />}>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", xl: "1.15fr 0.85fr" }, gap: 2 }}>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))" }, gap: 1.5 }}>
            <TextField label="Campaign Title" defaultValue="Weekend Premiere Alert" fullWidth />
            <TextField label="Notification Type" defaultValue="Push Notification" fullWidth />
            <TextField label="Audience Segment" defaultValue="Users near Downtown branch" fullWidth />
            <TextField label="Delivery Time" defaultValue="Today, 06:00 PM" fullWidth />
            <TextField label="CTA Label" defaultValue="Book Now" fullWidth />
            <TextField label="Target Page" defaultValue="Movie details / Midnight Show" fullWidth />
            <TextField label="Message" defaultValue="Midnight Show is now open for weekend booking. Grab prime seats before they sell out." multiline minRows={5} fullWidth sx={{ gridColumn: { xs: 'span 1', sm: 'span 2' } }} />
          </Box>

          <Paper elevation={0} sx={(theme) => ({ p: 2, borderRadius: "10px", border: "1px solid", borderColor: "divider", backgroundColor: alpha(theme.palette.background.paper, theme.palette.mode === "dark" ? 0.98 : 0.96) })}>
            <Stack spacing={1.5}>
              {[
                { icon: NotificationsActiveRoundedIcon, title: "Push Blast", copy: "Immediate release to opted-in mobile users." },
                { icon: SmsRoundedIcon, title: "SMS Backup", copy: "Short-format reminder for failed push deliveries." },
                { icon: EmailRoundedIcon, title: "Email Follow-up", copy: "Rich media format for upcoming release campaigns." }
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

      <SectionCard title="Preview Copy" subtitle="Delivery Snapshot" md={4} accent="dark">
        <Paper elevation={0} sx={(theme) => ({ p: 2, borderRadius: "10px", border: "1px solid", borderColor: "divider", backgroundColor: alpha(theme.palette.background.paper, theme.palette.mode === "dark" ? 0.98 : 0.96) })}>
          <Typography variant="overline" color="primary.light">Push Preview</Typography>
          <Typography variant="h6" sx={{ mt: 0.5 }}>Weekend Premiere Alert</Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            Midnight Show is now open for weekend booking. Grab prime seats before they sell out.
          </Typography>
          <Chip label="Book Now" color="primary" size="small" sx={{ mt: 2 }} />
        </Paper>
      </SectionCard>

      <SectionCard title="Publishing Controls" subtitle="Delivery Actions" md={12} accent="dark">
        <Typography variant="body2" color="text.secondary">
          Queue the notification for scheduled delivery, send a test message, or broadcast it live to the selected audience.
        </Typography>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={1.25} sx={{ mt: 2 }}>
          <Button variant="outlined">Save Draft</Button>
          <Button variant="outlined">Send Test</Button>
          <Button variant="contained">Publish Notification</Button>
        </Stack>
      </SectionCard>
    </PageGrid>
  );
}

export default NewNotificationPage;
