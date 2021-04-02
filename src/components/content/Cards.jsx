import React from 'react';

// Bootstrap style
import 'bootstrap/dist/css/bootstrap.min.css';

// personal style
import 'assets/sass/cardStyles.scss';

// icon fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

function Cards({title,description,images,url}) {
    return (
        <div className='text-center contentCard'>
            <div className='col-4 contentCard__bodyCard'>
                <a 
                    className='btn text-center contentCard__seeMore' 
                    href={`${url}`} 
                >
                    <FontAwesomeIcon 
                        icon={faEye} 
                        className='contentCard__iconView' 
                    />
                </a>
                <article className='contentCard__info text-left'>
                    <h2 className='contentCard__title'>{title} </h2>
                    <h4 className='contentCard__subTitle'> {description} </h4>
                </article>
                <img 
                    src={`${images}`} 
                    alt='' 
                    className='contentCard__imageEmpresa' 
                />
            </div>
        </div>
    )
}

export default Cards;
