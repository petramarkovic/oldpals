import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { useMedia } from '../../hooks/useMedia';
import { Menu } from '../Icons/Menu';
import { Close } from '../Icons/Close';
import './Nav.css';

export const Nav = () => {
    const [isActive, setIsActive] = useState(false);
	const isMobile = useMedia('(max-width: 992px');
    const { t } = useTranslation();

    const menuHandler = () => {
		setIsActive((prevState) => !prevState);
		updateOverflow();
	};

	const navLinkClickHandler = () => {
		if (isMobile) {
			setIsActive((prevState) => !prevState);
			updateOverflow();
		}
	};

	const updateOverflow = () => {
		const bodyElement = document.querySelector('body');

		if (!bodyElement) return;

		if (!isActive) {
			bodyElement.style.overflow = 'hidden';
		} else {
			bodyElement.style.overflow = 'visible';
		}
	};

    return (
        <nav className={`nav ${isActive ? 'nav--active' : ''}`}>
            <button onClick={menuHandler} className='nav__menu' type='button' title='Menu'>
                {!isActive ? <Menu /> : <Close />}
            </button>
            <ul className={`nav__list ${isActive ? 'nav__list--active' : ''}`}>
                <li className='nav__item'>
                    <NavLink onClick={navLinkClickHandler} to='/' className="nav__link">{t('navigation.home')}</NavLink>
                </li>
                <li className='nav__item'>
                    <NavLink onClick={navLinkClickHandler} to='/offers' className="nav__link">{t('navigation.offers')}</NavLink>
                </li>
                <li className='nav__item'>
                    <NavLink onClick={navLinkClickHandler} to='/contact' className="nav__link">{t('navigation.contact')}</NavLink>
                </li>
            </ul>
        </nav>
    )
}