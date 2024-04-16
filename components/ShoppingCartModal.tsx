"use client"

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"

export default function ShoppingCartModal() {
  return (
    <Sheet defaultOpen={true}>
      <SheetContent className='sm:max-w-lg w-[90vw]'>
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>

        <div className='h-full flex flex-col justify-between'>
          <div className='mt-8 flex-1 overflow-y-auto'>
            <ul className="-my-6 divide-y divide-gray-200">

            </ul>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}