import { useState } from "react";

const useForm = <T>(InitForm: T) => {
    const [form, setForm] = useState(InitForm);

    const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.currentTarget.name]: e.currentTarget.value })
    }

    return {form, handleForm}
}

export default useForm