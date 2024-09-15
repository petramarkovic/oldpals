import { useTranslation } from 'react-i18next';
import { Contact } from "../components/Contact/Contact";
import { Helmet } from "react-helmet-async";

export const ContactPage = () => {
    const { t } = useTranslation();
    
    return (
        <>
            <Helmet>
                <title>{t('metaTitleContact')}</title>
                <meta name='description' content={t('metaDescriptionContact')} />
            </Helmet>
            <Contact />
        </>
    )
}