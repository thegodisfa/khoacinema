import { GROUID } from "../util/Settings/config";
import { baseService } from "./baseService";

export class QuanLyNguoiDungService extends baseService{
    
    dangNhap = (thongTinDangNhap)=>{
        return this.post(`/api/QuanLyNguoiDung/DangNhap`,thongTinDangNhap)
    }
    layThongTinNguoiDung = ()=>{
        return this.post(`/api/QuanLyNguoiDung/ThongTinTaiKhoan`)
    }
    capNhatThongTinNguoiDung = (thongTinNguoiDung)=>{
        return this.put(`/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,thongTinNguoiDung)
    }
    dangKy= (thongTinDangKy) =>{
        return this.post(`/api/QuanLyNguoiDung/DangKy`,thongTinDangKy)
    }
}
export const quanLyNguoiDungService = new QuanLyNguoiDungService();