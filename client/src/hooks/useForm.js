import { useState } from "react";

//import custom hook here

export function useForm() {
  const [form, setForm] = useState("");

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return [form, handleChange];
}

