const API_URL:string=import.meta.env.VITE_API_URL;
const TENANT_ID:string=import.meta.env.VITE_TENANT_ID;

export type Product = {
    id: number,
    name: string,
    slug: string,
    description: string,
    image: string,
    price: number,
    is_active: boolean,
    is_favorite: boolean,
    sort: number,
    category_id: number,
}

export async function getProducts():Promise<Product[]> {
    const res = await fetch(`${API_URL}/tenants/${TENANT_ID}/products/`);
    if(!res.ok) throw new Error("Failed to fetch products.");
    return await res.json();
}