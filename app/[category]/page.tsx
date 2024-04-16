import {client} from "@/app/lib/sanity";

async function getData(category: string) {
  const query = `*[_type == 'product' && category.name == "${category}"] {
  _id, 
  "imageUrl": images[0].asset->url,
  "price": price,
  "name": name,
  "slug": slug.current,
  "categoryName": category->name,
  }`

  return await client.fetch(query)
}

export default function CategoryPage() {
  return <div></div>
}