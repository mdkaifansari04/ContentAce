import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="w-full h-screen flex justify-center bg-primary-dark items-center">
      <SignIn />
    </main>
  );
}
