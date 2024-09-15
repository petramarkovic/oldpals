import { useTranslation } from 'react-i18next';
import { OffersItem } from './OffersItem';
import offersStandard from '../../assets/standard.png';
import offersAllInclusive from '../../assets/all-inclusive.jpg';
import offersCocktailCard from '../../assets/cocktail-card-zile.png';
import './Offers.css';

export const Offers = () => {
    const { t } = useTranslation();

    const offersArray = [
        {
            title: t('offersStandardTitle'),
            image: offersStandard,
            list: [t('offersStandardList.offersStandardItem1'), t('offersStandardList.offersStandardItem2'), t('offersStandardList.offersStandardItem3'), t('offersStandardList.offersStandardItem4')]
        },
        {
            title: t('offersAllInclusiveTitle'),
            image: offersAllInclusive,
            list: [t('offersAllInclusiveList.offersAllInclusiveItem1'), t('offersAllInclusiveList.offersAllInclusiveItem2'), t('offersAllInclusiveList.offersAllInclusiveItem3'), t('offersAllInclusiveList.offersAllInclusiveItem4')]
        },
        {
            title: t('offersCocktailCardTitle'),
            image: offersCocktailCard,
            list: [t('offersCocktailCardList.offersCocktailCardItem1'), t('offersCocktailCardList.offersCocktailCardItem2'), t('offersCocktailCardList.offersCocktailCardItem3'), t('offersCocktailCardList.offersCocktailCardItem4')]
        }
    ]

    return (
        <section className="offers">
            <div className="wrap">
                <h2 className="h2">{t('offersTitle')}</h2>
                <div className="offers__content">
                    {offersArray.map((offer, index) => <OffersItem title={offer.title} list={offer.list} image={offer.image} key={index}/>)}
                </div>
                <a href="mailto:igmarkovic94@gmail.com" className="btn btn--primary offers__link">{t('offersLink')}</a>
            </div>
        </section>
    )
}