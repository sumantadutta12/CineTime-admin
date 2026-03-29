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
import ChairRoundedIcon from "@mui/icons-material/ChairRounded";
import { PageGrid, SectionCard } from "../components/Common";

function CreateShowPage() {
  return (
    <PageGrid>
      <SectionCard
        title="Create Show"
        subtitle="Scheduling Desk"
        md={8}
        accent="dark"
        actions={<Chip label="Prime Time" color="primary" size="small" />}
      >
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", xl: "1.2fr 0.8fr" }, gap: 2 }}>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))" }, gap: 1.5 }}>
            <TextField label="Movie" defaultValue="Neon After Dark" fullWidth />
            <TextField label="Branch" defaultValue="CineTime Downtown" fullWidth />
            <TextField label="Screen" defaultValue="Screen 2" fullWidth />
            <TextField label="Format" defaultValue="2D" fullWidth />
            <TextField label="Show Date" defaultValue="2026-04-28" fullWidth />
            <TextField label="Start Time" defaultValue="07:40 PM" fullWidth />
            <TextField label="End Time" defaultValue="09:46 PM" fullWidth />
            <TextField label="Repeat Rule" defaultValue="Daily until May 04" fullWidth />
            <TextField label="Base Price" defaultValue="৳320" fullWidth />
            <TextField label="Booking Window" defaultValue="Open now" fullWidth />
            <TextField
              label="Operations Note"
              defaultValue="Weekend launch show with premium pricing and advance seat opening across app, web, and counter."
              multiline
              minRows={4}
              fullWidth
              sx={{ gridColumn: { xs: "span 1", sm: "span 2" } }}
            />
          </Box>

          <Stack spacing={1.5}>
            {[
              {
                icon: ScheduleRoundedIcon,
                title: "Daily Rotation",
                copy: "Auto-repeat keeps the show live for a 7-day release cycle."
              },
              {
                icon: LocalOfferRoundedIcon,
                title: "Promo Sync",
                copy: "Offer engine can attach weekend and launch-campaign codes."
              },
              {
                icon: ChairRoundedIcon,
                title: "Seat Release",
                copy: "156 seats ready after maintenance blocks were removed."
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

      <SectionCard title="Seat Pricing Grid" subtitle="Fare Bands" md={4} accent="dark">
        <Stack spacing={1.25}>
          {[
            ["Silver", "৳280", "84 seats"],
            ["Gold", "৳360", "48 seats"],
            ["Platinum", "৳460", "20 seats"],
            ["Recliner", "৳650", "4 seats"]
          ].map(([type, price, count]) => (
            <Paper key={type} elevation={0} sx={{ p: 2, borderRadius: "10px", border: "1px solid", borderColor: "divider" }}>
              <Stack direction="row" justifyContent="space-between" spacing={2}>
                <Box>
                  <Typography fontWeight={700}>{type}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {count}
                  </Typography>
                </Box>
                <Chip label={price} color="primary" size="small" />
              </Stack>
            </Paper>
          ))}
        </Stack>
      </SectionCard>

      <SectionCard title="Publishing Controls" subtitle="Go Live" md={12} accent="dark">
        <Typography variant="body2" color="text.secondary">
          Publish immediately, hold as draft for operations approval, or preview the seat map before releasing the show to public booking channels.
        </Typography>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={1.25} sx={{ mt: 2 }}>
          <Button variant="outlined">Save Draft</Button>
          <Button variant="outlined">Preview Seat Map</Button>
          <Button variant="contained">Create Show</Button>
        </Stack>
      </SectionCard>
    </PageGrid>
  );
}

export default CreateShowPage;
