"use client";

import React, { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { ButtonProps } from "@/components/ui/button";

interface LayoutProps {
  children: ReactNode; // Main content inside the dialog/drawer
  title?: string; // Title for the dialog/drawer
  description?: string; // Description for the dialog/drawer
  triggerContent?: ReactNode; // Content for the default trigger button
  buttonProps?: ButtonProps; // Props for the Shadcn Button
  trigger?: ReactNode; // Custom trigger to be rendered outside
}

const Layout: React.FC<LayoutProps> = ({
  children,
  title,
  description,
  triggerContent,
  buttonProps = {},
  trigger,
}) => {
  return (
    <>
      {/* Dialog for screens >= md */}
      <div className="hidden md:block">
        <Dialog>
          <DialogTrigger asChild>
            {trigger || <button {...buttonProps}>{triggerContent}</button>}
          </DialogTrigger>
          <DialogContent className="max-w-lg space-y-4">
            {/* Accessible Title */}
            {title && <DialogTitle>{title}</DialogTitle>}

            {/* Accessible Description */}
            {description && (
              <DialogDescription>{description}</DialogDescription>
            )}

            {/* Main Content */}
            <div>{children}</div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Drawer for screens < md */}
      <div className="block md:hidden">
        <Drawer>
          <DrawerTrigger asChild>
            {trigger || <button {...buttonProps}>{triggerContent}</button>}
          </DrawerTrigger>
          <DrawerContent className="fixed inset-x-0 bottom-0 max-h-[75%] bg-white p-6 shadow-lg rounded-t-lg space-y-4">
            {/* Accessible Title */}
            {title && <DialogTitle>{title}</DialogTitle>}

            {/* Accessible Description */}
            {description && (
              <DialogDescription>{description}</DialogDescription>
            )}

            {/* Main Content */}
            <div>{children}</div>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
};

export default Layout;
