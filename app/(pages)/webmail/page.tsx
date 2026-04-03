import { Header } from "@/app/_ui/typography/Header";
import { P } from "@/app/_ui/typography/paragraph";

export default function WebmailPage() {
  return (
    <main className="mx-auto max-w-xl px-6 py-16">
      <Header as="h1">Email Login</Header>

      <P>
        Access your business email securely through Hostinger webmail. Use your
        full email address and password on the next page.
      </P>

      <div className="mt-6">
        <a
          href="https://mail.hostinger.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-xl border px-4 py-2 text-sm font-medium hover:bg-gray-50"
          aria-label="Open Hostinger webmail in a new tab"
        >
          Open Webmail
        </a>
      </div>
    </main>
  );
}