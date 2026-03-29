import { useEffect, useMemo, useState } from "react";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  CssBaseline,
  Drawer,
  IconButton,
  Paper,
  Stack,
  ThemeProvider,
  Toolbar,
  Typography,
  alpha
} from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import { createAppTheme } from "./theme";
import AdminSidebar from "./components/AdminSidebar";
import { AdminPageSkeleton } from "./components/Common";
import {
  AddMoviePage,
  AdvancedAnalyticsPage,
  AdminActivityLogsPage,
  ApproveRefundPage,
  BookingsPage,
  BlockSeatsPage,
  CreateNewPage,
  CreateShowPage,
  DashboardPage,
  LoginPage,
  MoviesPage,
  NewMoviePage,
  NewNotificationPage,
  NewOfferPage,
  NewShowPage,
  NewTheatrePage,
  NotificationsPage,
  OffersPage,
  PaymentsPage,
  PushOfferPage,
  ReviewsPage,
  SeatLockingPage,
  SettingsPage,
  ShowsPage,
  SupportPage,
  TheatresPage,
  UsersPage
} from "./pages";

const drawerWidth = 320;
const logoPath = "/logo-movie-1.png";

const pageMeta = {
  Dashboard: {
    eyebrow: "Operations Center",
    title: "Hall Manager Dashboard",
    description: "Watch occupancy, revenue, incidents, and active screens from a single view."
  },
  Analytics: {
    eyebrow: "Advanced Analytics",
    title: "Analytics Dashboard",
    description: "Track revenue momentum, branch performance, occupancy signals, and decision-ready cinema trends."
  },
  AddMovie: {
    eyebrow: "Quick Action",
    title: "Add Movie",
    description: "Create a new movie listing with poster, trailer, release details, and launch-ready metadata."
  },
  CreateShow: {
    eyebrow: "Quick Action",
    title: "Create Show",
    description: "Build a show schedule with branch, screen, timing, seat pricing, and release controls."
  },
  BlockSeats: {
    eyebrow: "Quick Action",
    title: "Block Seats",
    description: "Reserve or disable seats for maintenance, VIP handling, outages, and temporary operational holds."
  },
  ApproveRefund: {
    eyebrow: "Quick Action",
    title: "Approve Refund",
    description: "Review booking, payment, and cancellation details before approving customer refund requests."
  },
  PushOffer: {
    eyebrow: "Quick Action",
    title: "Push Offer",
    description: "Launch a promotion campaign with coupon rules, audience targeting, and message delivery controls."
  },
  ActivityLogs: {
    eyebrow: "Admin Activity Logs",
    title: "Audit Activity Center",
    description: "Review manager actions, refund approvals, pricing updates, seat overrides, and support escalations from one audit stream."
  },
  Movies: {
    eyebrow: "Movie Management",
    title: "Movie Catalog",
    description: "Add posters, trailers, release windows, and now-showing / coming-soon status."
  },
  Theatres: {
    eyebrow: "Theatre & Screens",
    title: "Theatre Control",
    description: "Manage branch setup, seat categories, screen capacity, and hall-level readiness."
  },
  Shows: {
    eyebrow: "Show Management",
    title: "Show Scheduler",
    description: "Assign movies to screens, set pricing, and control seat availability."
  },
  SeatLocking: {
    eyebrow: "Seat Locking System",
    title: "Seat Locking Control",
    description: "Monitor active seat holds, timeout rules, stale locks, and manager overrides across all booking channels."
  },
  Bookings: {
    eyebrow: "Booking Management",
    title: "Booking Desk",
    description: "Track reservations, seat selections, cancellations, and refund states."
  },
  Support: {
    eyebrow: "Support & Complaints",
    title: "Support Desk",
    description: "Manage complaint tickets, refund issues, seat mismatches, validation errors, and customer-facing resolutions."
  },
  Users: {
    eyebrow: "User Management",
    title: "Audience Profiles",
    description: "Review user history, support risk checks, and identify loyal customers."
  },
  Payments: {
    eyebrow: "Payments & Transactions",
    title: "Revenue Flow",
    description: "Monitor gateway health, failed transactions, and refund backlog."
  },
  Reviews: {
    eyebrow: "Reviews & Ratings",
    title: "Review Moderation",
    description: "Keep public feedback clean, useful, and aligned with content policy."
  },
  Notifications: {
    eyebrow: "Notification System",
    title: "Campaign Broadcasts",
    description: "Push release alerts, offers, and urgent show updates to the right audience."
  },
  Offers: {
    eyebrow: "Offers & Coupons",
    title: "Promotions Control",
    description: "Create promo codes, limit usage, and track performance of campaigns."
  },
  CreateNew: {
    eyebrow: "Quick Create",
    title: "Create New",
    description: "Start a new movie, theatre, show, offer, or notification from one place."
  },
  NewMovie: {
    eyebrow: "Movie Creation",
    title: "Create New Movie",
    description: "Build a polished movie listing with media, release details, publishing status, and promo-ready metadata."
  },
  NewTheatre: {
    eyebrow: "Theatre Creation",
    title: "Create New Theatre",
    description: "Set up a new cinema branch with screens, seat categories, operations details, and launch readiness."
  },
  NewShow: {
    eyebrow: "Show Creation",
    title: "Create New Show",
    description: "Configure movie, screen, pricing, schedule rotation, and seat release from one control screen."
  },
  NewOffer: {
    eyebrow: "Offer Creation",
    title: "Create New Offer",
    description: "Build a promotion campaign with discount rules, targeting, eligibility filters, and release actions."
  },
  NewNotification: {
    eyebrow: "Notification Creation",
    title: "Create New Notification",
    description: "Compose and schedule push, SMS, or email campaigns with live preview and audience targeting."
  },
  Settings: {
    eyebrow: "Platform Settings",
    title: "Configuration Hub",
    description: "Update branding, payment keys, API modes, and operational defaults."
  }
};

const defaultCredentials = {
  email: "manager@cinetime.com",
  password: "admin123"
};

function App() {
  const [activePage, setActivePage] = useState(readPageFromHash());
  const [isLoggedIn, setIsLoggedIn] = useState(
    () => window.sessionStorage.getItem("cinetime-admin-auth") === "true"
  );
  const [mode, setMode] = useState(() => window.sessionStorage.getItem("cinetime-admin-mode") || "dark");
  const [mobileOpen, setMobileOpen] = useState(false);
  const normalizedPage = pageMeta[activePage] ? activePage : "Dashboard";
  const meta = pageMeta[normalizedPage];
  const theme = useMemo(() => createAppTheme(mode), [mode]);

  useEffect(() => {
    const onHashChange = () => setActivePage(readPageFromHash());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    if (isLoggedIn && activePage !== normalizedPage) {
      if (window.location.hash !== `#${normalizedPage}`) {
        window.location.hash = `#${normalizedPage}`;
      }
      setActivePage(normalizedPage);
    }
  }, [activePage, isLoggedIn, normalizedPage]);

  useEffect(() => {
    if (isLoggedIn && window.location.hash !== `#${normalizedPage}` && !pageMeta[window.location.hash.replace("#", "")]) {
      window.location.hash = `#${normalizedPage}`;
    }
  }, [isLoggedIn, normalizedPage]);

  if (!isLoggedIn) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LoginPage
          onLogin={() => handleLogin(setIsLoggedIn, setActivePage)}
          defaultCredentials={defaultCredentials}
        />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AdminShell
        activePage={normalizedPage}
        meta={meta}
        setActivePage={setActivePage}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        onLogout={() => handleLogout(setIsLoggedIn, setActivePage)}
        mode={mode}
        onToggleMode={() => toggleMode(setMode)}
      />
    </ThemeProvider>
  );
}

function AdminShell({ activePage, meta, setActivePage, mobileOpen, setMobileOpen, onLogout, mode, onToggleMode }) {
  const [isPageLoading, setIsPageLoading] = useState(true);

  useEffect(() => {
    setIsPageLoading(true);
    const timeoutId = window.setTimeout(() => {
      setIsPageLoading(false);
    }, 450);

    return () => window.clearTimeout(timeoutId);
  }, [activePage]);

  const handlePageChange = (pageId) => {
    setActivePage(pageId);
    window.location.hash = `#${pageId}`;
    setMobileOpen(false);
  };

  const drawerContent = <AdminSidebar activePage={activePage} onPageChange={handlePageChange} onLogout={onLogout} />;

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <AppBar
        position="fixed"
        color="transparent"
        elevation={0}
        sx={{
          display: { md: "none" },
          backgroundColor: alpha("#0a0a0a", 0.88),
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid",
          borderColor: "divider"
        }}
      >
        <Toolbar>
          <IconButton color="inherit" edge="start" onClick={() => setMobileOpen(true)}>
            <MenuRoundedIcon />
          </IconButton>
          <Typography variant="h6">CineTime Admin</Typography>
        </Toolbar>
      </AppBar>

      <Box component="nav" sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
          ModalProps={{ keepMounted: true }}
          sx={{ display: { xs: "block", md: "none" }, "& .MuiDrawer-paper": { width: drawerWidth } }}
        >
          {drawerContent}
        </Drawer>
        <Drawer
          variant="permanent"
          open
          sx={{
            display: { xs: "none", md: "block" },
            "& .MuiDrawer-paper": { width: drawerWidth, boxSizing: "border-box", border: "none" }
          }}
        >
          {drawerContent}
        </Drawer>
      </Box>

      <Box component="main" sx={{ flexGrow: 1, minWidth: 0, p: { xs: 2, md: 3 }, pt: { xs: 10, md: 3 } }}>
        <Paper
          elevation={0}
          sx={{
            p: { xs: 2.25, md: 3 },
            mb: 2.25,
            borderRadius: "10px",
            border: "1px solid",
            borderColor: "divider",
            backgroundColor: (theme) =>
              theme.palette.mode === "dark"
                ? "rgba(20, 20, 20, 0.96)"
                : "rgba(255, 250, 244, 0.94)",
            boxShadow: "0 28px 70px rgba(0,0,0,0.18)"
          }}
        >
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={2}
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", md: "center" }}
          >
            <Stack direction="row" spacing={2} alignItems="center">
              <Avatar
                src={logoPath}
                alt="CineTime logo"
                variant="rounded"
                sx={{ width: 64, height: 64, bgcolor: alpha("#fff", 0.06), boxShadow: "0 10px 30px rgba(0,0,0,0.22)" }}
              />
              <Box>
                <Typography variant="overline" color="primary.light">
                  {meta.eyebrow}
                </Typography>
                <Typography variant="h4">{meta.title}</Typography>
                <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 760, mt: 0.5 }}>
                  {meta.description}
                </Typography>
              </Box>
            </Stack>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
              {activePage === "Dashboard" ? (
                <>
                  <Button
                    variant="outlined"
                    startIcon={mode === "dark" ? <LightModeRoundedIcon /> : <DarkModeRoundedIcon />}
                    onClick={onToggleMode}
                  >
                    {mode === "dark" ? "Light Mode" : "Dark Mode"}
                  </Button>
                  <Button variant="outlined" startIcon={<DownloadRoundedIcon />}>
                    Export Report
                  </Button>
                </>
              ) : null}
              <Button
                variant="contained"
                startIcon={<AddRoundedIcon />}
                onClick={() => handlePageChange("CreateNew")}
              >
                Create New
              </Button>
            </Stack>
          </Stack>
        </Paper>

        {isPageLoading ? <AdminPageSkeleton /> : renderPage(activePage)}
      </Box>
    </Box>
  );
}

function renderPage(activePage) {
  if (activePage === "Dashboard") return <DashboardPage />;
  if (activePage === "Analytics") return <AdvancedAnalyticsPage />;
  if (activePage === "AddMovie") return <AddMoviePage />;
  if (activePage === "CreateShow") return <CreateShowPage />;
  if (activePage === "BlockSeats") return <BlockSeatsPage />;
  if (activePage === "ApproveRefund") return <ApproveRefundPage />;
  if (activePage === "PushOffer") return <PushOfferPage />;
  if (activePage === "ActivityLogs") return <AdminActivityLogsPage />;
  if (activePage === "Movies") return <MoviesPage />;
  if (activePage === "Theatres") return <TheatresPage />;
  if (activePage === "Shows") return <ShowsPage />;
  if (activePage === "SeatLocking") return <SeatLockingPage />;
  if (activePage === "Bookings") return <BookingsPage />;
  if (activePage === "Support") return <SupportPage />;
  if (activePage === "Users") return <UsersPage />;
  if (activePage === "Payments") return <PaymentsPage />;
  if (activePage === "Reviews") return <ReviewsPage />;
  if (activePage === "Notifications") return <NotificationsPage />;
  if (activePage === "Offers") return <OffersPage />;
  if (activePage === "CreateNew") return <CreateNewPage />;
  if (activePage === "NewMovie") return <NewMoviePage />;
  if (activePage === "NewTheatre") return <NewTheatrePage />;
  if (activePage === "NewShow") return <NewShowPage />;
  if (activePage === "NewOffer") return <NewOfferPage />;
  if (activePage === "NewNotification") return <NewNotificationPage />;
  if (activePage === "Settings") return <SettingsPage />;

  return <DashboardPage />;
}

function readPageFromHash() {
  const raw = window.location.hash.replace("#", "");
  return pageMeta[raw] ? raw : "Dashboard";
}

function handleLogin(setIsLoggedIn, setActivePage) {
  window.sessionStorage.setItem("cinetime-admin-auth", "true");
  setActivePage("Dashboard");
  window.location.hash = "#Dashboard";
  setIsLoggedIn(true);
}

function handleLogout(setIsLoggedIn, setActivePage) {
  window.sessionStorage.removeItem("cinetime-admin-auth");
  window.location.hash = "";
  setActivePage("Dashboard");
  setIsLoggedIn(false);
}

function toggleMode(setMode) {
  setMode((current) => {
    const next = current === "dark" ? "light" : "dark";
    window.sessionStorage.setItem("cinetime-admin-mode", next);
    return next;
  });
}

export default App;
