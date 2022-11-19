import { quanLyPhimService } from "../../services/QuanLyPhimService";

export const layDanhSachPhimAction = ()=>{

    return async(dispatch)=>{
        try{
            const result = await quanLyPhimService.layDanhSachPhim();
            dispatch({
                type:'SET_DANH_SACH_PHIM',
                arrFilm:result.data.content
            })
        }catch(error){
            console.log(error)
        }
    };
}