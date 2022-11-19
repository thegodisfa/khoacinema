import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { datGheAction, datVeAction, layChiTietPhongVeAction } from '../../redux/actions/QuanLyDatVeAction'
import style from './Checkout.module.css'
import { CloseOutlined } from '@ant-design/icons'
import './Checkout.css'
import _ from 'lodash'
import { Tabs } from 'antd';
import { ThongTinDatVe } from '../../_core/models/ThongTinDatVe'
import { layThongTinNguoiDung } from '../../redux/actions/QuanLyNguoiDung'
import moment from 'moment'
import { connection } from '../../index'
function Checkout(props) {
  const { chiTietPhongVe, danhSachGheDangDat,danhSachGheKhachDat } = useSelector(state => state.QuanLyDatVeReducer)
  const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer)
  const { thongTinNguoiDung } = useSelector(state => state.QuanLyNguoiDungReducer)
  const dispatch = useDispatch()
  useEffect(() => {

    dispatch(layChiTietPhongVeAction(props.match.params.id))
    connection.on('loadDanhSachGheDaDat',(dsGheKhachDat)=>{
      console.log('danhSachGheKhachDat',dsGheKhachDat)
    })
  }, [])
  const { thongTinPhim, danhSachGhe } = chiTietPhongVe
  const renderSeats = () => {
    return danhSachGhe?.map((ghe, index) => {
      let classGheVip = ghe.loaiGhe === 'Vip' ? 'gheVip' : '';
      let classGheDaDat = ghe.daDat === true ? 'gheDaDat' : '';
      let classGheDangDat = '';
      let indexGheDD = danhSachGheDangDat.findIndex(gheDD => gheDD.maGhe === ghe.maGhe)
      let classGheDaDuocDat = '';
      let classGheKhachDat ='';
      let indexGheKD = danhSachGheKhachDat.findIndex(gheKD =>gheKD.maGhe === ghe.maGhe);
      if(indexGheKD !== -1){
        classGheKhachDat = 'gheKhachDat'
      }
      if (userLogin.taiKhoan === ghe.taiKhoanNguoiDat) {
        classGheDaDuocDat = 'gheDaDuocDat'
      }
      if (indexGheDD !== -1) {
        classGheDaDat = 'gheDangDat';
      }

      return <Fragment key={index}>
        <button onClick={() => {
          dispatch(datGheAction(ghe,props.match.params.id))


        }} disabled={ghe.daDat || classGheKhachDat !== ''} className={`ghe ${classGheVip} ${classGheDaDat} ${classGheKhachDat} ${classGheDangDat} ${classGheDaDuocDat}`} key={index}>
          {ghe.daDat ? <CloseOutlined style={{ marginBottom: 2 }} /> : ghe.stt}
        </button>
        {(index + 1) % 16 === 0 ? <br></br> : ''}
      </Fragment>
    })
  }
  return (
    <div className='container' >
      <div className='grid grid-cols-12'>
        <div className='col-span-9'>
          <div className='flex flex-col items-center mt-5'>
            <div className='bg-black' style={{ width: '80%', height: 15 }}></div>
            <div className={`${style['trapezoid']} text-center`}>
              <h3 className='mt-5 text-black'>Màn hình</h3>
            </div>
            <div>
              {renderSeats()}
            </div>
          </div>
          <div className='mt-5 flex justify-center'>
            <table className='divide-y divide-gray-200 w-2/3' style={{ border: 'none' }}>
              <thead className='p-5'>
                <tr>
                  <th>Available Seat</th>
                  <th>Booking Seat </th>
                  <th>Vip Seat</th>
                  <th>Booked Seat</th>
                  <th>Your booked Seat</th>
                  <th>Customer Booking Seat</th>
                </tr>
              </thead>
              <tbody className='divide-y divide-gray-200 w-2/3 bg-white'>
                <tr>
                  <td><button className='ghe text-center'>00</button></td>
                  <td><button className='ghe gheDangDat text-center'>00</button></td>
                  <td><button className='ghe gheVip text-center'>00</button></td>
                  <td><button className='ghe gheDaDat text-center'>00</button></td>
                  <td><button className='ghe gheDaDuocDat text-center'>00</button></td>
                  <td><button className='ghe gheKhachDat text-center'>00</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className='col-span-3'>
          <h3 className='text-green-400  text-center text-2xl'>
            {danhSachGheDangDat.reduce((tongTien, ghe, index) => {
              return tongTien += ghe.giaVe;
            }, 0)}
          </h3>
          <hr />
          <h3 className='text-xl'>{thongTinPhim?.tenPhim}</h3>
          <p>Address:  {thongTinPhim?.tenCumRap}</p>
          <p>Showtimes: {thongTinPhim?.ngayChieu} - {thongTinPhim?.gioChieu}</p>
          <hr></hr>
          <div className='flex flex-row my-5'>
            <div className='w-4/5'>
              <span className='text-red-400 text-lg'>Seat</span>
              {_.sortBy(danhSachGheDangDat, ['stt'])?.map((gheDD, index) => {
                return <span key={index} className='text-green-500 pr-1'>{gheDD.stt}</span>
              })}
            </div>
            <div className='text-right col-span-1'>
              <span className=' text-lg'>
                {danhSachGheDangDat.reduce((tongTien, ghe, index) => {
                  return tongTien += ghe.giaVe;
                }, 0)}
              </span>
            </div>
          </div>
          <hr />
          <div className='my-5'>
            <i>Email</i><br />
            {userLogin.email}
          </div>
          <hr />
          <div className='my-5'>
            <i>Phone</i><br />
            {userLogin.soDT}
          </div>
          <hr />
          <div className='mb-0 h-full flex flex-col items-center' style={{ marginBottom: 0 }}>
            <div onClick={() => {
              const thongTinDatVe = {}
              thongTinDatVe.maLichChieu = props.match.params.id;
              thongTinDatVe.danhSachVe = danhSachGheDangDat
              dispatch(datVeAction(thongTinDatVe))
              // window.location.reload(false);
            }} className='bg-green-500 text-white w-full text-center py-3 font-bold cursor-pointer'>
              Book tickets
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default function CheckoutTab(props) {
  const { tabActive } = useSelector(state => state.QuanLyDatVeReducer)
  const dispatch = useDispatch()
  return <div>
    <Tabs defaultActiveKey='1' activeKey={tabActive.toString()} onChange={(key)=>{
      dispatch({
        type:'CHANGE_TAB_ACTIVE',
        number:key.toString()
      })
    }}>
      <Tabs.TabPane tab="Choose Seat" key="1">
        <Checkout {...props} />
      </Tabs.TabPane>
      <Tabs.TabPane tab="Your Booked Seat" key="2">
        <KetQuaDatVe {...props} />
      </Tabs.TabPane>
    </Tabs>
  </div>

}

function KetQuaDatVe(props) {
  const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer)
  const { thongTinNguoiDung } = useSelector(state => state.QuanLyNguoiDungReducer)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(layThongTinNguoiDung())
  }, [])
  const renderTicketItem = function () {
    return thongTinNguoiDung.thongTinDatVe?.map((ticket, index) => {
      return <div className="p-2 lg:w-1/3 md:w-1/2 w-full" key={index}>
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={ticket.hinhAnh} />
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">{ticket.tenPhim}</h2>
            <p className="text-gray-500">{moment(ticket.ngayDat).format('hh:mm A')}</p>
            <p>Address: {_.first(ticket.danhSachGhe).tenHeThongRap} - {_.first(ticket.danhSachGhe).tenCumRap}</p>
            <span>Seat: {ticket.danhSachGhe?.map((dsGhe,index)=>{
              return <span key={index} style={{paddingRight:'5px'}}>{dsGhe.tenGhe}</span>
            })}</span>
          
          </div>
        </div>
      </div>
    })
  }
  return <div className='p-5'>

    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-purple-500">Booking history</h1>
        </div>
        <div className="flex flex-wrap -m-2">
          {renderTicketItem()}
        </div>
      </div>
    </section>
  </div>
}