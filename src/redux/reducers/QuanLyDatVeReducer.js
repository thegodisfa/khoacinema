const stateDefault = {
    chiTietPhongVe:{},
    danhSachGheDangDat:[],
    tabActive:1,
    danhSachGheKhachDat:[{maGhe:48041},{maGhe:48041}]
}

export const QuanLyDatVeReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'SET_CHI_TIET_PHONG_VE':{
            state.chiTietPhongVe = action.chiTietPhongVe;
            return {...state}
        }
        case'DAT_GHE':{
            let danhSachGheCapNhat = [...state.danhSachGheDangDat];
            let index = danhSachGheCapNhat.findIndex(gheDD=>gheDD.maGhe ===action.gheDuocChon.maGhe)
            if(index !== -1){
                danhSachGheCapNhat.splice(index,1)
            }else{
                danhSachGheCapNhat.push(action.gheDuocChon)
            }
            return{...state,danhSachGheDangDat:danhSachGheCapNhat}
        }
        case'DAT_VE_HOAN_TAT':{
            state.danhSachGheDangDat = [];
            return{...state}
        }
        case 'CHUYEN_TAB':{
            state.tabActive=2;
            return{...state}
        }
        case 'CHANGE_TAB_ACTIVE':{
            state.tabActive = action.number
            return{...state}
        }
        default:
            return {...state}
    }
}
