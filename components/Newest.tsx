import React from 'react';
import {client} from "@/app/lib/sanity";
import {simplifiedProduct} from "@/app/interface";

async function getData() {
  const query = `*[_type == 'product'][0...4] | order(_createdAt asc) {_id, price, name, "slug": slug.current, "categoryName": category->name, "imageUrl": images[0].asset->url}`

  return await client.fetch(query)
}

const Newest: React.FC = async () => {
  const data: simplifiedProduct[] = await getData();
  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
        <div className="flex justify-between items-center">
          <h2>Our Newest Products</h2>
        </div>

      </div>
    </div>
  );
}

export default Newest;