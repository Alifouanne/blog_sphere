import React from "react";
import DashboardSidebar from "@/components/dashboard/DashboardISidebar";
import DashboardNav from "@/components/dashboard/DashboardNav";
export const dynamic = "force-dynamic";
const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <DashboardSidebar />
      <div className="flex flex-col">
        <DashboardNav />
        <main className="flex flex-col flex-1 gap-4 p-4 lg:gap-6 lg:p-6">
          {children}
        </main>
      </div>
    </section>
  );
};

export default DashboardLayout;
