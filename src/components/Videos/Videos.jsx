import { useTranslation } from 'react-i18next';
import { VideosItem } from './VideosItem';
import blueHawaiian from '../../assets/blue-hawaiian.jpg';
import beesKnees from '../../assets/bees-knees.jpg';
import eastside from '../../assets/eastside.jpg';
import pinaColada from '../../assets/pina-colada.jpg';
import cloverClub from '../../assets/clover-club.jpg';
import frenchMartini from '../../assets/french-martini.jpg';
import tequillaSunrise from '../../assets/tequilla-sunrise.jpg';
import amarettoSour from '../../assets/amaretto-sour.jpg';
import kentuckyBuck from '../../assets/kentucky-buck.jpg';
import './Videos.css';

export const Videos = () => {
    const { t } = useTranslation();

    const videos = [
        {
            id: 0,
            title: 'Clover Club',
            videoId: 'thT26BAZlK4',
            cover: cloverClub
        },
        {
            id: 1,
            title: 'French Martini',
            videoId: '8dkAqtho15I',
            cover: frenchMartini
        },
        {
            id: 2,
            title: 'East Side',
            videoId: 'g-Hxi6aPtRw',
            cover: eastside
        },
        {
            id: 3,
            title: 'Tequila Sunrise',
            videoId: 'XMozh8AzgRY',
            cover: tequillaSunrise
        },
        {
            id: 4,
            title: 'Amaretto Sour',
            videoId: 'wxatJJxadtc',
            cover: amarettoSour
        },
        {
            id: 5,
            title: 'Kentucky Buck',
            videoId: 'O6Gq__hjzU8',
            cover: kentuckyBuck
        },
        {
            id: 6,
            title: 'Bees Knees',
            videoId: 'I3z0wE013fw',
            cover: beesKnees
        },
        {
            id: 7,
            title: 'Blue Hawaiian',
            videoId: 'QJ_HKxoKhuw',
            cover: blueHawaiian
        },
        {
            id: 8,
            title: 'Pina Colada',
            videoId: '-VrubHwmmVk',
            cover: pinaColada
        }
    ]
    return (
        <section className="videos">
            <div className="wrap">
                <h2 className="h2 videos__title">{t('videosTitle')}</h2>
                <div className="videos__content">
                    {videos.map(video => <VideosItem title={video.title} videoId={video.videoId} key={video.id} cover={video.cover}/>)}
                </div>
            </div>
        </section>
    )
}