import { Center, Spinner } from "@chakra-ui/react";

export const Loading = () => <Center h="96">
  <Spinner size="xl" data-testid="loading" color="primary" />
</Center>;