import { ReactNode } from "react";
import TopNavBar from "./TopNavBar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <TopNavBar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
