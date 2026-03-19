import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center p-6 bg-background">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[128px] -z-10 pointer-events-none" />
      <SignIn appearance={{ elements: { card: "bg-card/50 backdrop-blur-xl border border-border/40" } }} />
    </div>
  );
}
