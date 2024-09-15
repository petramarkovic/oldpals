export const OffersItem = ({title, image, list}) => {
    return (
      <div className='offers__item'>
          <h3 className="h3 offers__item-title">{title}</h3>
          <ul className='offers__list'>
            {list.map((item, index) => <li className='offers__list-item' key={index}>{item}</li>)}
          </ul>
          <img className='offers__item-img' src={image} alt={`Old Pals Koktel Ketering ${title}`} />
      </div>
    )
  }