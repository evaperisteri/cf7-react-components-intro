import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow,} from "@/components/ui/table"
import {useEffect, useState} from "react";
import {getProducts, type Product} from "@/api/products.ts";

const ProductList = () => {
    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        getProducts()
            .then((data)=>setProducts(data))
            .finally(() => setLoading(false));
    }, []);

    if(loading) return <div className="text-center p-8">Loading...</div>

    return (
        <>
            <Table>
                <TableCaption>A list of your products.</TableCaption>
                <TableHeader className="bg-gray-50">
                    <TableRow>
                        <TableHead>#</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {/*{invoices.map((invoice) => (*/}
                    {/*    <TableRow key={invoice.invoice}>*/}
                    {/*        <TableCell className="font-medium">{invoice.invoice}</TableCell>*/}
                    {/*        <TableCell>{invoice.paymentStatus}</TableCell>*/}
                    {/*        <TableCell>{invoice.paymentMethod}</TableCell>*/}
                    {/*        <TableCell className="text-right">{invoice.totalAmount}</TableCell>*/}
                    {/*    </TableRow>*/}
                    {/*))}*/}
                </TableBody>
            </Table>
        </>
    )
}
export default ProductList;