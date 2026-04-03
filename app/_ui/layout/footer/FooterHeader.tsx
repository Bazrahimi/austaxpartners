import { cn } from "@/app/_lib/utils/cn";
import { Header } from "../../typography/Header";

type FooterHeaderProps = {
  children: React.ReactNode;
  lightContent: boolean;
};

const FooterHeader = ({
  children,
  lightContent = false,
}: FooterHeaderProps) => {
  return (
    <Header
      as="h4"
      size="sm"
      align="left"
      className={cn(lightContent && "text-gray-950")}
    >
      {children}
    </Header>
  );
};

export default FooterHeader;