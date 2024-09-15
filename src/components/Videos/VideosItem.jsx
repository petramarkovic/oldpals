import { useTranslation } from 'react-i18next';
import { useState, useEffect } from "react";
import { Video } from "./Video";
import { Play } from '../Icons/Play';
import { Close } from '../Icons/Close';

export const VideosItem = ({title, cover, videoId}) => {
    const { t } = useTranslation();
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopupHandler = function() {
        setIsPopupOpen(prevState => !prevState);
    }

    const closePopupHandler = function() {
        setIsPopupOpen(prevState => !prevState);
    }

    useEffect(() => {
        const body = document.querySelector('body');

        if (isPopupOpen) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = 'visible';
        }
    }, [isPopupOpen]);

    return (
        <div className="video">
            <h3 className="video__title">{title}</h3>
            <div className="video__holder">
                <img src={cover} alt={title} className="video__cover"/>
                <button title={t('videosPlayBtn')} onClick={openPopupHandler} className="video__btn" type="button">
                    <Play />
                    <span className="sr-only">{t('videosPlayBtn')}</span>
                </button>
                {isPopupOpen &&
                <div className={`video__popup ${isPopupOpen ? 'video__popup--active' : ''}`}>
                    <div className="video__popup-content">
                        <button title={t('videosCloseBtn')} onClick={closePopupHandler} type="button" className="video__popup-close">
                            <Close />
                            <span className="sr-only">{t('videosCloseBtn')}</span>
                        </button>
                        <div className="video__popup-holder">
                            <Video videoId={videoId} />
                        </div>
                    </div>
                </div>}
            </div>
        </div>
    )
}