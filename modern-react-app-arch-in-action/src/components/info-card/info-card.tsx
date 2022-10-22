import { Box, Stack, Text } from "@chakra-ui/react";

export type InfoCardProps = {
  label: string;
  value: string;
};

export const InfoCard = ({ label, value }: InfoCardProps) =>
  <Box p="4">
    <Stack>
      <Text fontSize="sm" color="muted">
        {label}
      </Text>
    </Stack>
  </Box>;