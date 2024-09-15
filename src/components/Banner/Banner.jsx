import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import bannerImage from '../../assets/banner-image.jpg';
import './Banner.css';

export const Banner = () => {
    const { t } = useTranslation();

    return (
        <section className='banner'>
            <div className="banner__content">
                <div className="banner__col">
                    <h1 className="h1 banner__title">
                        {t('bannerTitle')}
                    </h1>
                    <p className="text banner__text">{t('bannerText')}</p>
                    <div className="banner__cta">
                        <Link className='btn btn--primary banner__link' to="/offers">{t('bannerBtnPrimary')}</Link>
                        <Link className='btn btn--secondary banner__link' to="/contact">{t('bannerBtnSecondary')}</Link>
                    </div>
                </div>
                <div className="banner__col banner__col--img">
                    <img className='banner__img' src={bannerImage} alt={t('bannerImage')} />
                </div>
            </div>
        </section>
    )
}