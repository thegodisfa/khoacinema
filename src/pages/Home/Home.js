import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MultipleRowSlick from '../../components/RSlick/MultipleRowSlick';
import { layDanhSachPhimAction } from '../../redux/actions/QuanLyPhimAction';
import { layDanhSachHeThongRapAction } from '../../redux/actions/QuanLyRapAction';
import HomeCarousel from '../../templates/HomeTemplate/Layout/HomeCarousel/HomeCarousel';
import HomeMenu from './HomeMenu/HomeMenu'

export default function Home(props) {
  const {heThongRapChieu} = useSelector(state=>state.QuanLyRapReducer)
  const { arrFilm } = useSelector(state => state.QuanLyPhimReducer);
  const dispatch = useDispatch();
  useEffect(()=>{
    const action = layDanhSachPhimAction();
    dispatch(action)
    dispatch(layDanhSachHeThongRapAction())
  },[])
  return (
    <div>
      <HomeCarousel/>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <MultipleRowSlick arrFilm={arrFilm}></MultipleRowSlick>
        </div>
      </section>
    </div>
  )
}
