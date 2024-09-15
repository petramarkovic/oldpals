import { useTranslation } from 'react-i18next';
import { Mail } from '../Icons/Mail';
import { Tel } from '../Icons/Tel';
import { Instagram } from '../Icons/Instagram';
import { Youtube } from '../Icons/Youtube';
import { Tiktok } from '../Icons/Tiktok';
import logo from '../../assets/logo-small.jpg';
import './Contact.css';

export const Contact = () => {
    const { t } = useTranslation();

    return (
        <section className="contact">
            <div className='wrap'>
                <div className='contact__content'>
                    <h2 className='h2 contact__title'>{t('contactTitle')}</h2>
                    <p className='text contact__text'>{t('contactText1')}
                        <a aria-label='Old Pals Ketering Mail' title='Old Pals Ketering Mail' className='contact__link' href='mailto:igmarkovic94@gmail.com'>
                            <span aria-hidden='true'>
                                <Mail />
                            </span>
                            igmarkovic94@gmail.com
                            <span className="sr-only">Email igmarkovic94@gmail.com</span>
                        </a>
                        {t('contactText2')}
                        <a aria-label='Old Pals Ketering Tel' title='Old Pals Ketering Tel' className='contact__link' href='tel:381605260594'>
                            <span aria-hidden='true'>
                                <Tel />
                            </span>
                            +381605260594
                            <span className="sr-only">{t('contactTel')} +381605260594</span>
                        </a>/
                        <a aria-label='Old Pals Ketering Tel' title='Old Pals Ketering Tel' className='contact__link' href='tel:381612783069'>
                            <span aria-hidden='true'>
                                <Tel /> 
                            </span>
                            +381612783069
                            <span className="sr-only">{t('contactTel')} +381612783069</span>
                        </a>
                    </p>
                    <p className='text contact__text'>
                        {t('contactText3')}
                    </p>
                    <ul className='contact__list'>
                        <li className='contact__item'>
                            <a target='_blank' aria-label='Old Pals Ketering Instagram' title='Old Pals Ketering Instagram' href='https://www.instagram.com/old_pals_cocktail_catering/' className='contact__link' rel="noopener noreferrer">
                                <span aria-hidden='true'>
                                    <Instagram />
                                </span>
                                <span className='sr-only'>Intagram Icon</span>
                            </a>
                        </li>
                        <li className='contact__item'>
                            <a target='_blank' aria-label='Old Pals Ketering Youtube' title='Old Pals Ketering Youtube' href='https://www.youtube.com/@drunkenmixologist' className='contact__link' rel="noopener noreferrer">
                                <span aria-hidden='true'>
                                    <Youtube />
                                </span>
                                <span className='sr-only'>Youtube Icon</span>
                            </a>
                        </li>
                        <li className='contact__item'>
                            <a target='_blank' aria-label='Old Pals Hour Ketering TikTok' title='Old Pals Ketering TikTok' href='https://www.tiktok.com/@igormarkovic345' className='contact__link' rel="noopener noreferrer">
                                <span aria-hidden='true'>
                                    <Tiktok />
                                </span>
                                <span className='sr-only'>TikTok Icon</span>
                            </a>
                        </li>
                    </ul>
                    <div className="contact__logo">
                        <img src={logo} alt="Old Pals Koktel Ketering" />
                    </div>
                </div>
            </div>
        </section>
    )
}