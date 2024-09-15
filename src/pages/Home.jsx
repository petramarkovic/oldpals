import { useTranslation } from 'react-i18next';
import { Banner } from "../components/Banner/Banner";
import { Offers } from "../components/Offers/Offers";
import { About } from "../components/About/About";
import { Testimonials } from "../components/Testimonials/Testimonials";
import { Videos } from "../components/Videos/Videos";
import { Contact } from "../components/Contact/Contact";
import { Helmet } from 'react-helmet-async';

export const Home = () => {
    const { t } = useTranslation();

    return (
        <>
            <Helmet>
                <title>{t('metaTitleHomepage')}</title>
                <meta name='description' content={t('metaDescriptionHomepage')} />
            </Helmet>
            <Banner />
            <Offers />
            <About />
            <Testimonials />
            <Videos />
            <Contact />
        </>
    )
}