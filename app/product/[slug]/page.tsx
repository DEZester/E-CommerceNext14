import React from 'react';
import {client} from "@/app/lib/sanity";
import {fullProduct} from "@/app/interface";

async function getData(slug: string) {
  const query = `*[_type == 'product' && slug.current == "${slug}"] [0] {_id, price, name, "slug": slug.current, images}`

  return await client.fetch(query)
}

export default async function ProductPage({params}: { params: { slug: string } }) {
  const data: fullProduct = await getData(params.slug)
  return (
    <div>Hello from ProductPage</div>
  );
}
