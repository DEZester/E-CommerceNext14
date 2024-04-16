import React from 'react';
import {client} from "@/app/lib/sanity";
import {simplifiedProduct} from "@/app/interface";

async function getData() {
  const query = `*[_type == 'product'][0...4] | order(_createdAt asc) {_id, price, name, "slug": slug.current, "categoryName": category->name, "imageUrl": images[0].asset->url}`

  return await client.fetch(query)
}

const MyComponent: React.FC = async () => {
  const data: simplifiedProduct[] = await getData();
  return (
    <div>
      Hello, this is my custom function component!
    </div>
  );
}

export default MyComponent;