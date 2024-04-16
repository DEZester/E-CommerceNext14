import React from 'react';
import {client} from "@/app/lib/sanity";
import {fullProduct} from "@/app/interface";
import ImageGallery from "@/components/ImageGallery";

async function getData(slug: string) {
  const query = `*[_type == 'product' && slug.current == "${slug}"] [0] {_id, price, name, "slug": slug.current, images}`

  return await client.fetch(query)
}

export default async function ProductPage({params}: { params: { slug: string } }) {
  const data: fullProduct = await getData(params.slug)
  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-screen-xl px-4 md:px-8'>
        <div className='grid gap-8 md:grid-cols-2'>
          <ImageGallery images={data.images}/>
        </div>
      </div>
    </div>
  );
}
