import { useTranslation } from 'react-i18next';
import { SerbianFlag } from '../Icons/SerbianFlag';
import { EnglishFlag } from '../Icons/EnglishFlag';
import './Lang.css';

export const Lang = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng).then(() => {
        document.querySelector('html').setAttribute('lang', lng);
        document.querySelector('title').innerHTML = t('title');
      });
    };

    return (
        <div className='lang'>
            <button title={t('serbianFlag')} className='lang__btn' type="button" onClick={() => changeLanguage('sr')}>
              <SerbianFlag />
            </button>
            <button title={t('englishFlag')} className='lang__btn' type="button" onClick={() => changeLanguage('en')}>
              <EnglishFlag />
            </button>
        </div>
    )
}