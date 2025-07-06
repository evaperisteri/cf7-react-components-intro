//import {useState} from "react";
import { z } from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";

const formSchema = z.object({
        name: z.string().trim().nonempty("Name is required"),
        email: z
            .string()
            .trim()
            .nonempty("Email is required")
            .email("Email is invalid"),
        message: z
            .string()
            .trim()
            .nonempty("Message is required")
            .min(5, "Message must be greater than 5 characters long")
            .max(8, "Message must be up to 8 characters long"),
    });

type FormValues =z.infer<typeof formSchema>;

const initialValues = {
    name: "",
    email: "",
    message: "",
}

const MultiFieldFormWithReactHook =()=> {

    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
        watch,
    } = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: initialValues
    });

    const onSubmit=(data:FormValues)=>{
        console.log(data);
        reset();
    }

    const onClear=()=>{
        reset();
    }

    const watchedValues = watch();

    return(
        <>
            <div className="mx-auto max-w-sm mt-8">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <input
                            {...register("name")} //name="name"
                            placeholder="Name"
                            className="border rounded px-4 py-2 w-full"
                            autoComplete="off"
                        />
                        {errors.name && (
                            <p className="text-cf-dark-red">{errors.name.message}</p>
                        )}
                    </div>
                    <div>
                        <input
                            {...register("email")}
                            placeholder="Email"
                            className="border rounded px-4 py-2 w-full"
                            autoComplete="off"
                        />
                        {errors.email && (
                            <p className="text-cf-dark-red">{errors.email.message}</p>
                        )}
                    </div>
                    <div>
                        <textarea
                            {...register("message")}
                            placeholder="Type your message..."
                            className="border rounded px-4 py-2 w-full">
                        </textarea>
                        {errors.message && (
                            <p className="text-cf-dark-red">{errors.message.message}</p>
                        )}
                    </div>

                    <div className="flex gap-4">
                        <button type="submit" className="bg-cf-dark-red text-white px-4 py-2 rounded">
                            Submit
                        </button>
                        <button type="button" onClick={onClear} className="bg-cf-gray text-white px-4 py-2 rounded">
                            Clear
                        </button>

                    </div >
                    <div className="mt-6 border-t pt-4 space-y-2">
                        <h2 className="font-semibold">Live Data</h2>
                        <p><strong>Name: </strong>{watchedValues.name}</p>
                        <p><strong>Email: </strong>{watchedValues.email}</p>
                        <p><strong>Message: </strong>{watchedValues.message}</p>
                    </div>
                </form>
            </div>
        </>
    )
};
export default MultiFieldFormWithReactHook;