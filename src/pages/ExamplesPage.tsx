import {useEffect} from "react";

const ExamplesPage= ()=> {
    useEffect(() => {
        document.title = 'Examples'
    }, []);
    return (
        <>
            <h1 className="text-2xl font-bold mt-12">Examples Page</h1>
        </>
    )
}
export default ExamplesPage;