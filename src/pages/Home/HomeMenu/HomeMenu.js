import { Radio, Space, Tabs } from 'antd';
import TabPane from 'antd/lib/tabs/TabPane';
import moment from 'moment';
import React, { Fragment, useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function HomeMenu(props) {
    const [tabPosition, setTabPosition] = useState('left');
    const renderHeThongRap = () => {
        return props.heThongRapChieu?.map((item, index) => {
            return <TabPane tab={<img src={item.logo} alt={item.logo} className='rounded-full' width='50' key={index}></img>}>
                <Tabs tabPosition={tabPosition}>
                    {item.lstCumRap?.slice(0,1).map((cumRap, index) => {
                        return <TabPane key={index} tab={
                            <div style={{ width: '200px', display: 'flex',margin:0 }}>
                                <img src={item.logo} alt={item.logo} width='50px'></img>
                                <br></br>
                                <div className='text-left ml-2'>
                                    {cumRap.tenCumRap}
                                    <p className='text-red-700'>More information</p>
                                </div>
                            </div>
                        }>
                            {cumRap.danhSachPhim.slice(0,1).map((phim, index) => {
                                return <Fragment key={index}>
                                    <div className='my-5'>
                                        <div >
                                            <img style={{width:75,height:75}} src={phim.hinhAnh} alt={phim.hinhAnh}></img>
                                            <h1 className='ml-2 text-2xl text-green-500'>{phim.tenPhim}</h1>
                                            <p>{cumRap.diaChi}</p>
                                            <div className='grid grid-cols-4 gap-6' >
                                            {phim.lstLichChieuTheoPhim?.slice(0,4).map((lichChieu,index)=>{
                                                return <NavLink className='text-2xl text-yellow-500' to='/' key={index}>
                                                    {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}
                                                </NavLink>
                                            })}
                                            </div>
                                        </div>
                                    </div>
                                    <hr></hr>
                                </Fragment>
                            })}
                        </TabPane>
                    })}
                </Tabs>
            </TabPane>
        })
    }
    return (
        <>
            <Tabs tabPosition={tabPosition}>
                {renderHeThongRap()}
            </Tabs>
        </>
    )
}
