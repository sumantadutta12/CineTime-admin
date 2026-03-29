import {
  Box,
  Button,
  Chip,
  Paper,
  Stack,
  TextField,
  Typography
} from "@mui/material";
import { PageGrid, SectionCard } from "../components/Common";

function BlockSeatsPage() {
  return (
    <PageGrid>
      <SectionCard
        title="Block Seats"
        subtitle="Seat Control"
        md={7}
        accent="dark"
        actions={<Chip label="Manager Approval" color="primary" size="small" />}
      >
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))" }, gap: 1.5 }}>
          <TextField label="Branch" defaultValue="CineTime Downtown" fullWidth />
          <TextField label="Screen" defaultValue="Screen 4" fullWidth />
          <TextField label="Show" defaultValue="Neon After Dark / 07:40 PM" fullWidth />
          <TextField label="Seat Range" defaultValue="F1, F2, F3, F4" fullWidth />
          <TextField label="Block Type" defaultValue="Maintenance Hold" fullWidth />
          <TextField label="Valid Until" defaultValue="Tonight after final show" fullWidth />
          <TextField
            label="Reason"
            defaultValue="Projector-side row kept unavailable due to temporary acoustic panel repair and VIP inspection pass."
            multiline
            minRows={5}
            fullWidth
            sx={{ gridColumn: { xs: "span 1", sm: "span 2" } }}
          />
        </Box>
      </SectionCard>

      <SectionCard title="Seat Hold Snapshot" subtitle="Impact Review" md={5} accent="dark">
        <Stack spacing={1.25}>
          {[
            ["Seats Selected", "4 seats", "Premium middle-row seats under temporary hold."],
            ["Revenue Impact", "৳1,440", "Estimated hold impact if the row remains blocked through prime time."],
            ["Auto Release", "Disabled", "Manual review required before reopening the row."],
            ["Audit Logging", "Enabled", "Every block and unblock action will be recorded for traceability."]
          ].map(([title, value, copy]) => (
            <Paper key={title} elevation={0} sx={{ p: 2, borderRadius: "10px", border: "1px solid", borderColor: "divider" }}>
              <Stack direction="row" justifyContent="space-between" spacing={2}>
                <Typography fontWeight={700}>{title}</Typography>
                <Chip label={value} color="primary" size="small" />
              </Stack>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 0.75 }}>
                {copy}
              </Typography>
            </Paper>
          ))}
        </Stack>
      </SectionCard>

      <SectionCard title="Manager Actions" subtitle="Override Flow" md={12} accent="dark">
        <Stack direction={{ xs: "column", sm: "row" }} spacing={1.25}>
          <Button variant="outlined">Preview Seat Map</Button>
          <Button variant="outlined">Schedule Auto Release</Button>
          <Button variant="contained">Confirm Block</Button>
        </Stack>
      </SectionCard>
    </PageGrid>
  );
}

export default BlockSeatsPage;
