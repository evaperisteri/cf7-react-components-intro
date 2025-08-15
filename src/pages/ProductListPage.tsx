import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow,} from "@/components/ui/table"
import {useEffect, useState} from "react";
import {getProducts, deleteProduct, type ProductType} from "@/api/products.ts";
import {Button} from "@/components/ui/button.tsx";
import {useNavigate} from "react-router";
import {Pencil, Trash} from "lucide-react";
import {toast} from "sonner";

const ProductListPage = () => {
    const [products, setProducts] = useState<ProductType[]>([])
    const [loading, setLoading] = useState<boolean>(true);
    const [deleting, setDeleting] = useState<number | null>(null)

    const navigate = useNavigate();

    useEffect(() => {
        getProducts()
            .then((data)=>setProducts(data))
            .finally(() => setLoading(false));
    }, []);

    const handleDelete = async (id: number) =>{
     if (!window.confirm("Are you sure you want to delete this product?")){
         setDeleting(id)
     }
         try {
             await deleteProduct(id); //delete από το backend
             setProducts((prev)=> prev.filter((p)=>p.id!==id)); //delete από το state -- frontend
             toast.success("Product deleted successfully");
         } catch (error) {
             toast.error("error in deleting product " + id);
             console.log(error);
         } finally {
             setDeleting(null);
         }
    }

    if(loading) return <div className="text-center p-8">Loading...</div>


    return (
    <>
        <div className="p-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Products</h1>
                <Button onClick={() => navigate("/products/new")}>
                    + New Product
                </Button>
            </div>
            <Table>
                <TableHeader className="bg-gray-50">
                    <TableRow>
                        <TableHead>#</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead className="w-32 text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {products.map((product) => (
                        <TableRow key={product.id}>
                            <TableCell>{product.id}</TableCell>
                            <TableCell>{product.name}</TableCell>
                            <TableCell>{product.price} €</TableCell>
                            <TableCell className="text-right space-x-2">
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={() => navigate(`/products/${product.id}`)}
                                    aria-label="Edit"
                                >
                                    <Pencil className="w-4 h-4" />
                                </Button>
                                <Button
                                    variant="destructive"
                                    size="icon"
                                    onClick={() => handleDelete(product.id)}
                                    disabled={deleting === product.id}
                                    aria-label="Delete"
                                >
                                    <Trash className="w-4 h-4" />
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    </>
    );
    };
export default ProductListPage;