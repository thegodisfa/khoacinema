import { connection } from "../..";
import { quanLyDatVeService } from "../../services/QuanLyDatVeService"

export const layChiTietPhongVeAction =(maLichChieu)=>{
    return async dispatch=>{
        try{
            const result = await quanLyDatVeService.layChiTietPhoneVe(maLichChieu);
            if(result.status === 200){
                dispatch({
                    type:'SET_CHI_TIET_PHONG_VE',
                    chiTietPhongVe:result.data.content
                })
            }
        }catch(error){
            console.log('error',error)
            console.log('error',error.response?.data)
        }
    }
}

export const datVeAction = (thongTinDatVe)=>{
    return async dispatch=>{
        try{
            dispatch({
                type:'DISPLAY_LOADING'
            })
            const result = await quanLyDatVeService.datVe(thongTinDatVe)
            await dispatch(layChiTietPhongVeAction(thongTinDatVe.maLichChieu))
            await dispatch({type:'DAT_VE_HOAN_TAT'})
            await dispatch({type:'CHUYEN_TAB'})
            dispatch({
                type:'HIDE_LOADING'
            })
        }catch(error){
            console.log(error)
        }
    }
}

export const datGheAction= (ghe,maLichChieu)=>{
    return async(dispatch,getState)=>{
        await dispatch({
            type:'DAT_GHE',
            gheDuocChon:ghe
        })
        let danhSachGheDangDat = getState().quanLyDatVeReducer.danhSachGheDangDat
        let taiKhoan = getState().quanLyNguoiDungReducer.userLogin.taiKhoan
        danhSachGheDangDat = JSON.stringify(danhSachGheDangDat)
        connection.invoke('datGhe',taiKhoan,danhSachGheDangDat,maLichChieu)
    }
}