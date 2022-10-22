import { Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { Link } from "@/components/link";
import { ViewIcon } from "@chakra-ui/icons";
import { Content } from "@/components/content";
import { Job } from "@/features/jobs";

export const PublicJobInfo = ({ job }: { job: Job }) => <>
  <VStack pt="16" pb="4" spacing="8">
    <Heading size={"2xl"}>{job?.position}</Heading>
    <HStack spacing="12">
      <Text>{job?.department}</Text>
      <Text>{job?.location}</Text>
    </HStack>
    <Link href={`/organizations/${job?.organizationId}`} variant="outline" icon={<ViewIcon />}>View More Jobs</Link>
  </VStack>
  <Content>{job.info}</Content>
</>;