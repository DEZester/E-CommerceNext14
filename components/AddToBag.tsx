"use client"

import {Button} from "@/components/ui/button";
import {useShoppingCart} from "use-shopping-cart";
import {ProductCart} from "@/app/interface";
import {urlFor} from "@/app/lib/sanity";

export default function AddToBag({currency, name, description, price, image, slug}: ProductCart) {
  const {addItem, handleCartClick} = useShoppingCart()

  const product = {
    id: slug,
    name: name,
    description: description,
    price: price,
    currency: currency,
    image: urlFor(image).url()
  }

  const addToBagHandler = () => {
    addItem(product)
    handleCartClick()
  }

  return <Button onClick={addToBagHandler}>Add To Cart</Button>
}