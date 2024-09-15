import { useTranslation } from 'react-i18next';
import aboutImage1 from '../../assets/about-1.jpg';
import aboutImage2 from '../../assets/about-2.jpg';
import aboutImage3 from '../../assets/about-3.jpg';
import aboutImage4 from '../../assets/about-4.jpg';
import aboutImage5 from '../../assets/about-5.jpg';
import './About.css';

export const About = () => {
    const { t } = useTranslation();

    const images = [aboutImage1, aboutImage2, aboutImage3, aboutImage4, aboutImage5];

    return (
        <section className="about">
            <div className="wrap">
                <h2 className="h2">{t('aboutTitle')}</h2>
                <div className='about__content'>
                    <div className='about__row'>
                        <p className='text about__text'>{t('aboutText1')}</p>
                        <p className='text about__text'>{t('aboutText2')}</p>
                    </div>
                    <div className='about__row about__row--images'>
                        {images.map((image, index) => <div key={index} className='about__img-holder'>
                            <img className='about__img' src={image} alt={t('aboutText1')}/>
                        </div>)}
                    </div>
                </div>
            </div>
        </section>
    )
}