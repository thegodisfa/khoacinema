import { Redirect, Route } from "react-router-dom";
import { USER_LOGIN } from "../../util/Settings/config";




 const CheckOutTemPlate = (props) => {
    const { Component, ...restProps } = props;
    if(!localStorage.getItem(USER_LOGIN)){
        return <Redirect to='/login'></Redirect>
    }
    return <Route {...restProps} render={(propsRoute) => {
        return <>
            <Component {...propsRoute}/>
        </>
    }} />
}

export default CheckOutTemPlate;