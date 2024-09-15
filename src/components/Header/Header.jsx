import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Nav } from '../Nav/Nav';
import { Lang } from '../Lang/Lang';
import './Header.css';

export const Header = () => {
    const { t } = useTranslation();

    return (
        <header className='header'>
            <Link to="/" className='header__home'>{t('title')}</Link>
            <Nav />
            <Lang />
        </header>
    )
}