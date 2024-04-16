import {client} from "@/app/lib/sanity";
import {simplifiedProduct} from "@/app/interface";
import Link from "next/link";
import Image from "next/image";
import React from "react";

async function getData(category: string) {
  const query = `*[_type == 'product' && category->name == "${category}"] {
  _id, 
  "imageUrl": images[0].asset->url,
  "price": price,
  "name": name,
  "slug": slug.current,
  "categoryName": category->name,
  }`

  return await client.fetch(query)
}

export default async function CategoryPage({params}: {
  params: {
    category: string
  }
}) {
  const data: simplifiedProduct[] = await getData(params.category)

  return <div className='bg-white'>
    <div className='mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl'>
      <div className="flex justify-between items-center">
        <h2 className='text-2xl font-bold tracking-tight text-gray-900'>Our Products for {params.category}</h2>
      </div>

      <div className='mt-6 grid grid-cols-1 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
        {data.map((product) => <div key={product._id} className='group relative'>
          <div
            className='aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80'>
            <Image src={product.imageUrl} alt="Product image"
                   width={300}
                   height={300}
                   className='w-full h-full object-cover object-center lg:h-full lg:w-full'/>
          </div>
          <div className='mt-4 flex justify-between'>
            <div>
              <h3 className='text-sm text-gray-500'>
                <Link href={`/product/${product.slug}`}>
                  {product.name}
                </Link>
              </h3>
              <p className='mt-1 text-sm text-gray-500'>{product.categoryName}</p>
            </div>
            <p className='text-sm text-gray-900 font-medium'>₴{product.price}</p>
          </div>
        </div>)}
      </div>

    </div>
  </div>
}