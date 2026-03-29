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
import ApartmentRoundedIcon from "@mui/icons-material/ApartmentRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import ChairRoundedIcon from "@mui/icons-material/ChairRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { PageGrid, SectionCard } from "../components/Common";

const theatreChecklist = [
  "Branch name, address, and city confirmed",
  "Screens and seat capacity mapped",
  "Seat category pricing aligned",
  "Operations team ready for publishing"
];

function NewTheatrePage() {
  return (
    <PageGrid>
      <SectionCard title="Branch Setup" subtitle="New Theatre" md={8} accent="dark" actions={<Chip label="Multi Screen" color="primary" size="small" />}>
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
              gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))" },
              gap: 1.5
            }}
          >
            <TextField label="Theatre Name" defaultValue="CineTime Riverside" fullWidth />
            <TextField label="Branch Code" defaultValue="CTR-05" fullWidth />
            <TextField label="City" defaultValue="Kolkata" fullWidth />
            <TextField label="Manager" defaultValue="Anik Dhar" fullWidth />
            <TextField label="Total Screens" defaultValue="4" fullWidth />
            <TextField label="Operating Hours" defaultValue="09:00 AM - 12:30 AM" fullWidth />
            <TextField label="Full Address" defaultValue="42 Prince Anwar Shah Road, Kolkata" fullWidth sx={{ gridColumn: { xs: "span 1", sm: "span 2" } }} />
            <TextField label="Notes" defaultValue="Premium multiplex branch with lounge access and recliner layout in Screen 1." multiline minRows={4} fullWidth sx={{ gridColumn: { xs: "span 1", sm: "span 2" } }} />
          </Box>

          <Paper
            elevation={0}
            sx={(theme) => ({
              p: 2,
              borderRadius: "10px",
              border: "1px solid",
              borderColor: "divider",
              backgroundColor: alpha(theme.palette.background.paper, theme.palette.mode === "dark" ? 0.98 : 0.96)
            })}
          >
            <Stack spacing={1.5}>
              {[
                { icon: ApartmentRoundedIcon, title: "4 Screens", copy: "IMAX-ready main hall plus three standard halls." },
                { icon: GridViewRoundedIcon, title: "612 Seats", copy: "Mixed standard, premium, and recliner inventory." },
                { icon: ChairRoundedIcon, title: "Tier Mapping", copy: "Silver, Gold, Platinum, and Lounge categories." }
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
                      backgroundColor: alpha(theme.palette.primary.main, theme.palette.mode === "dark" ? 0.08 : 0.06)
                    })}
                  >
                    <Stack direction="row" spacing={1.5} alignItems="flex-start">
                      <Box sx={{ width: 42, height: 42, borderRadius: "10px", display: "grid", placeItems: "center", bgcolor: alpha("rgb(80 27 148)", 0.16), color: "primary.light" }}>
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
          </Paper>
        </Box>
      </SectionCard>

      <SectionCard title="Launch Checklist" subtitle="Readiness" md={4} accent="dark">
        <Stack spacing={1.25}>
          {theatreChecklist.map((item) => (
            <Paper key={item} elevation={0} sx={(theme) => ({ p: 2, borderRadius: "10px", border: "1px solid", borderColor: "divider", backgroundColor: alpha(theme.palette.background.paper, theme.palette.mode === "dark" ? 0.98 : 0.96) })}>
              <Stack direction="row" spacing={1.1} alignItems="flex-start">
                <CheckCircleRoundedIcon sx={{ color: "primary.main", mt: "2px", fontSize: 18 }} />
                <Typography variant="body2" color="text.secondary">{item}</Typography>
              </Stack>
            </Paper>
          ))}
        </Stack>
      </SectionCard>

      <SectionCard title="Seat Configuration" subtitle="Hall Layout" md={12} accent="dark">
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(4, minmax(0, 1fr))" }, gap: 1.5 }}>
          {[
            ["Screen 1", "164 seats", "Premium + Recliner"],
            ["Screen 2", "148 seats", "Standard + Gold"],
            ["Screen 3", "150 seats", "Family + Couple Seats"],
            ["Screen 4", "150 seats", "Late Night Shows"]
          ].map(([screen, seats, plan]) => (
            <Paper key={screen} elevation={0} sx={(theme) => ({ p: 2, borderRadius: "10px", border: "1px solid", borderColor: "divider", backgroundColor: alpha(theme.palette.background.paper, theme.palette.mode === "dark" ? 0.98 : 0.96) })}>
              <Typography variant="overline" color="primary.light">{screen}</Typography>
              <Typography variant="h6">{seats}</Typography>
              <Typography variant="body2" color="text.secondary">{plan}</Typography>
            </Paper>
          ))}
        </Box>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={1.25} sx={{ mt: 2 }}>
          <Button variant="outlined">Save Draft</Button>
          <Button variant="contained">Create Theatre</Button>
        </Stack>
      </SectionCard>
    </PageGrid>
  );
}

export default NewTheatrePage;
