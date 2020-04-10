import React, { useState } from "react";
import { useForm } from "../hooks/useForm";

export function SearchForm(props){
    const [darkMode, setDarkMode] = useDarkMode("isDark")
    const toggleMode = e => {
        e.preventDefault();
        detDarkMode(!darkMode)
    };

    const [form, handleChange] = useform();
    const handleSubmit = e => {
        e.preventDefault();
        props.handleSearch(form.search);
    };

    return ( 
        <form onSubmit={handleSubmit}>
        <div onClick={toggleMode}>CLICK ME!!</div>
        <input 
        name="search"
        placeholder="Search For Player"
        onChange={handleChange}
        value={form.search}
        />
        <button type="submit"> START SEARCH </button>
        </form>
    )
}