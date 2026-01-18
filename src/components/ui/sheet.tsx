import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";

export const Sheet = Dialog.Root;
export const SheetTrigger = Dialog.Trigger;
export const SheetClose = Dialog.Close;

export const SheetPortal = Dialog.Portal;

export function SheetOverlay(
  props: React.ComponentPropsWithoutRef<typeof Dialog.Overlay>
) {
  return (
    <Dialog.Overlay
      className="fixed inset-0 bg-black/50"
      {...props}
    />
  );
}

export function SheetContent(
  props: React.ComponentPropsWithoutRef<typeof Dialog.Content>
) {
  return (
    <Dialog.Portal>
      <SheetOverlay />
      <Dialog.Content
        className="fixed right-0 top-0 h-full w-80 bg-white p-6 shadow-lg"
        {...props}
      />
    </Dialog.Portal>
  );
}

export function SheetHeader({
  children,
}: {
  children?: React.ReactNode;
}) {
  return <div className="mb-4">{children}</div>;
}

export function SheetFooter({
  children,
}: {
  children?: React.ReactNode;
}) {
  return <div className="mt-4">{children}</div>;
}

export function SheetTitle(
  props: React.HTMLAttributes<HTMLHeadingElement>
) {
  return (
    <h2
      className="text-lg font-semibold"
      {...props}
    />
  );
}

export function SheetDescription(
  props: React.HTMLAttributes<HTMLParagraphElement>
) {
  return (
    <p
      className="text-sm text-gray-500"
      {...props}
    />
  );
}
