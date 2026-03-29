import { Chip, Stack } from "@mui/material";
import { paymentStats, payments } from "../data/mockData";
import { DataTable, MetricCard, PageGrid, SectionCard } from "../components/Common";

function PaymentsPage() {
  return (
    <PageGrid>
      {paymentStats.map((item) => (
        <MetricCard key={item.label} item={item} md={4} />
      ))}
      <SectionCard title="Payment History" subtitle="Transactions" md={8} accent="dark">
        <DataTable rows={payments} />
      </SectionCard>
      <SectionCard title="Payment Integrations" subtitle="Gateways" md={4} accent="red">
        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
          <Chip label="Razorpay" color="primary" />
          <Chip label="Stripe" variant="outlined" />
          <Chip label="UPI" variant="outlined" />
        </Stack>
      </SectionCard>
    </PageGrid>
  );
}

export default PaymentsPage;
