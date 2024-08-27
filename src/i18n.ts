//código responsável pela internacionalização no projeto
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

//definição da instância padrão de translation
//e todos os .use são a inicialização dos plugins
i18n
  .use(Backend) //permite q o srv faça download do srv via http
  .use(LanguageDetector) //detecta a linguagem
  .use(initReactI18next) //inicia o 'serviço' e deixa disponível para todos os componentes do projeto
  .init({
    fallbackLng: "pt", //definição do idioma padrão
    debug: true, //ativa o debug inserindo mensagens no console do navegador
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: "/locales/{{lng}}.json", //caminho dos arquivos translate
    },
  });
export default i18n;
