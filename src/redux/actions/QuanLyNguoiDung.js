import { quanLyNguoiDungService } from "../../services/QuanLyNguoiDung"
import { history } from '../../index';




export const DangNhapAction = (thongTinDangNhap)=>{
    return async(dispatch)=>{
        try{
            const result = await quanLyNguoiDungService.dangNhap(thongTinDangNhap);
            if(result.status === 200){
                dispatch({
                type:'DANG_NHAP_ACTION',
                thongTinDangNhap:result.data.content,    
            });
            // chuyển hướng trang về trang trước đó
            history.go(-1)
            }
        }catch(errors){
            alert(errors?.response.data.content)
        }
    }
}
export const DangKyAction = (thongTinDangKy)=>{
    return async(dispatch)=>{
        try{
            const result = await quanLyNguoiDungService.dangKy(thongTinDangKy);
            const {taiKhoan,matKhau} = thongTinDangKy
            const thongTinDangNhap = {taiKhoan,matKhau}
            if(result.status === 200){
                await dispatch(DangNhapAction(thongTinDangNhap))
            // chuyển hướng trang về trang trước đó
            history.go(-1)
            }
        }catch(errors){
            alert(errors?.response.data.content)
        }
    }
}
export const layThongTinNguoiDung = ()=>{
    return async(dispatch)=>{
        try{
            const result = await quanLyNguoiDungService.layThongTinNguoiDung();
            if(result.status === 200){
                dispatch({
                type:'SET_THONG_TIN_NGUOI_DUNG',
                thongTinNguoiDung:result.data.content,    
            });
            // chuyển hướng trang về trang trước đó
            
            }
        }catch(errors){
            console.log(errors)
            console.log(errors.response.data)
        }
    }
}
export const capNhatThongTinNguoiDung = (thongTinNguoiDung)=>{
    return async(dispatch)=>{
        try {
            const result = await quanLyNguoiDungService.capNhatThongTinNguoiDung(thongTinNguoiDung);
            if(result.status === 200){
                dispatch({
                    type:'CAP_NHAT_THONG_TIN_NGUOI_DUNG',
                    thongTinNguoiDung:result.data.content
                })
            }
        } catch (error) {
            console.log(error)
        }
    }
}