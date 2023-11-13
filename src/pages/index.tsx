import { Heading } from "@ignite-ui/react";
import { signIn } from "next-auth/react";

export default function Home() {
  return (
    <Heading>

      <button onClick={() => signIn("google")}>login social</button>
    </Heading>
  );
}

