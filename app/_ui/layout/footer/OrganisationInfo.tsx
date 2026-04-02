import { ORG_PROFILE } from "@/app/_lib/org/profile";
import { P } from "../../typography/paragraph";
import FooterHeader from "./FooterHeader";

const OrganisationInfo = ({
  lightHeader = false,
}: {
  lightHeader: boolean;
}) => {
  return (
    <div className="sm:col-span-2">
      <FooterHeader lightContent={lightHeader}>
        {ORG_PROFILE.orgName}
      </FooterHeader>

      <P size="md" className="text-gray-100">
        {ORG_PROFILE.description}
      </P>
      <P className="mt-2 text-gray-100 " size="sm">
        <span className="font-medium">ABN:</span> {ORG_PROFILE.abn}
      </P>
      <P className="mt-2 text-gray-100" size="sm">
        {ORG_PROFILE.address}
      </P>
    </div>
  );
};

export default OrganisationInfo;
