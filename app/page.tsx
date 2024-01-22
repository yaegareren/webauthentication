import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <main className="flex h-full flex-col items-center justify-center bg-gradient-to-r from-gray-700 via-gray-900 to-black">
        <div className="space-y-6 text-center">
          <h1 className="text-6xl font-semibold text-white">🔐Auth</h1>
          <p className="text-white text-lg">
            Authentication System built using Next.js 14
          </p>
          <div>
            <LoginButton>
              <Button variant="secondary" size="lg">
                Sign in
              </Button>
            </LoginButton>
          </div>
        </div>
      </main>
    </>
  );
}
