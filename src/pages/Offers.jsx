import { useTranslation } from 'react-i18next';
import { Offers } from "../components/Offers/Offers";
import { Contact } from "../components/Contact/Contact";
import { Helmet } from "react-helmet-async";

export const OffersPage = () => {
    const { t } = useTranslation();
    
    return (
        <>
            <Helmet>
                <title>{t('metaTitleOffers')}</title>
                <meta name='description' content={t('metaDescriptionOffers')} />
            </Helmet>
            <Offers />
            <Contact />
        </>
    )
}