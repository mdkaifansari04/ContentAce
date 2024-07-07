import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import SidebarMenubar from "./sidebarMenu";

export default function SidebarTrigger({
  trigger,
}: {
  trigger: React.ReactNode;
}) {
  return (
    <Sheet>
      <SheetTrigger asChild>{trigger}</SheetTrigger>
      <SheetContent>
        <SidebarMenubar className="overflow-auto !block md:hidden" />
      </SheetContent>
    </Sheet>
  );
}
