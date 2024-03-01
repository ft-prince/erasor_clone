'use client'

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import { useEffect } from "react";
import MidFile from "./_components/MidFile";

export default function Home() {
  const {user}=useKindeBrowserClient();
  useEffect(()=>{
  },[user])
  return (
  <div>
<Header/>
<MidFile/>
<Hero/>
  </div>
  );
}
