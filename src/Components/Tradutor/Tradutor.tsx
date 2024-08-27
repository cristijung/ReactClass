import React from "react";
import { useTranslation } from "react-i18next";


export default function Tradutor() {
    const { i18n } = useTranslation();

    const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        i18n.changeLanguage(e.target.value);
    };
    
    return(
        <>
        <select onChange={handleLanguageChange} value={i18n.language}>
            <option value='pt'>Português</option>
            <option value='en'>English</option>
            <option value='es'>Español</option>
        </select>
        
        </>
    );
}