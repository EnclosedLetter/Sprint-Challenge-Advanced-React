import { useState } from "react"; 

//custom hook goes here

export function useForm() {
const [form, setform] = useState("")

const handleChange = e => {
    setForm({ ...FormData, [e.target.name]: e.target.value});
};
return [form, handleChange];
}