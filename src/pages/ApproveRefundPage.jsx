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

function ApproveRefundPage() {
  return (
    <PageGrid>
      <SectionCard
        title="Approve Refund"
        subtitle="Finance Review"
        md={8}
        accent="dark"
        actions={<Chip label="High Priority" color="primary" size="small" />}
      >
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))" }, gap: 1.5 }}>
          <TextField label="Booking ID" defaultValue="CT-24087" fullWidth />
          <TextField label="Transaction ID" defaultValue="TXN-99202" fullWidth />
          <TextField label="User" defaultValue="Sara Khan" fullWidth />
          <TextField label="Payment Method" defaultValue="Card" fullWidth />
          <TextField label="Amount" defaultValue="৳900" fullWidth />
          <TextField label="Refund Mode" defaultValue="Original source" fullWidth />
          <TextField label="Cause" defaultValue="Show cancelled due to technical issue" fullWidth />
          <TextField label="Queue Status" defaultValue="Awaiting manager approval" fullWidth />
          <TextField
            label="Approval Note"
            defaultValue="Customer contacted support within SLA window. Booking and gateway state verified against cancellation log."
            multiline
            minRows={5}
            fullWidth
            sx={{ gridColumn: { xs: "span 1", sm: "span 2" } }}
          />
        </Box>
      </SectionCard>

      <SectionCard title="Refund Checklist" subtitle="Verification" md={4} accent="dark">
        <Stack spacing={1.25}>
          {[
            "Booking status and cancellation time confirmed",
            "Payment gateway and webhook records matched",
            "Seat inventory restored after cancellation",
            "Customer complaint note linked to refund ticket"
          ].map((item) => (
            <Paper key={item} elevation={0} sx={{ p: 2, borderRadius: "10px", border: "1px solid", borderColor: "divider" }}>
              <Typography variant="body2" color="text.secondary">
                {item}
              </Typography>
            </Paper>
          ))}
        </Stack>
      </SectionCard>

      <SectionCard title="Approval Actions" subtitle="Settlement Flow" md={12} accent="dark">
        <Stack direction={{ xs: "column", sm: "row" }} spacing={1.25}>
          <Button variant="outlined">Hold for Review</Button>
          <Button variant="outlined">Export Evidence</Button>
          <Button variant="contained">Approve Refund</Button>
        </Stack>
      </SectionCard>
    </PageGrid>
  );
}

export default ApproveRefundPage;
