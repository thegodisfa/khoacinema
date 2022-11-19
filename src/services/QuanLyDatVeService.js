import { GROUID } from "../util/Settings/config";
import { ThongTinDatVe } from "../_core/models/ThongTinDatVe";
import { baseService } from "./baseService";

export class QuanLyDatVeService extends baseService{
    
    layChiTietPhoneVe = (maLichChieu)=>{
        return this.get(`/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`);
    }
    datVe = (thongTinDatVe)=>{
        return this.post(`/api/QuanLyDatVe/DatVe`,thongTinDatVe);
    }
    
}
export const quanLyDatVeService =new QuanLyDatVeService();