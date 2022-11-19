const initialState = {
    arrImg:[
        {
            "maBanner": 1,
            "maPhim": 1282,
            "hinhAnh": "http://movieapi.cyberlearn.vn/hinhanh/ban-tay-diet-quy.png"
        }
    ],
}
export const CarouselReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CAROUSEL':{
            state.arrImg = action.arrImg;
            return{...state}
        }

        default:
            return {...state}
    }
}
