import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { Copyright } from '../Icons/Copyright';
import './Footer.css';

export const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="footer">
            <div className="wrap">
                <div className='footer__content'>
					<div className='footer__col footer__col--sm'>
						<span className='footer__copy'>
                            <Copyright />
							<span className='footer__copy-text'>
								<a target='_blank' rel="noreferrer" href="https://www.developetra.com">developetra</a>
							</span>
						</span>
					</div>
					<div className='footer__col'>
						<ul className='footer__list'>
                            <li className='footer__list-item'>
                                <NavLink to='/' className="footer__list-link">{t('navigation.home')}</NavLink>
                            </li>
                            <li className='footer__list-item'>
                                <NavLink to='/offers' className="footer__list-link">{t('navigation.offers')}</NavLink>
                            </li>
                            <li className='footer__list-item'>
                                <NavLink to='/contact' className="footer__list-link">{t('navigation.contact')}</NavLink>
                            </li>
						</ul>
					</div>
				</div>
            </div>
        </footer>
    )
}