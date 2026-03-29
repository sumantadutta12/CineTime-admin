import { Box, Button, Chip, Paper, Stack, Typography, alpha } from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import LocalMoviesRoundedIcon from "@mui/icons-material/LocalMoviesRounded";
import ApartmentRoundedIcon from "@mui/icons-material/ApartmentRounded";
import ScheduleRoundedIcon from "@mui/icons-material/ScheduleRounded";
import SellRoundedIcon from "@mui/icons-material/SellRounded";
import NotificationsActiveRoundedIcon from "@mui/icons-material/NotificationsActiveRounded";
import { PageGrid, SectionCard } from "../components/Common";

const createCards = [
  {
    title: "New Movie",
    copy: "Poster, trailer, language, genre, duration, and release status.",
    icon: LocalMoviesRoundedIcon,
    tag: "Catalog"
  },
  {
    title: "New Theatre",
    copy: "Branch setup, screens, seat layout, and seat category mapping.",
    icon: ApartmentRoundedIcon,
    tag: "Venue"
  },
  {
    title: "New Show",
    copy: "Assign movie, screen, showtime, pricing, and repeat schedule.",
    icon: ScheduleRoundedIcon,
    tag: "Schedule"
  },
  {
    title: "New Offer",
    copy: "Create coupon, discount rule, validity, and usage limit.",
    icon: SellRoundedIcon,
    tag: "Promotion"
  },
  {
    title: "New Notification",
    copy: "Push release alert, campaign update, or urgent hall notice.",
    icon: NotificationsActiveRoundedIcon,
    tag: "Broadcast"
  }
];

function CreateNewPage() {
  const handleStart = (title) => {
    const targetMap = {
      "New Movie": "NewMovie",
      "New Theatre": "NewTheatre",
      "New Show": "NewShow",
      "New Offer": "NewOffer",
      "New Notification": "NewNotification"
    };

    const target = targetMap[title];
    if (target) {
      window.location.hash = `#${target}`;
    }
  };

  return (
    <PageGrid>
      <SectionCard title="Quick Create Hub" subtitle="Operations Shortcut" md={12} accent="warm">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)", xl: "repeat(3, 1fr)" },
            gap: 2
          }}
        >
          {createCards.map((card) => {
            const Icon = card.icon;
            return (
              <Paper
                key={card.title}
                elevation={0}
                sx={{
                  p: 2.5,
                  borderRadius: "10px",
                  border: "1px solid",
                  borderColor: "divider",
                  backgroundColor: (theme) =>
                    alpha(theme.palette.background.paper, theme.palette.mode === "dark" ? 0.98 : 0.96),
                  transition: "transform 180ms ease, border-color 180ms ease",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    borderColor: alpha("rgb(80 27 148)", 0.24)
                  }
                }}
              >
                <Stack direction="row" justifyContent="space-between" alignItems="start" spacing={2}>
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: "10px",
                      display: "grid",
                      placeItems: "center",
                      bgcolor: alpha("rgb(80 27 148)", 0.14),
                      color: "primary.light"
                    }}
                  >
                    <Icon />
                  </Box>
                  <Chip label={card.tag} color="primary" size="small" />
                </Stack>
                <Typography variant="h6" sx={{ mt: 2 }}>
                  {card.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1.2, minHeight: 64 }}>
                  {card.copy}
                </Typography>
                <Button
                  variant="contained"
                  startIcon={<AddRoundedIcon />}
                  sx={{ mt: 2 }}
                  onClick={() => handleStart(card.title)}
                >
                  Start
                </Button>
              </Paper>
            );
          })}
        </Box>
      </SectionCard>
    </PageGrid>
  );
}

export default CreateNewPage;
