import {
  Avatar,
  Box,
  Button,
  Chip,
  List,
  ListItemButton,
  ListItemText,
  Paper,
  Stack,
  Typography,
  alpha
} from "@mui/material";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import LocalMoviesRoundedIcon from "@mui/icons-material/LocalMoviesRounded";
import ApartmentRoundedIcon from "@mui/icons-material/ApartmentRounded";
import ScheduleRoundedIcon from "@mui/icons-material/ScheduleRounded";
import ConfirmationNumberRoundedIcon from "@mui/icons-material/ConfirmationNumberRounded";
import EventSeatRoundedIcon from "@mui/icons-material/EventSeatRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import PaymentsRoundedIcon from "@mui/icons-material/PaymentsRounded";
import ReviewsRoundedIcon from "@mui/icons-material/ReviewsRounded";
import NotificationsActiveRoundedIcon from "@mui/icons-material/NotificationsActiveRounded";
import SellRoundedIcon from "@mui/icons-material/SellRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import InsightsRoundedIcon from "@mui/icons-material/InsightsRounded";
import HistoryRoundedIcon from "@mui/icons-material/HistoryRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";

export const navItems = [
  { id: "Dashboard", label: "Dashboard", accent: "Live overview", icon: DashboardRoundedIcon },
  { id: "Analytics", label: "Analytics", accent: "Advanced insights", icon: InsightsRoundedIcon },
  { id: "ActivityLogs", label: "Activity Logs", accent: "Audit trail", icon: HistoryRoundedIcon },
  { id: "Movies", label: "Movies", accent: "Catalog", icon: LocalMoviesRoundedIcon },
  { id: "Theatres", label: "Theatres", accent: "Screens & seats", icon: ApartmentRoundedIcon },
  { id: "Shows", label: "Shows", accent: "Schedules", icon: ScheduleRoundedIcon },
  { id: "SeatLocking", label: "Seat Locking", accent: "Timeout control", icon: EventSeatRoundedIcon },
  {
    id: "Bookings",
    label: "Bookings",
    accent: "Reservations",
    icon: ConfirmationNumberRoundedIcon
  },
  { id: "Support", label: "Support", accent: "Complaints & tickets", icon: SupportAgentRoundedIcon },
  { id: "Users", label: "Users", accent: "Audience", icon: PeopleAltRoundedIcon },
  { id: "Payments", label: "Payments", accent: "Transactions", icon: PaymentsRoundedIcon },
  { id: "Reviews", label: "Reviews", accent: "Moderation", icon: ReviewsRoundedIcon },
  {
    id: "Notifications",
    label: "Notifications",
    accent: "Broadcasts",
    icon: NotificationsActiveRoundedIcon
  },
  { id: "Offers", label: "Offers", accent: "Coupons", icon: SellRoundedIcon },
  { id: "Settings", label: "Settings", accent: "Configuration", icon: SettingsRoundedIcon }
];

function AdminSidebar({ activePage, onPageChange, onLogout }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        p: 2,
        backgroundColor: (theme) =>
          theme.palette.mode === "dark"
            ? "rgba(10, 10, 10, 0.99)"
            : "rgba(248, 241, 232, 0.99)",
        borderRight: "1px solid",
        borderColor: "divider",
        overflowY: "auto",
        overflowX: "hidden",
        scrollbarWidth: "thin",
        scrollbarColor: "transparent transparent",
        "&::-webkit-scrollbar": {
          width: "6px"
        },
        "&::-webkit-scrollbar-track": {
          background: "transparent"
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "transparent",
          borderRadius: "10px"
        },
        "&:hover": {
          scrollbarColor: `${alpha("rgb(80 27 148)", 0.45)} transparent`
        },
        "&:hover::-webkit-scrollbar-thumb": {
          backgroundColor: alpha("rgb(80 27 148)", 0.45)
        }
      }}
    >
      <Paper
        elevation={0}
        sx={(theme) => ({
          mb: 1.4,
          p: 1.6,
          borderRadius: "10px",
          border: "1px solid",
          borderColor: "divider",
          backgroundColor: alpha(
            theme.palette.background.paper,
            theme.palette.mode === "dark" ? 0.98 : 0.96
          )
        })}
      >
        <Typography variant="overline" color="primary.light" sx={{ display: "block", mb: 0.35 }}>
          Cinema Control
        </Typography>
        <Typography variant="h6" sx={{ lineHeight: 1.2 }}>
          CineTime Admin
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.7 }}>
          Hall operations, bookings, support, and branch activity in one workspace.
        </Typography>
      </Paper>

      <Paper
        elevation={0}
        sx={{
          mt: 0,
          p: 1,
          borderRadius: "10px",
          border: "1px solid",
          borderColor: "divider",
          backgroundColor: "transparent",
          overflow: "visible"
        }}
      >
        <List
          sx={{
            mt: 0,
            py: 0,
            pr: 0.25
          }}
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            const selected = activePage === item.id;

            return (
              <ListItemButton
                key={item.id}
                component="a"
                href={`#${item.id}`}
                onClick={() => onPageChange(item.id)}
                selected={selected}
                sx={{
                  mb: 0.6,
                  borderRadius: "10px",
                  alignItems: "center",
                  border: "1px solid",
                  borderColor: selected ? alpha("rgb(80 27 148)", 0.4) : alpha("#ffffff", 0.04),
                  backgroundColor: selected ? alpha("rgb(80 27 148)", 0.28) : alpha("#ffffff", 0.02),
                  boxShadow: selected ? "inset 3px 0 0 rgb(80 27 148), 0 10px 24px rgba(0,0,0,0.12)" : "none",
                  px: 1.2,
                  py: 1.1,
                  "&:hover": {
                    backgroundColor: selected ? alpha("rgb(80 27 148)", 0.34) : alpha("rgb(80 27 148)", 0.1),
                    borderColor: alpha("rgb(80 27 148)", 0.3)
                  }
                }}
              >
                <Avatar
                  variant="rounded"
                  sx={{
                    width: 42,
                    height: 42,
                    mr: 1.4,
                    bgcolor: selected ? alpha("rgb(80 27 148)", 0.24) : alpha("#ffffff", 0.04),
                    color: selected ? "primary.light" : "text.secondary"
                  }}
                >
                  <Icon fontSize="small" />
                </Avatar>
                <ListItemText
                  primary={item.label}
                  secondary={item.accent}
                  primaryTypographyProps={{ fontWeight: 600 }}
                  secondaryTypographyProps={{ color: "text.secondary" }}
                />
              </ListItemButton>
            );
          })}
        </List>
      </Paper>

      <Paper
        elevation={0}
        sx={{
          mt: 2,
          p: 2,
          borderRadius: "10px",
          border: "1px solid",
          borderColor: "divider",
          backgroundColor: (theme) =>
            alpha(theme.palette.background.paper, theme.palette.mode === "dark" ? 0.96 : 0.94)
        }}
      >
        <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={1}>
          <Box>
            <Typography variant="overline" color="primary.light">
              Current Shift
            </Typography>
            <Typography variant="subtitle1" fontWeight={600}>
              Rahul Sen
            </Typography>
          </Box>
          <Chip label="Downtown" size="small" variant="outlined" />
        </Stack>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1.25 }}>
          Next changeover: 6:30 PM
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Refund approvals pending: 8
        </Typography>
        <Button
          fullWidth
          variant="outlined"
          startIcon={<LogoutRoundedIcon />}
          onClick={onLogout}
          sx={{ mt: 2, borderRadius: "10px", justifyContent: "flex-start" }}
        >
          Log Out
        </Button>
      </Paper>
    </Box>
  );
}

export default AdminSidebar;
