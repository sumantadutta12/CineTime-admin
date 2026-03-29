import {
  Avatar,
  Box,
  Button,
  Chip,
  Divider,
  Paper,
  Stack,
  TextField,
  Typography,
  alpha
} from "@mui/material";
import MovieCreationRoundedIcon from "@mui/icons-material/MovieCreationRounded";
import CloudUploadRoundedIcon from "@mui/icons-material/CloudUploadRounded";
import PlayCircleRoundedIcon from "@mui/icons-material/PlayCircleRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import { PageGrid, SectionCard } from "../components/Common";

const releaseChecklist = [
  "Poster, trailer, and cover assets reviewed",
  "Language, genre, duration, and censor rating confirmed",
  "Release date and publishing status approved",
  "Campaign tags prepared for homepage and notification use"
];

function AddMoviePage() {
  return (
    <PageGrid>
      <SectionCard
        title="Add Movie"
        subtitle="Catalog Control"
        md={8}
        accent="dark"
        actions={<Chip label="Ready for Release" color="primary" size="small" />}
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
              gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))" },
              gap: 1.5
            }}
          >
            <TextField label="Movie Title" defaultValue="Neon After Dark" fullWidth />
            <TextField label="Slug" defaultValue="neon-after-dark" fullWidth />
            <TextField label="Language" defaultValue="Bangla" fullWidth />
            <TextField label="Genre" defaultValue="Thriller / Mystery" fullWidth />
            <TextField label="Duration" defaultValue="2h 06m" fullWidth />
            <TextField label="Release Date" defaultValue="2026-04-28" fullWidth />
            <TextField label="Censor Rating" defaultValue="UA 16+" fullWidth />
            <TextField label="Status" defaultValue="Coming Soon" fullWidth />
            <TextField
              label="Synopsis"
              defaultValue="A late-night radio host begins receiving calls from passengers trapped inside a train that no longer exists on the city map."
              multiline
              minRows={5}
              fullWidth
              sx={{ gridColumn: { xs: "span 1", sm: "span 2" } }}
            />
            <TextField
              label="Trailer Link"
              defaultValue="https://youtube.com/watch?v=neon-after-dark"
              fullWidth
              sx={{ gridColumn: { xs: "span 1", sm: "span 2" } }}
            />
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
            <Stack spacing={2}>
              <Box
                sx={(theme) => ({
                  minHeight: 240,
                  borderRadius: "10px",
                  border: "1px dashed",
                  borderColor: alpha(theme.palette.primary.main, 0.34),
                  backgroundColor: alpha(
                    theme.palette.background.default,
                    theme.palette.mode === "dark" ? 0.54 : 0.6
                  ),
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  px: 2
                })}
              >
                <Avatar
                  sx={{
                    width: 68,
                    height: 68,
                    mb: 1.5,
                    bgcolor: alpha("rgb(80 27 148)", 0.18),
                    color: "primary.light"
                  }}
                >
                  <MovieCreationRoundedIcon />
                </Avatar>
                <Typography variant="h6">Poster Upload</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 240, mt: 0.75 }}>
                  Use a vertical poster and banner-ready visual so the title looks consistent across admin and booking surfaces.
                </Typography>
              </Box>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={1.25}>
                <Button fullWidth variant="contained" startIcon={<CloudUploadRoundedIcon />}>
                  Upload Poster
                </Button>
                <Button fullWidth variant="outlined" startIcon={<PlayCircleRoundedIcon />}>
                  Attach Trailer
                </Button>
              </Stack>
            </Stack>
          </Paper>
        </Box>
      </SectionCard>

      <SectionCard
        title="Publishing Readiness"
        subtitle="Launch Checklist"
        md={4}
        accent="dark"
        actions={<Chip icon={<AutoAwesomeRoundedIcon />} label="Manager Review" color="primary" size="small" />}
      >
        <Stack spacing={1.25}>
          {releaseChecklist.map((item) => (
            <Paper key={item} elevation={0} sx={{ p: 2, borderRadius: "10px", border: "1px solid", borderColor: "divider" }}>
              <Typography variant="body2" color="text.secondary">
                {item}
              </Typography>
            </Paper>
          ))}
        </Stack>
      </SectionCard>

      <SectionCard title="Release Snapshot" subtitle="Promo View" md={12} accent="dark">
        <Stack direction={{ xs: "column", lg: "row" }} spacing={2} alignItems={{ xs: "stretch", lg: "center" }}>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h5">Neon After Dark</Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
              A premium thriller listing with clean release controls, strong visual readiness, and campaign-friendly metadata for show scheduling and promo pushes.
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mt: 2 }}>
              <Chip label="Coming Soon" color="primary" />
              <Chip label="Bangla" variant="outlined" />
              <Chip label="2h 06m" variant="outlined" />
              <Chip label="Thriller" variant="outlined" />
            </Stack>
          </Box>
          <Divider orientation="vertical" flexItem sx={{ display: { xs: "none", lg: "block" } }} />
          <Stack direction={{ xs: "column", sm: "row" }} spacing={1.25} sx={{ minWidth: { lg: 300 } }}>
            <Button fullWidth variant="outlined">
              Save Draft
            </Button>
            <Button fullWidth variant="contained">
              Publish Movie
            </Button>
          </Stack>
        </Stack>
      </SectionCard>
    </PageGrid>
  );
}

export default AddMoviePage;
