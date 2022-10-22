import { Seo } from "@/components/seo";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { Button, Stack } from "@chakra-ui/react";
import { PublicJobInfo } from "@/features/jobs";
import { NotFound } from "@/components/not-found";
import { ReactElement } from "react";
import { PublicLayout } from "@/layouts/public-layout";
import { getJob, getOrganization } from "@/testing/test-data";

type PublicJobPageProps = InferGetServerSidePropsType<typeof getServerSideProps>;

export const PublicJobPage = ({ job, organization }: PublicJobPageProps) => {
  const isInvalid = !job || !organization || organization.id !== job.organizationId;
  if (isInvalid) {
    return <NotFound />;
  }
  return (
    <>
      <Seo title={`${job.position} | ${job.location}`} />
      <Stack w="full">
        <PublicJobInfo job={job} />
        <Button
          bg="primary"
          color="primaryAccent"
          _hover={{
            opacity: "0.9"
          }}
          as="a"
          href={`mailto:${organization?.email}?subject=Application for ${job.position} position`}
          target="_blank"
        >
          Apply
        </Button>
      </Stack>
    </>
  );
};

PublicJobPage.getLayout = (page: ReactElement) => <PublicLayout>{page}</PublicLayout>;

export default PublicJobPage;

export const getServerSideProps = async ({ params }: GetServerSidePropsContext) => {
  const organizationId = params?.organizationId as string;
  const jobId = params?.jobId as string;
  const [organization, job] = await Promise.all([
    getOrganization(organizationId).catch(() => null),
    getJob(jobId).catch(() => null)
  ]);
  return {
    props: {
      organization,
      job
    }
  };
};