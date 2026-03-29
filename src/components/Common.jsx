import { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Chip,
  Divider,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  alpha
} from "@mui/material";

export function PageGrid({ children }) {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
        gap: { xs: 2, md: 2.25 }
      }}
    >
      {children}
    </Box>
  );
}

export function SectionCard({ title, subtitle, md = 12, children, actions, accent = "warm" }) {
  return (
    <Card
      elevation={0}
      sx={(theme) => {
        const panelBg = alpha(
          theme.palette.background.paper,
          theme.palette.mode === "dark" ? 0.96 : 0.94
        );
        return {
        gridColumn: { xs: "span 12", md: `span ${md}` },
        borderRadius: "10px",
        border: "1px solid",
        borderColor: "divider",
        backgroundColor: panelBg,
        boxShadow: "0 24px 60px rgba(0,0,0,0.18)"
      };
      }}
    >
      <CardContent sx={{ p: 2.25 }}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={1}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          sx={{ mb: 2 }}
        >
          <Box>
            <Typography variant="overline" color="primary.light">
              {subtitle}
            </Typography>
            <Typography variant="h6">{title}</Typography>
          </Box>
          {actions || null}
        </Stack>
        <Divider sx={{ mb: 2, borderColor: "divider" }} />
        {children}
      </CardContent>
    </Card>
  );
}

export function MetricCard({ item, md = 3 }) {
  return (
    <Card
      elevation={0}
      sx={(theme) => ({
        gridColumn: { xs: "span 12", sm: "span 6", md: `span ${md}` },
        borderRadius: "10px",
        border: "1px solid",
        borderColor: "divider",
        backgroundColor: alpha(
          theme.palette.background.paper,
          theme.palette.mode === "dark" ? 0.98 : 0.96
        ),
        position: "relative",
        overflow: "hidden",
        boxShadow: "0 18px 48px rgba(0,0,0,0.16)"
      })}
    >
      <CardContent sx={{ position: "relative", zIndex: 1 }}>
        <Typography variant="body2" color="text.secondary" sx={{ textTransform: "uppercase", letterSpacing: "0.08em" }}>
          {item.label}
        </Typography>
        <Typography variant="h4" sx={{ mt: 1.2 }}>
          <AnimatedMetricValue value={item.value} />
        </Typography>
        <Typography
          variant="body2"
          sx={{
            mt: 1.25,
            display: "inline-flex",
            px: 1.1,
            py: 0.45,
            borderRadius: "10px",
            backgroundColor: alpha(item.tone === "good" ? "#8fd0a6" : "#9d7cf2", 0.14),
            color: item.tone === "good" ? "success.main" : "warning.main"
          }}
        >
          {item.delta}
        </Typography>
      </CardContent>
    </Card>
  );
}

function AnimatedMetricValue({ value }) {
  const [displayValue, setDisplayValue] = useState(() => formatAnimatedMetric(value, 0));

  useEffect(() => {
    const animationDuration = 1100;
    const startTime = performance.now();

    const step = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / animationDuration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(formatAnimatedMetric(value, eased));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    const frameId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(frameId);
  }, [value]);

  return <>{displayValue}</>;
}

function formatAnimatedMetric(rawValue, progress) {
  if (typeof rawValue !== "string") {
    return rawValue;
  }

  const numeric = rawValue.replace(/[^0-9.]/g, "");
  if (!numeric) {
    return rawValue;
  }

  const target = Number(numeric);
  const current = target * progress;

  if (rawValue.includes("₹") && rawValue.includes("L")) {
    return `₹${current.toFixed(2)}L`;
  }

  if (rawValue.includes("%")) {
    return `${Math.round(current)}%`;
  }

  if (rawValue.includes(",")) {
    return Math.round(current).toLocaleString("en-IN");
  }

  return String(Math.round(current));
}

export function FormFields({ fields }) {
  return (
    <Stack spacing={1.5}>
      {fields.map(([label, value]) => (
        <TextField
          key={label}
          label={label}
          value={value}
          fullWidth
          InputProps={{ readOnly: true }}
        />
      ))}
    </Stack>
  );
}

export function SimpleList({ items }) {
  return (
    <Stack spacing={1.25}>
      {items.map((item) => (
        <Paper
          key={item}
          elevation={0}
          sx={(theme) => ({
            p: 2,
            borderRadius: "10px",
            border: "1px solid",
            borderColor: "divider",
            backgroundColor: alpha(
              theme.palette.background.paper,
              theme.palette.mode === "dark" ? 0.96 : 0.94
            )
          })}
        >
          <Typography fontWeight={700}>{item}</Typography>
        </Paper>
      ))}
    </Stack>
  );
}

export function DataTable({ rows }) {
  const headers = Object.keys(rows[0] || {});

  return (
    <TableContainer
      component={Paper}
      elevation={0}
      sx={(theme) => ({
        borderRadius: "10px",
        bgcolor: alpha(
          theme.palette.background.paper,
          theme.palette.mode === "dark" ? 0.96 : 0.94
        ),
        border: "1px solid",
        borderColor: "divider",
        overflow: "hidden"
      })}
    >
      <Table>
        <TableHead>
          <TableRow>
            {headers.map((header) => (
              <TableCell
                key={header}
                sx={(theme) => ({
                  color: "primary.light",
                  borderColor: "divider",
                  backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.mode === "dark" ? 0.18 : 0.08
                  ),
                  fontWeight: 800
                })}
              >
                {formatLabel(header)}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              hover
              sx={{
                "&:hover td": {
                  backgroundColor: alpha("rgb(80 27 148)", 0.08)
                }
              }}
            >
              {headers.map((header) => (
                <TableCell key={header} sx={{ borderColor: "divider", py: 1.5 }}>
                  <CellValue value={row[header]} />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function CellValue({ value }) {
  if (typeof value === "string" && shouldBadge(value)) {
    const tone = badgeTone(value);
    return (
      <Chip
        size="small"
        label={value}
        color={tone}
        variant={tone === "default" ? "outlined" : "filled"}
      />
    );
  }

  return <Typography variant="body2">{value}</Typography>;
}

function shouldBadge(value) {
  return [
    "Now Showing",
    "Coming Soon",
    "Paid",
    "Confirmed",
    "Checked In",
    "Cancelled",
    "Refund Pending",
    "Success",
    "Refunding",
    "Active",
    "Review",
    "VIP",
    "Approved",
    "Flagged"
  ].includes(value);
}

function badgeTone(value) {
  if (["Success", "Paid", "Confirmed", "Checked In", "Active", "Approved", "VIP"].includes(value)) {
    return "success";
  }
  if (["Refund Pending", "Refunding", "Review", "Flagged", "Cancelled"].includes(value)) {
    return "warning";
  }
  if (["Now Showing", "Coming Soon"].includes(value)) {
    return "primary";
  }
  return "default";
}

function formatLabel(value) {
  return value.replace(/([A-Z])/g, " $1").replace(/^./, (char) => char.toUpperCase());
}
