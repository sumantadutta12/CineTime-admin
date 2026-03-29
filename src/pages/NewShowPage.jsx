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
import ScheduleRoundedIcon from "@mui/icons-material/ScheduleRounded";
import LocalOfferRoundedIcon from "@mui/icons-material/LocalOfferRounded";
import MovieFilterRoundedIcon from "@mui/icons-material/MovieFilterRounded";
import { PageGrid, SectionCard } from "../components/Common";

function NewShowPage() {
  return (
    <PageGrid>
      <SectionCard title="Show Builder" subtitle="New Show" md={8} accent="dark" actions={<Chip label="Prime Time" color="primary" size="small" />}>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", xl: "1.2fr 0.8fr" }, gap: 2 }}>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))" }, gap: 1.5 }}>
            <TextField label="Movie" defaultValue="Midnight Show" fullWidth />
            <TextField label="Theatre" defaultValue="CineTime Downtown" fullWidth />
            <TextField label="Screen" defaultValue="Screen 2" fullWidth />
            <TextField label="Show Date" defaultValue="2026-04-20" fullWidth />
            <TextField label="Start Time" defaultValue="07:40 PM" fullWidth />
            <TextField label="End Time" defaultValue="09:54 PM" fullWidth />
            <TextField label="Base Price" defaultValue="৳320" fullWidth />
            <TextField label="Repeat Rule" defaultValue="Daily until Apr 27" fullWidth />
            <TextField label="Notes" defaultValue="Festival week pricing with advance booking open." multiline minRows={4} fullWidth sx={{ gridColumn: { xs: "span 1", sm: "span 2" } }} />
          </Box>

          <Paper elevation={0} sx={(theme) => ({ p: 2, borderRadius: "10px", border: "1px solid", borderColor: "divider", backgroundColor: alpha(theme.palette.background.paper, theme.palette.mode === "dark" ? 0.98 : 0.96) })}>
            <Stack spacing={1.5}>
              {[
                { icon: ScheduleRoundedIcon, title: "Daily Rotation", copy: "Auto-repeat ready with clean turnaround spacing." },
                { icon: LocalOfferRoundedIcon, title: "Weekend Pricing", copy: "Premium rate enabled for Friday to Sunday slots." },
                { icon: MovieFilterRoundedIcon, title: "Seat Release", copy: "156 seats available after maintenance hold removal." }
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

      <SectionCard title="Seat Pricing Grid" subtitle="Fare Bands" md={4} accent="dark">
        <Stack spacing={1.25}>
          {[
            ["Silver", "৳280", "84 seats"],
            ["Gold", "৳360", "48 seats"],
            ["Platinum", "৳460", "20 seats"],
            ["Recliner", "৳650", "4 seats"]
          ].map(([type, price, count]) => (
            <Paper key={type} elevation={0} sx={(theme) => ({ p: 2, borderRadius: "10px", border: "1px solid", borderColor: "divider", backgroundColor: alpha(theme.palette.background.paper, theme.palette.mode === "dark" ? 0.98 : 0.96) })}>
              <Stack direction="row" justifyContent="space-between" spacing={2}>
                <Box>
                  <Typography fontWeight={700}>{type}</Typography>
                  <Typography variant="body2" color="text.secondary">{count}</Typography>
                </Box>
                <Chip label={price} color="primary" size="small" />
              </Stack>
            </Paper>
          ))}
        </Stack>
      </SectionCard>

      <SectionCard title="Publishing Controls" subtitle="Go Live" md={12} accent="dark">
        <Typography variant="body2" color="text.secondary">
          This show can be published immediately, scheduled for future visibility, or saved as a pending draft for operations review.
        </Typography>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={1.25} sx={{ mt: 2 }}>
          <Button variant="outlined">Save as Draft</Button>
          <Button variant="outlined">Preview Seat Map</Button>
          <Button variant="contained">Create Show</Button>
        </Stack>
      </SectionCard>
    </PageGrid>
  );
}

export default NewShowPage;
