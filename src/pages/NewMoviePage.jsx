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
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import { PageGrid, SectionCard } from "../components/Common";

const readinessItems = [
  "Poster and landscape banner uploaded",
  "Trailer link and synopsis reviewed",
  "Language, genre, and runtime confirmed",
  "Release window and publishing status set"
];

const distributionTags = ["Bangla", "Hindi Dub", "2D", "Multiplex", "Weekend Premiere"];

function NewMoviePage() {
  return (
    <PageGrid>
      <SectionCard
        title="Create Movie Profile"
        subtitle="Primary Details"
        md={8}
        accent="warm"
        actions={<Chip label="Draft Autosave" color="primary" size="small" />}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", xl: "1.2fr 0.8fr" },
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
            <TextField label="Movie Title" defaultValue="Midnight Show" fullWidth />
            <TextField label="Slug" defaultValue="midnight-show" fullWidth />
            <TextField label="Language" defaultValue="Bangla" fullWidth />
            <TextField label="Genre" defaultValue="Thriller / Mystery" fullWidth />
            <TextField label="Duration" defaultValue="2h 14m" fullWidth />
            <TextField label="Release Date" defaultValue="2026-04-18" fullWidth />
            <TextField label="Censor Rating" defaultValue="UA 13+" fullWidth />
            <TextField label="Publishing Status" defaultValue="Coming Soon" fullWidth />
            <TextField
              label="Synopsis"
              defaultValue="A late-night train disappears from the route map, and the final passengers begin to return with conflicting memories."
              multiline
              minRows={5}
              fullWidth
              sx={{ gridColumn: { xs: "span 1", sm: "span 2" } }}
            />
            <TextField
              label="Trailer Link"
              defaultValue="https://youtube.com/watch?v=midnight-show-trailer"
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
              backgroundColor:
                alpha(theme.palette.background.paper, theme.palette.mode === "dark" ? 0.96 : 0.94)
            })}
          >
            <Stack spacing={2}>
              <Box
                sx={(theme) => ({
                  minHeight: 240,
                  borderRadius: "10px",
                  border: "1px dashed",
                  borderColor: alpha("rgb(80 27 148)", theme.palette.mode === "dark" ? 0.4 : 0.34),
                  backgroundColor:
                    alpha(theme.palette.background.paper, theme.palette.mode === "dark" ? 0.98 : 0.98),
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
                <Typography variant="h6">Poster Preview</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 240, mt: 0.75 }}>
                  Drag poster art here or upload a vertical one-sheet for app, web, and box-office placements.
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

      <SectionCard title="Release Framing" subtitle="Publishing Layout" md={4} accent="red">
        <Stack spacing={1.5}>
          <Paper
            elevation={0}
            sx={{
              p: 2,
              borderRadius: "10px",
              border: "1px solid",
              borderColor: "divider"
            }}
          >
            <Typography variant="overline" color="primary.light">
              Distribution Tags
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mt: 1 }}>
              {distributionTags.map((tag) => (
                <Chip key={tag} label={tag} size="small" color="primary" variant={tag === "Bangla" ? "filled" : "outlined"} />
              ))}
            </Stack>
          </Paper>

          <Paper
            elevation={0}
            sx={(theme) => ({
              p: 2,
              borderRadius: "10px",
              border: "1px solid",
              borderColor: "divider",
              backgroundColor:
                alpha(theme.palette.background.paper, theme.palette.mode === "dark" ? 0.96 : 0.94)
            })}
          >
            <Typography variant="overline" color="primary.light">
              Launch Checklist
            </Typography>
            <Stack spacing={1.1} sx={{ mt: 1.25 }}>
              {readinessItems.map((item) => (
                <Stack key={item} direction="row" spacing={1.1} alignItems="flex-start">
                  <CheckCircleRoundedIcon sx={{ color: "success.main", fontSize: 18, mt: "2px" }} />
                  <Typography variant="body2" color="text.secondary">
                    {item}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Paper>

          <Paper
            elevation={0}
            sx={{
              p: 2,
              borderRadius: "10px",
              border: "1px solid",
              borderColor: "divider"
            }}
          >
            <Stack direction="row" justifyContent="space-between" spacing={2} alignItems="center">
              <Box>
                <Typography variant="overline" color="primary.light">
                  Campaign Readiness
                </Typography>
                <Typography variant="h6">Visuals locked for release</Typography>
              </Box>
              <Chip label="86% Ready" color="success" />
            </Stack>
            <Divider sx={{ my: 2 }} />
            <Typography variant="body2" color="text.secondary">
              Once saved, this movie can be pushed to the schedule builder, offer engine, and audience notifications.
            </Typography>
          </Paper>
        </Stack>
      </SectionCard>

      <SectionCard title="Creative Direction" subtitle="Promo Snapshot" md={7} accent="dark">
        <Paper
          elevation={0}
          sx={(theme) => ({
            p: 2.25,
            borderRadius: "10px",
            border: "1px solid",
            borderColor: "divider",
            backgroundColor:
              alpha(theme.palette.background.paper, theme.palette.mode === "dark" ? 0.96 : 0.94)
          })}
        >
          <Typography variant="overline" color="primary.light">
            Preview Banner
          </Typography>
          <Typography variant="h5" sx={{ mt: 0.5 }}>
            Midnight Show
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 680, mt: 1 }}>
            A premium thriller listing with cinematic poster placement, trailer hook, genre-led metadata, and clean publishing controls for managers.
          </Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mt: 2.25 }}>
            <Chip label="Coming Soon" color="primary" />
            <Chip label="UA 13+" variant="outlined" />
            <Chip label="2h 14m" variant="outlined" />
            <Chip label="Thriller" variant="outlined" />
          </Stack>
        </Paper>
      </SectionCard>

      <SectionCard
        title="Publish Controls"
        subtitle="Manager Actions"
        md={5}
        accent="dark"
        actions={<Chip icon={<AutoAwesomeRoundedIcon />} label="Recommended Flow" size="small" color="primary" />}
      >
        <Stack spacing={1.5}>
          <Paper elevation={0} sx={{ p: 2, borderRadius: "10px", border: "1px solid", borderColor: "divider" }}>
            <Typography fontWeight={600}>Save as Draft</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 0.75 }}>
              Keep the movie private while artwork, trailer, and release details are being finalized.
            </Typography>
          </Paper>
          <Paper elevation={0} sx={{ p: 2, borderRadius: "10px", border: "1px solid", borderColor: "divider" }}>
            <Typography fontWeight={600}>Send to Scheduler</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 0.75 }}>
              Hand off this title to the show management team for screen assignment and ticket pricing.
            </Typography>
          </Paper>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={1.25} sx={{ pt: 0.5 }}>
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

export default NewMoviePage;
