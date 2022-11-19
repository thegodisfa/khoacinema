import React, { useEffect } from 'react'
import { Carousel } from 'antd';
import { useDispatch, useSelector, } from 'react-redux';
import { getCarouselAction } from '../../../../redux/actions/CarouselAction';
import './HomeCarousel.css'

export default function HomeCarousel(props) {
    const contentStyle = {
        height: '700px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
        backgroundPosition: 'center',
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat'
    };
    const dispatch = useDispatch();
    useEffect(() => {
        //1action ={type:'',data}
        //2(phải cài middleware) callbackfunction(dispatch)
        dispatch(getCarouselAction());
    }, [])
    const { arrImg } = useSelector(state => state.CarouselReducer);
    const renderImg = () => {
        return arrImg.map((item, index) => {
            return <div key={index} >
                <div  style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})` }}>
                    <img src={item.hinhAnh} style={{ opacity: 0 }} alt='123' ></img>
                </div>
            </div>
        })
    }
    return (
        <Carousel effect="fade" style={{width:'100%',padding:0,margin:0}}  >
            {renderImg()}
        </Carousel>
    )
}