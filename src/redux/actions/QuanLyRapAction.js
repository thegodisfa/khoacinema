import { quanLyRapService } from "../../services/QuanLyRapService"

export const layDanhSachHeThongRapAction = () => {
    return async dispatch => {
        try {
            const result = await quanLyRapService.layDanhSachHeThongRap();
            if (result.status === 200) {
                dispatch({
                    type:'SET_HE_THONG_RAP_CHIEU',
                    heThongRapChieu:result.data.content
                })
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export const layThongTinChiTietPhim = (id) => {
    return async dispatch => {
        try {
            const result = await quanLyRapService.layThongTinLichChieuPhim(id);
            if (result.status === 200) {
                dispatch({
                    type:'SET_CHI_TIET_PHIM',
                    filmDetail:result.data.content
                })
            }
            
        } catch (error) {
            console.log(error)
        }
    }
}