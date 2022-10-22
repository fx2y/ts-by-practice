import { useJob } from "@/testing/test-data";
import { Loading } from "@/components/loading";
import { NotFound } from "@/components/not-found";
import { Seo } from "@/components/seo";
import { DashboardJobInfo } from "@/features/jobs";
import { DashboardLayout } from "@/layouts/dashboard-layout";
import { ReactElement } from "react";
import { useRouter } from "next/router";

const DashboardJobPage = () => {
  const router = useRouter();
  const jobId = router.query.jobId as string;
  const job = useJob(jobId);
  if (job.isLoading) {
    return <Loading />;
  }
  if (!job.data) {
    return <NotFound />;
  }
  return (
    <>
      <Seo title={`${job.data.position} | ${job.data.location}`} />
      <DashboardJobInfo job={job.data} />
    </>
  );
};

DashboardJobPage.getLayout = (page: ReactElement) => <DashboardLayout>{page}</DashboardLayout>;

export default DashboardJobPage;