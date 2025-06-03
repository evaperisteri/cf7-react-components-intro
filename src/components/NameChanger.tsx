import {useEffect, useState} from "react";

const NameChanger=()=> {
    const [name, setName] = useState('');
    const setup = ()=>{
        document.title=name ? `Hello, ${name}!` : "Hello Stranger!";
    }
    useEffect(setup, [name]);
    // useEffect(()=>{document.title=name ? `Hello, ${name}!` : "Hello Stranger!"}, [name])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=> {
        setName(e.target.value);
    }
    return(
        <>
            <h1 className="text-center text-xl pt-4">Hello, {name || "stranger"}</h1>
            <div className="text-center mt-4">
                <input type="text"
                       value={name}
                       className="border px-4 py-2"
                       onChange={handleChange}
                />
            </div>
        </>
    )
}
export default NameChanger;