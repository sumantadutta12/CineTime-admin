import { Paper, Stack, Typography } from "@mui/material";
import { settingsGroups } from "../data/mockData";
import { PageGrid, SectionCard } from "../components/Common";

function SettingsPage() {
  return (
    <PageGrid>
      {settingsGroups.map((group) => (
        <SectionCard key={group.title} title={group.title} subtitle="Config" md={6} accent="dark">
          <Stack spacing={1.25}>
            {group.items.map(([key, value]) => (
              <Paper
                key={key}
                elevation={0}
                sx={{
                  p: 1.75,
                  borderRadius: "10px",
                  border: "1px solid",
                  borderColor: "divider",
                  display: "flex",
                  flexDirection: "column",
                  gap: 0.5
                }}
              >
                <Typography variant="body2" color="text.secondary">
                  {key}
                </Typography>
                <Typography fontWeight={700}>{value}</Typography>
              </Paper>
            ))}
          </Stack>
        </SectionCard>
      ))}
    </PageGrid>
  );
}

export default SettingsPage;
