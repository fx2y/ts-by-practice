import { Link } from "@/components/link";
import { Center } from "@chakra-ui/react";
import { NotFound } from "@/components/not-found";

const NotFoundPage = () => {
  return (
    <>
      <NotFound />
      <Center>
        <Link href="/">Home</Link>
      </Center>
    </>
  );
};

export default NotFoundPage;