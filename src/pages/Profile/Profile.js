import React from 'react'
import { Tabs } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { capNhatThongTinNguoiDung, DangNhapAction, layThongTinNguoiDung } from '../../redux/actions/QuanLyNguoiDung';
import { useState } from 'react';

export default function Profile(props) {
  const [formValue, setFormValue] = useState({
    email: '',
    taiKhoan: '',
    hoTen: '',
    matKhau: '',
    soDt: '',
    maNhom: 'GP00',
    maLoaiNguoiDung: 'KhachHang',
    thongTinDatVe: 'null'
  })
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, taiKhoan, hoTen, matKhau, soDt } = formValue;
    const thongTinNguoiDung = {
      taiKhoan,
      matKhau,
      email,
      soDt,
      maNhom: 'GP00',
      maLoaiNguoiDung: 'KhachHang',
      hoTen,
      thongTinDatVe: 'null'
    }
    dispatch(capNhatThongTinNguoiDung(thongTinNguoiDung))

  }
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormValue((prevState) => {
      return {
        ...prevState,
        [name]: value,
      }
    })
  }
  const { thongTinNguoiDung } = useSelector(state => state.QuanLyNguoiDungReducer)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(layThongTinNguoiDung())
  }, [])

  const [disable, setDisable] = useState(true)
  console.log({thongTinNguoiDung})
  return (
    <div style={{ minHeight: '100vh', paddingTop: 250 }}>
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="Thông tin cá nhân" key="1">
          <div className='container'>
            <form onSubmit={handleSubmit} className='row'>
              <div className='col-6'>
                Email:{disable ? <span> {thongTinNguoiDung.email}</span> :
                  <input name='email' id='email' placeholder={thongTinNguoiDung.email} onChange={handleChange}></input>}
              </div>
              <div className='col-6'>
                Username: {disable ? <span> {thongTinNguoiDung.taiKhoan}</span> :
                  <input name='taiKhoan' id='taiKhoan' placeholder={thongTinNguoiDung.taiKhoan} onChange={handleChange}></input>}
              </div>
              <div className='col-6'>
                Full Name: {disable ? <span> {thongTinNguoiDung.hoTen}</span> :
                  <input name='hoTen' id='hoTen' placeholder={thongTinNguoiDung.hoTen} onChange={handleChange}></input>}
              </div>
              <div className='col-6'>
                password: {disable ? <span>{thongTinNguoiDung.matKhau}</span> :
                  <input name='matKhau' id='matKhau' placeholder={thongTinNguoiDung.matKhau} onChange={handleChange}></input>}
              </div>
              <div className='col-6'>
                phone number: {disable ? <span>{thongTinNguoiDung.soDT}</span> :
                  <input name='soDt' id='soDt' placeholder={thongTinNguoiDung.soDT} onChange={handleChange}></input>}
              </div>
              <div className='col-6'>
                <button onClick={() => {
                  setDisable(false)
                }} className='btn btn-primary' style={{color:'black'}} type='submit'>Update Detail</button>
              </div>
            </form>
          </div>

        </Tabs.TabPane>
        <Tabs.TabPane tab="Booking history" key="2">
          <div>
            {thongTinNguoiDung.thongTinDatVe?.map((items, index) => {
              return <div key={index} style={{marginTop:50}} className='container d-flex'>
                <img src={items.hinhAnh} alt={items.hinhAnh} style={{ paddingRight: 30 }} width={200}></img>
                <div className='body'>
                  <div className='d-flex'>
                    <img src={items.hinhAnh} alt={items.hinhAnh} style={{ paddingRight: 30, width: 100, height: 70 }} ></img>
                    <div>
                      <p>{items.tenPhim}</p>
                      <p>{items.thoiLuongPhim} minutes</p>
                    </div>
                  </div>
                  <div style={{ paddingTop: 50 }}>
                    Booked Date: {items.ngayDat}
                  </div>
                </div>
              </div>
            })}


          </div>
        </Tabs.TabPane>

      </Tabs>
    </div>
  )
}
