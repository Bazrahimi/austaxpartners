import { buildMetadata, SEO_PAGES } from "@/app/_lib/org/layoutAndSeo";
import Button from "@/app/_ui/button/Button";
import { Header } from "@/app/_ui/typography/Header";
import { P } from "@/app/_ui/typography/paragraph";

export const metadata = buildMetadata(SEO_PAGES.webmail());

export default function WebmailPage() {
  return (
    <main className="mx-auto max-w-xl px-6 py-16">
      <div className="rounded-3xl border border-white/70 bg-white/90 p-8 text-center shadow-lg backdrop-blur">
        <Header as="h1">Email Login</Header>

        <P className="mt-4">
          Access your business email securely through Hostinger webmail. Use
          your full email address and password on the next page.
        </P>

        <div className="mt-8 flex justify-center">
          <Button
            as="link"
            href="https://mail.hostinger.com"
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            size="lg"
            className="min-w-[220px]"
          >
            Open Webmail
          </Button>
        </div>
      </div>
    </main>
  );
}