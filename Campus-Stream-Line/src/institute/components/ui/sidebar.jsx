import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { PanelLeft } from "lucide-react";

import { useIsMobile } from "../../hooks/use-mobile";
import { cn } from "../../lib/utils";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Separator } from "../../components/ui/separator";
import { Sheet, SheetContent } from "../../components/ui/sheet";
import { Skeleton } from "../../components/ui/skeleton";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../components/ui/tooltip";

/* -------------------------------------------------------------------------- */
/* constants */
/* -------------------------------------------------------------------------- */

const SIDEBAR_WIDTH = "16rem";
const SIDEBAR_WIDTH_MOBILE = "18rem";
const SIDEBAR_WIDTH_ICON = "3rem";

/* -------------------------------------------------------------------------- */
/* context */
/* -------------------------------------------------------------------------- */

const SidebarContext = React.createContext(null);

function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within SidebarProvider");
  }
  return context;
}

/* -------------------------------------------------------------------------- */
/* provider */
/* -------------------------------------------------------------------------- */

const SidebarProvider = React.forwardRef(
  ({ defaultOpen = true, className, children, ...props }, ref) => {
    const isMobile = useIsMobile();
    const [open, setOpen] = React.useState(defaultOpen);
    const [openMobile, setOpenMobile] = React.useState(false);

    const toggleSidebar = React.useCallback(() => {
      isMobile ? setOpenMobile((o) => !o) : setOpen((o) => !o);
    }, [isMobile]);

    const state = open ? "expanded" : "collapsed";

    return (
      <SidebarContext.Provider
        value={{
          open,
          setOpen,
          openMobile,
          setOpenMobile,
          toggleSidebar,
          state,
          isMobile,
        }}
      >
        <TooltipProvider delayDuration={0}>
          <div
            ref={ref}
            className={cn(
              "group/sidebar-wrapper flex min-h-svh w-full",
              className,
            )}
            style={{
              "--sidebar-width": SIDEBAR_WIDTH,
              "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
            }}
            {...props}
          >
            {children}
          </div>
        </TooltipProvider>
      </SidebarContext.Provider>
    );
  },
);
SidebarProvider.displayName = "SidebarProvider";

/* -------------------------------------------------------------------------- */
/* sidebar */
/* -------------------------------------------------------------------------- */

const Sidebar = React.forwardRef(
  ({ className, children, side = "left", ...props }, ref) => {
    const { isMobile, openMobile, setOpenMobile } = useSidebar();

    if (isMobile) {
      return (
        <Sheet open={openMobile} onOpenChange={setOpenMobile}>
          <SheetContent
            side={side}
            className="w-[--sidebar-width] bg-sidebar p-0"
            style={{ "--sidebar-width": SIDEBAR_WIDTH_MOBILE }}
          >
            {children}
          </SheetContent>
        </Sheet>
      );
    }

    return (
      <aside
        ref={ref}
        className={cn(
          "hidden md:flex h-svh w-[--sidebar-width] flex-col bg-sidebar",
          className,
        )}
        {...props}
      >
        {children}
      </aside>
    );
  },
);
Sidebar.displayName = "Sidebar";

/* -------------------------------------------------------------------------- */
/* trigger */
/* -------------------------------------------------------------------------- */

const SidebarTrigger = React.forwardRef(({ className, ...props }, ref) => {
  const { toggleSidebar } = useSidebar();

  return (
    <Button
      ref={ref}
      size="icon"
      variant="ghost"
      className={cn("h-7 w-7", className)}
      onClick={toggleSidebar}
      {...props}
    >
      <PanelLeft />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  );
});
SidebarTrigger.displayName = "SidebarTrigger";

/* -------------------------------------------------------------------------- */
/* basic building blocks */
/* -------------------------------------------------------------------------- */

const SidebarContent = ({ className, ...props }) => (
  <div
    data-sidebar="content"
    className={cn("flex flex-1 flex-col gap-2 overflow-auto", className)}
    {...props}
  />
);

const SidebarHeader = ({ className, ...props }) => (
  <div className={cn("p-2", className)} {...props} />
);

const SidebarFooter = ({ className, ...props }) => (
  <div className={cn("p-2", className)} {...props} />
);

const SidebarSeparator = ({ className, ...props }) => (
  <Separator className={cn("mx-2 bg-sidebar-border", className)} {...props} />
);

/* -------------------------------------------------------------------------- */
/* menu */
/* -------------------------------------------------------------------------- */

const sidebarMenuButtonVariants = cva(
  "flex w-full items-center gap-2 rounded-md p-2 text-sm hover:bg-sidebar-accent",
);

const SidebarMenuButton = React.forwardRef(
  ({ asChild = false, isActive, className, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        data-active={isActive}
        className={cn(sidebarMenuButtonVariants(), className)}
        {...props}
      />
    );
  },
);
SidebarMenuButton.displayName = "SidebarMenuButton";

/* -------------------------------------------------------------------------- */
/* exports */
/* -------------------------------------------------------------------------- */

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuButton,
  SidebarProvider,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
};
