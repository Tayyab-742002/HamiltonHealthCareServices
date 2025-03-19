"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { navigationConfig } from "@/config/navigation";
import { usePathname } from "next/navigation";
import Image from "next/image";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const navItems = navigationConfig.mainNav;

  return (
    <nav className="sticky top-0 z-99 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="text-lg font-bold">
          <Image
            src="/logo.png"
            alt="Carecor Health Services"
            width={200}
            height={200}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={cn(
                "text-sm font-medium transition-colors",
                pathname === item.path
                  ? "text-foreground"
                  : "text-foreground/60 hover:text-foreground/80"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation Button */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label="Open menu"
            >
              <Menu className="!h-full !w-full opacity-60" />
            </Button>
          </SheetTrigger>

          {/* Mobile Navigation Content */}
          <SheetContent
            side="right"
            className="w-[300px] sm:w-[400px] z-100 [&>button]:hidden"
            onInteractOutside={() => setIsOpen(false)}
          >
            <div className="flex flex-col gap-4">
              <div className="text-center bg-blue-950 text-white p-5 text-lg">
                Menu
              </div>
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="flex justify-between border-b-1 border-gray-300"
                >
                  <Link
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "px-4 py-2 font-medium transition-colors text-lg w-full",
                      "hover:bg-accent hover:text-accent-foreground",
                      pathname === item.path
                        ? "text-foreground"
                        : "text-foreground/60"
                    )}
                  >
                    {item.name}
                  </Link>
                  <ChevronRight className="text-primary mr-2 !opacity-50" />
                </div>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
