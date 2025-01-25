"use client"
import * as React from "react"
import Link from "next/link"
import "/app/globals.css";

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  // navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { ConfettiButton } from "@/components/confetti-button"

const navItems = [
  {
    title: "Über uns",
    href: "/about",
    items: [
      { title: "Geschichte", href: "/about#history" },
      { title: "Vorstand", href: "/about#board" },
      { title: "Philosophie", href: "/about#philosophy" },
    ],
  },
  {
    title: "Unser Sport",
    href: "/sport",
    items: [
      { title: "Regeln", href: "/sport#rules" },
      { title: "Ausrüstung", href: "/sport#equipment" },
      { title: "Turniere", href: "/sport#tournaments" },
    ],
  },
  {
    title: "Mitglied werden",
    href: "/join",
    items: [
      { title: "Vorteile", href: "/join#benefits" },
      { title: "Beiträge", href: "/join#fees" },
      { title: "Anmeldung", href: "/join#registration" },
    ],
  },
  {
    title: "Training",
    href: "/training",
    items: [
      { title: "Anfänger", href: "/training#beginners" },
      { title: "Fortgeschrittene", href: "/training#advanced" },
      { title: "Leistungssport", href: "/training#competitive" },
    ],
  },
]

export function MainNav() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center py-4 px-6 pr-8 bg-white shadow-md">
      <Link href="/" className="flex items-center space-x-2">
        <span className="font-bold text-xl">Schlagball Hamburg e.V.</span>
      </Link>
      <NavigationMenu className="hidden md:flex space-x-4">
        <NavigationMenuList>
          {navItems.map((item) => (
            <NavigationMenuItem key={item.href}>
              <NavigationMenuTrigger className="nav-link">{item.title}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href={item.href}
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">{item.title}</div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Erfahren Sie mehr über {item.title.toLowerCase()}.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    {item.items.map((subItem) => (
                      <ListItem key={subItem.href} href={subItem.href} title={subItem.title}>
                        Mehr Informationen zu {subItem.title.toLowerCase()}.
                      </ListItem>
                    ))}
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] sm:w-[400px] flex flex-col">
          <nav className="flex-1 overflow-y-auto">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <div key={item.href} className="flex flex-col gap-2">
                  <Link href={item.href} className="nav-link text-sm font-medium" onClick={() => setIsOpen(false)}>
                    {item.title}
                  </Link>
                  {item.items.map((subItem) => (
                    <Link
                      key={subItem.href}
                      href={subItem.href}
                      className="nav-link text-sm pl-4"
                      onClick={() => setIsOpen(false)}
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </nav>
          <div className="mt-4 pt-4 border-t">
            <ConfettiButton href="/mitgliedsantrag.pdf">Mitglied werden</ConfettiButton>
          </div>
        </SheetContent>
      </Sheet>
      <div className="hidden md:block ml-4">
        <ConfettiButton href="/mitgliedsantrag.pdf">Mitglied werden</ConfettiButton>
      </div>
    </div>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"

