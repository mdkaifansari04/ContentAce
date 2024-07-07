import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="w-full h-screen bg-primary-dark flex justify-center items-center">
      <SignUp />
    </main>
  );
}
