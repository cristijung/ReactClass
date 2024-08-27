import { useTranslation } from "react-i18next";
import Tradutor from "../Components/Tradutor/Tradutor";
import { Suspense } from "react";

export default function SobreNos() {
    const { t } = useTranslation();
    
    return(
        <>
        <div>
            <Tradutor/>
            <Suspense fallback={<p>Carregando idioma ...</p>}>
                <h1>{t('welcome')}</h1>
                <p>{t('greeting', { name: 'Ana Banana'})}</p>
                <div>{t('text')}</div>
            
            </Suspense>
        </div>
        </>
    );
}