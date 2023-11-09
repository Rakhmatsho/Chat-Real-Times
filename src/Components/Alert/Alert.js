import React, {useEffect} from 'react';
import "./alert.css";

const Alert = ({alertmsg, setAlertmsg}) => {

    useEffect(()=>{
        setTimeout(()=>{
            setAlertmsg("")
        }, 1900)
    }, []);

    return (
        <div className="alert">
            <div className="alert__message">

                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.68296 3H15.317C15.5823 3 15.8366 3.10536 16.0241 3.29289L20.7071 7.97585C20.8946 8.16339 21 8.41774 21 8.68296V15.317C21 15.5823 20.8946 15.8366 20.7071 16.0241L16.0241 20.7071C15.8366 20.8946 15.5823 21 15.317 21H8.68296C8.41774 21 8.16339 20.8946 7.97585 20.7071L3.29289 16.0241C3.10536 15.8366 3 15.5822 3 15.317V8.68296C3 8.41775 3.10536 8.16339 3.29289 7.97586L7.97586 3.29289C8.16339 3.10536 8.41775 3 8.68296 3Z" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M11.9502 15.45H12.0502V15.55H11.9502V15.45Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12 8.44995V12.45" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                {alertmsg}
            </div>
        </div>
    );
};

export default Alert;