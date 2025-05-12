"use client";
import { SignedIn, SignedOut, SignInButton, SignOutButton } from "@clerk/nextjs";

const HomePage = () => {
  return (
    <div>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <SignOutButton />
      </SignedIn>
    </div>
  );
};

export default HomePage;
