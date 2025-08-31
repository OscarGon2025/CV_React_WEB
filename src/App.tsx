import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useTranslation } from "react-i18next";

/**
 * Componente principal de la aplicación
 * Estructura la página completa del portfolio
 * + ejemplo de textos traducidos y selector de idioma
 */
export default function App() {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen bg-white">
            {/* Navegación principal */}
            <Header />

            {/* Sección hero */}
            <Hero />

            {/* Sobre mí */}
            <About />

            {/* Habilidades técnicas */}
            <Skills />

            {/* Experiencia profesional */}
            <Experience />

            {/* Formación académica */}
            <Education />

            {/* Contacto */}
            <Contact />

            {/* Bloque de ejemplo con traducciones */}
            <section className="text-center py-10 bg-gray-900 text-white">
                <h1 className="text-4xl font-bold">{t("title")}</h1>
                <p className="text-gray-300">{t("subtitle")}</p>
                <button className="mt-4 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 transition">
                    {t("cta")}
                </button>
                <div className="mt-6">
                    <LanguageSwitcher />
                </div>
            </section>

            {/* Pie de página */}
            <Footer />
        </div>
    );
}

function LanguageSwitcher() {
    const { i18n, t } = useTranslation();

    return (
        <div className="inline-flex gap-2">
            <button
                onClick={() => i18n.changeLanguage("en")}
                className={`px-3 py-1 rounded ${
                    i18n.resolvedLanguage === "en"
                        ? "bg-white/20"
                        : "bg-white/10 hover:bg-white/20"
                }`}
            >
                {t("lang.english")}
            </button>
            <button
                onClick={() => i18n.changeLanguage("fr")}
                className={`px-3 py-1 rounded ${
                    i18n.resolvedLanguage === "fr"
                        ? "bg-white/20"
                        : "bg-white/10 hover:bg-white/20"
                }`}
            >
                {t("lang.french")}
            </button>
        </div>
    );
}
