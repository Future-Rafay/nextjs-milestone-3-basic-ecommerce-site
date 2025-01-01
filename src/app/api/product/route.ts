// app/api/products/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const products = [
    { id: 1, name: 'Product 1', price: 20, description: 'Description of product 1' },
    { id: 2, name: 'Product 2', price: 30, description: 'Description of product 2' },
    { id: 3, name: 'Product 3', price: 40, description: 'Description of product 3' },
  ];

  return NextResponse.json(products);
}
