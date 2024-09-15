import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { EffectFade } from 'swiper/modules';
import { Quote } from '../Icons/Quote';
import { Star } from '../Icons/Star';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import './Testimonials.css';

export const Testimonials = () => {
    const { t } = useTranslation();
    const slides = [
		{
			id: 0,
			text: t('testimonialsText1'),
			author: 'Tamara Tagić',
			reviewLink: 'https://g.co/kgs/131QfR6'
		},
		{
			id: 1,
			text: t('testimonialsText2'),
			author: 'Marko Stankovic',
			reviewLink: 'https://g.co/kgs/81emEH4'
		},
		{
			id: 2,
			text: t('testimonialsText3'),
			author: 'Stefan Milenovic',
			reviewLink: 'https://g.co/kgs/Ye6UDqL'
		},
		{
			id: 3,
			text: t('testimonialsText4'),
			author: 'Branko Moraca',
			reviewLink: 'https://g.co/kgs/bPtzX2r'
		}
	]

    return (
        <section className="testimonials">
            <div className='wrap'>
                <h2 className='h2 testimonials__title'>{t('testimonialsTitle')}</h2>
                <div className='testimonials__content'>
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        modules={[EffectFade, Pagination]}
                        effect="fade"
                        fadeEffect={{ crossFade: true }}
                    >
                        {slides.map(slide => {
                            return (
                                <SwiperSlide key={slide.id}>
                                    <div className='testimonials__item'>
                                        <div className='testimonials__item-info'>
                                            <span className='testimonials__item-icon'>
                                                <span aria-hidden='true'>
                                                    <Quote />
                                                </span>
                                            </span>
                                            <div className='testimonials__item-text'>
                                                <p className='testimonials__text'>
                                                    {slide.text}
                                                </p>
                                                <span className='testimonials__person'>
                                                    - {slide.author}
                                                </span>
                                                <div>
                                                    <a href={slide.reviewLink} className="testimonials__link">{t('testimonialsGoogleLink')}</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='testimonials__rating'>
                                           <Star />
                                           <Star />
                                           <Star />
                                           <Star />
                                           <Star />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}