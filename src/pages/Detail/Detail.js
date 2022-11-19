import React, { useEffect, useState } from 'react';
import { Radio, Space, Tabs } from 'antd';
import TabPane from 'antd/lib/tabs/TabPane';
import '../../assets/styles/circle.css'
import { useDispatch, useSelector } from 'react-redux';
import { layThongTinChiTietPhim } from '../../redux/actions/QuanLyRapAction';
import moment from 'moment';
import { NavLink } from 'react-router-dom';
export default function Detail(props) {
    const filmDetail = useSelector(state => state.QuanLyPhimReducer.filmDetail)
    const dispatch = useDispatch()
    console.log({filmDetail})
    useEffect(() => {
        let { id } = props.match.params
        dispatch(layThongTinChiTietPhim(id))
    }, [])
    const Showtimes = ()=>{
        if(filmDetail?.heThongRapChieu && Object.keys(filmDetail.heThongRapChieu).length > 0){
            return filmDetail.heThongRapChieu?.map((item, index) => {
                return <TabPane tab={<div>
                    <img width={50} height={50} src={item.logo} alt={item.logo}></img>
                    {item.tenHeThongRap}
                </div>} key={index}>
                    {item.cumRapChieu?.map((items,index)=>{
                        return <div className='mt-5' key={index}>
                            <div className='flex flex-col'>
                                {/* <img width={60} height={60} src={}></img> */}
                                <div className='ml-2'>
                                    <p style={{fontSize:20,fontWeight:'bold',lineHeight:'1'}}>{items.tenCumRap}</p>
                                    <p className='text-gray-400' style={{marginTop:'0'}}>{items.tenCumRap}</p>
                                </div>
                            </div>
                            <div className='thong-tin-lich-chieu grid grid-cols-4'>
                                {items.lichChieuPhim?.slice(0,12).map((lichChieu,index)=>{
                                    return <NavLink to={`/checkout/${lichChieu.maLichChieu}`} key={index} className='col-span-1'>
                                        {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}
                                    </NavLink>
                                })}
                            </div>
                        </div>
                    })}
                </TabPane>
            })
        }
        return <p>No Times Available</p>
        
    }
    return (
        <div style={{ minHeight: '100vh', paddingTop: 250 }}>
            <div className='grid grid-cols-12'>
                <div className='col-span-4 col-start-4'>
                    <div className='grid grid-cols-2'>
                        <img src={filmDetail.hinhAnh} style={{ width: 230, height: 300 }} alt='123'></img>
                        <div>
                            <p>Show date: {moment(filmDetail.ngayKhoiChieu).format('DD.MM.YYYY')}</p>
                            <p>Film Name: {filmDetail.tenPhim}</p>
                            <p style={{ lineHeight: '15px' }}>{filmDetail.moTa}</p>
                        </div>
                    </div>
                </div>
                <div className='col-span-4'>
                    <div className={`c100 p${filmDetail.danhGia * 10} big`}>
                        <span>{filmDetail.danhGia * 10}%</span>
                        <div className="slice">
                            <div className="bar"></div>
                            <div className="fill"></div>
                        </div>
                    </div>
                </div>
            </div>
            <Tabs defaultActiveKey="1" centered>
                <TabPane tab='Showtimes' key='1'>
                    <div className='mt-20 container mx-auto'>
                        <Tabs tabPosition='left' style={{ backgroundColor: 'white' }}>
                            {Showtimes()}
                        </Tabs>
                    </div>
                </TabPane>
            </Tabs>



        </div>
    )
}
