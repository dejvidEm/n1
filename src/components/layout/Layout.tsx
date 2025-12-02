import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

interface LayoutProps {
  children: ReactNode;
  hideBreadcrumbs?: boolean;
}

export const Layout = ({ children, hideBreadcrumbs = false }: LayoutProps) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const showBreadcrumbs = !isHomePage && !hideBreadcrumbs;

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      {showBreadcrumbs && <Breadcrumbs />}
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};
