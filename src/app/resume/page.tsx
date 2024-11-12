import { Container } from "@/components/Container";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { WorkHistory } from "@/components/WorkHistory";

export default function Home() {
  return (
    <main className="bg-white">
      <Container >
        <span className="text-4xl">💼</span>
        <h1 className="font-black">Work History</h1>
        <Paragraph className="max-w-xl mt-4">
          I&apos;m a full-stack developer that loves{" "}
          <Highlight>building products</Highlight> and web apps that can impact
          millions of lives
        </Paragraph>
        <WorkHistory />
      </Container>

    </main>

  );
}
