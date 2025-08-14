import {z} from 'zod';

const API_URL:string=import.meta.env.VITE_API_URL;
const TENANT_ID:string=import.meta.env.VITE_TENANT_ID;

export const productSchema = z.object({
    id: z.coerce.number().int(),
    name: z.string().min(1, "Required"),
    slug: z
        .string()
        .min(1, "Required")
        .regex(/^[a-zA-Z0-9-_]+$/, "Slug must use only Latin letters, numbers, - or _"),
    description: z.string().optional(),
    image: z.string().url("Must be valid url").optional(),
    price: z.number().nonnegative("Must be grater than zero"),
    sort: z.coerce.number().int().min(0, "Must be greater than zero"),
    is_active: z.boolean(),
    is_favourite: z.boolean(),
    category_id: z.coerce.number().int().min(1, "Category is required"),
})

export type Product = z.infer<typeof productSchema>;

export async function getProducts():Promise<Product[]> {
    const res = await fetch(`${API_URL}/tenants/${TENANT_ID}/products/`);
    if(!res.ok) throw new Error("Failed to fetch products.");
    return await res.json();
}

export async function getProduct(id: number):Promise<Product>{
    const res = await fetch(`${API_URL}/tenants/${TENANT_ID}/products/${id}`);
    if (!res.ok) throw new Error("Failed to fetch product with id "+id);
    return await res.json();
}

export async function updateProduct(
    id: number,
    data:{
        name: string;
        slug: string;
        description?: string |undefined;
        image?: string |undefined;
        price: number;
        is_active: boolean;
        is_favorite: boolean;
        sort: number;
    }):Promise<Product>{
    const res = await fetch(`${API_URL}/tenants/${TENANT_ID}/products/${id}`,
        {method: 'PUT', body: JSON.stringify(data)});
    if (!res.ok) throw new Error("Failed to update product with id "+id);
    return await res.json();
}

export async function deleteProduct(id:number):Promise<void> {
    const res = await fetch(`${API_URL}/tenants/${TENANT_ID}/products/${id}`, {
        method: 'DELETE',
    });
    if(!res.ok) throw new Error("Failed to delete product.");
}