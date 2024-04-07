"use client"
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const session  = useSession();
  return (
    <> 
      <button onClick={() => signIn()}>
        Sign In
      </button>
      <button onClick={() => signOut()}>
        SignOut
      </button>
      {JSON.stringify(session)}
    </>
  );
}
