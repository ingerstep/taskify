import { auth } from "@clerk/nextjs/server";

const OrganizationIdPage = () => {
  const {userId, orgId} = auth()

  return <div>Org page</div>;
};

export default OrganizationIdPage;
