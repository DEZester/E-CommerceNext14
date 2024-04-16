"use client"

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import {useShoppingCart} from "use-shopping-cart";
import Image from "next/image";

export default function ShoppingCartModal() {
  const {
    cartCount,
    shouldDisplayCart,
    handleCartClick,
    cartDetails,
    removeItem
  } = useShoppingCart();

  return (
    <Sheet defaultOpen={true} open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
      <SheetContent className='sm:max-w-lg w-[90vw]'>
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>

        <div className='h-full flex flex-col justify-between'>
          <div className='mt-8 flex-1 overflow-y-auto'>
            <ul className="-my-6 divide-y divide-gray-200">
              {
                cartCount === 0 ? <h1 className='py-6'>You don't have any items</h1> :
                  <>
                    {Object.values(cartDetails ?? {}).map((entry) => (
                      <li key={entry.id} className='flex py-6'
                      >
                        <div className='flex w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200'>
                          <Image src={entry.image as string} alt={'image'} width={100} height={100}/>
                        </div>
                        <div className='flex flex-col flex-1 ml-4'>
                          <div>
                            <div className='flex justify-between text-base font-medium text-gray-900'>
                              <h3>{entry.name}</h3>
                              <p className='ml-4'>₴{entry.price}</p>
                            </div>
                            <p className='mt-1 text-sm text-gray-900 line-clamp-2'>
                              {entry.description}
                            </p>
                          </div>
                          <div className='flex flex-1 items-end justify-between text-sm'>
                            <p className='text-gray-500'>QTY: {entry.quantity}</p>

                            <div className='flex'>
                              <button type='button' className='font-medium text-primary hover:text-primary/80'
                                      onClick={() => removeItem(entry.id)}
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>

                      </li>
                    ))}
                  </>
              }
            </ul>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}