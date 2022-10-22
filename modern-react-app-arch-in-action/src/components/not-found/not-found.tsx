import { Center, Heading, VStack } from "@chakra-ui/react";
import { NotAllowedIcon } from "@chakra-ui/icons";

export const NotFound = () =>
  <Center color="gray.500" h="96">
    <VStack>
      <NotAllowedIcon boxSize="32" />
      <Heading>Not Found</Heading>
    </VStack>
  </Center>;