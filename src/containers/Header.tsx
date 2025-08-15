import type { MouseEvent } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useActiveTab, useSetActiveTab, type TabType } from "@/store";
import { Tabs } from "@/constants";

const transition = "transition-colors duration-100 ease-in-out";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const setActiveTab = useSetActiveTab();
  const activeTab = useActiveTab();

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    const id = target?.id as TabType;
    setActiveTab(id);
    setIsOpen(false);
  };

  return (
    <header className="border-b border-color w-full h-fit font-md">
      <nav className="flex justify-between items-center">
        <p className="p-1.5 max-w-sm flex-1/4">Aditya Garg</p>
        <ul
          onClick={handleClick}
          className="hidden md:flex flex-3/4 text-center"
        >
          <li
            className={cn(
              "flex-1/4 max-w-15 cursor-pointer heading-md hover:border-b-2 border-b-orange-300",
              activeTab === Tabs.HELLO && "border-b-2 border-b-orange-300",
              transition
            )}
          >
            <span
              id={Tabs.HELLO}
              className="block py-1.5 w-full h-full border-r border-l border-color"
            >
              _hello
            </span>
          </li>
          <li
            className={cn(
              "flex-1/4 max-w-15 cursor-pointer heading-md hover:border-b-2 border-b-orange-300",
              activeTab === Tabs.ABOUT_ME && "border-b-2 border-b-orange-300",
              transition
            )}
          >
            <span
              id={Tabs.ABOUT_ME}
              className="block py-1.5 w-full h-full border-r border-color"
            >
              _about-me
            </span>
          </li>
          <li
            className={cn(
              "flex-1/4 max-w-15 cursor-pointer heading-md hover:border-b-2 border-b-orange-300",
              activeTab === Tabs.PROJECTS && "border-b-2 border-b-orange-300",
              transition
            )}
          >
            <span
              id={Tabs.PROJECTS}
              className="block py-1.5 w-full h-full border-r border-color"
            >
              _projects
            </span>
          </li>
          <li
            className={cn(
              "cursor-pointer flex-1/4 ml-auto heading-md max-w-20 hover:border-b-2 border-b-orange-300",
              activeTab === Tabs.CONTACT && "border-b-2 border-b-orange-300",
              transition
            )}
          >
            <span
              id={Tabs.CONTACT}
              className="block p-1.5 text-center w-full h-full border-l border-color"
            >
              _contact-me
            </span>
          </li>
        </ul>
        <section className="md:hidden">
          <Drawer open={isOpen}>
            <DrawerTrigger className="p-1.5" onClick={() => setIsOpen(true)}>
              <Menu className="cursor-pointer" />
            </DrawerTrigger>
            <DrawerContent>
              <div className="flex flex-col border-primary font-md w-full h-full main-background">
                <div className="flex justify-between p-1.5">
                  <p># navigate:</p>
                  <DrawerClose
                    className="cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    <X />
                  </DrawerClose>
                </div>
                <ul onClick={handleClick}>
                  <li
                    id={Tabs.HELLO}
                    className={cn(
                      "flex-1/4 cursor-pointer heading-md block p-1.5 border-t border-b border-color hover:border hover:border-orange-300"
                    )}
                  >
                    _hello
                  </li>
                  <li
                    id={Tabs.ABOUT_ME}
                    className={cn(
                      "flex-1/4 cursor-pointer heading-md block p-1.5 border-b border-color hover:border hover:border-orange-300"
                    )}
                  >
                    _about-me
                  </li>
                  <li
                    id={Tabs.PROJECTS}
                    className={cn(
                      "flex-1/4 cursor-pointer heading-md block p-1.5 border-b border-color hover:border hover:border-orange-300"
                    )}
                  >
                    _projects
                  </li>
                  <li
                    id={Tabs.CONTACT}
                    className={cn(
                      "flex-1/4 cursor-pointer heading-md block p-1.5 border-b border-color hover:border hover:border-orange-300"
                    )}
                  >
                    _contact-me
                  </li>
                </ul>
              </div>
            </DrawerContent>
          </Drawer>
        </section>
      </nav>
    </header>
  );
};

export default Header;
