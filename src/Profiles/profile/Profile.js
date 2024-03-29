
import React, { useState, useEffect } from 'react'
import './Profile.css'
import { checkImage } from '../../shared/utility'
import shiloutte from '../../assets/shiloutte.jpg'


const Profile = (props) => {

    const [url, setUrl] = useState("");

    useEffect(() => {

        let testData = "";
        for (let i = 0; i < props.photos.length; i++) {
            checkImage(props.photos[i]).then((urls) => {
                if (urls.status === "ok" && !testData) {
                    testData = urls.path
                    setUrl(urls.path)
                }
            }).catch((error) => { })
        }

    }, [props.photos])

    const imageErrorHandler = (ev) => {
        ev.target.src = shiloutte;
        ev.target.onerror = null;
    }

    return (
        <div className="column-box" id="img">
            <div className="image" >
                <div id="img">
                    <img src={url} alt={url} onError={imageErrorHandler} />
                </div>
            </div>
            <div className="text">
                <h5 >{props.name}</h5>
            </div>
        </div>
    )

}


export default Profile
