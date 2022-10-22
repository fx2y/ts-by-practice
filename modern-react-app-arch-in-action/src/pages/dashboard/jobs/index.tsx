import { useJobs, useUser } from "@/testing/test-data";
import { Loading } from "@/components/loading";
import { Seo } from "@/components/seo";
import { Heading, HStack } from "@chakra-ui/react";
import { Link } from "@/components/link";
import { JobsList } from "@/features/jobs";
import { PlusSquareIcon } from "@chakra-ui/icons";
import { ReactElement } from "react";
import { DashboardLayout } from "@/layouts/dashboard-layout";

const DashboardJobsPage = () => {
  const user = useUser();
  const jobs = useJobs(user.data?.organizationId ?? "");
  if (jobs.isLoading) return <Loading />;
  if (!user.data) return null;
  return (
    <>
      <Seo title="Jobs" />
      <HStack mb="8" align="center" justify="space-between">
        <Heading>Jobs</Heading>
        <Link icon={<PlusSquareIcon />} variant="solid" href="/dashboard/jobs/create">
          Create Job
        </Link>
      </HStack>
      <JobsList type="dashboard" jobs={jobs.data || []} organizationId={user.data.organizationId}
                isLoading={jobs.isLoading} />
    </>
  );
};

DashboardJobsPage.getLayout = (page: ReactElement) => <DashboardLayout>{page}</DashboardLayout>;

export default DashboardJobsPage;