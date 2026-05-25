"use client";
import { LanguageProvider } from "./LanguageContext";

export default function RootProvider({ children }: { children: React.ReactNode }) {
  return <LanguageProvider>{children}</LanguageProvider>;
}