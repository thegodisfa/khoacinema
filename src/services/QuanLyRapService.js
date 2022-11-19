import { GROUID } from "../util/Settings/config";
import { baseService } from "./baseService";

export class QuanLyRapService extends baseService{
    
    layDanhSachHeThongRap = ()=>{
        return this.get(`/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUID}`)
    }
    layThongTinLichChieuPhim =(maPhim)=>{
        return this.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`)
    }
    // layThongTinHeThongRap = ()=>{
    //     return this.
    // }
    
}
export const quanLyRapService =new QuanLyRapService();