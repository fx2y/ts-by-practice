import { Organization } from "@/features/organizations";
import { Heading, Stack } from "@chakra-ui/react";
import { InfoCard } from "@/components/info-card";
import { Content } from "@/components/content";

export const OrganizationInfo = ({ organization }: { organization: Organization }) =>
  <>
    <Stack w="full" alignItems="center" justifyContent="space-between" direction={{ base: "column", md: "row" }}>
      <Heading>{organization?.name}</Heading>
      <Stack direction={{ base: "column", md: "row" }} w={{ base: "full", md: "auto" }}>
        <InfoCard label="Email" value={organization.email} />
        <InfoCard label="Phone Number" value={organization.phone} />
      </Stack>
    </Stack>
    <Content>{organization.info}</Content>
  </>;