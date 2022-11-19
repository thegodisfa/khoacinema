import { GROUID } from "../util/Settings/config";
import { baseService } from "./baseService";

export class QuanLyPhimService extends baseService{
    
    layDanhSachBanner = ()=>{
        return this.get(`/api/QuanLyPhim/LayDanhSachBanner`)
    }
    layDanhSachPhim = ()=>{
        return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUID}`)
    }
}
export const quanLyPhimService =new QuanLyPhimService();