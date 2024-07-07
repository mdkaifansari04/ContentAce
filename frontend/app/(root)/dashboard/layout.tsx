import MobileHeader from '@/components/shared/header';
import SidebarMenubar from '@/components/sidebar/sidebarMenu';
import '../../global.css';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`bg-primary-dark w-full text-primary-foreground font-poppins scroll-smooth flex flex-col md:flex-row`}
    >
      <MobileHeader />
      <SidebarMenubar />
      {children}
    </div>
  );
}
