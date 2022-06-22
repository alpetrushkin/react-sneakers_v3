import React, {useState} from 'react';
import s from './card.module.scss';

const Card = (props) => {
	 const [isAdded, setIsAdded] = useState(false);

	 const onClickPlus = () => {
	 	 setIsAdded(!isAdded)
	 }

	 return (
			 <div className={s.card}>
					<div className={s.favorite} onClick={props.onFavorite}>
						 <img src="/img/heart-unliked.png" alt="Unliked"/>
					</div>
					<img width={133} height={112} src={props.imageUrl} alt="Sneakers"/>
					<h5>{props.title}</h5>
					<div className='d-flex justify-between align-center'>
						 <div className='d-flex flex-column'>
								<span>ЦЕНА:</span>
								<b>{props.price} руб.</b>
						 </div>
						 <img className={s.plus} onClick={onClickPlus} src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} alt="Plus"/>
					</div>
			 </div>
	 );
};

export default Card;