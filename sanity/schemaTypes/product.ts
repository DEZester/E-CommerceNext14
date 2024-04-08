export default {
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    {
      name: 'name',
      type:'string',
      title: 'Name of product',
    },
    {
      name: 'images',
      type: 'array',
      title: 'Product Images',
      of: [{ type: 'image' }],
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description of product',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Product slug',
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price of product',
    }
  ]
}