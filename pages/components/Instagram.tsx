import axios from 'axios';
import react from 'react';
import React, {useState, useEffect,useRef} from 'react';

export default function Instagram() {

    const [feeds, setFeedsData] = useState([]);

    useEffect(() => {
        axios.get('https://graph.instagram.com/me/media?fields=user_profile&access_token={IGQVJVWFRMcnJOOHN6SlBLTFR4bWNTNjZAmWGktcmxSVVdrUXpQcGFxTUdRUFpzaVpMc0N5OXNWd1NHWDBXOFNOeXRKaF9sS0lVRXJISVhvVlZAkczhyRTlTSGRDeVNCUFJnbXRvNm5WRjdTQjBFU041dAZDZD}')
            .then(res =>{
                console.log(res.data.data)
                setFeedsData((res.data.data))
            })
            .catch(error=>{

            });
    })

    return (
        <div >
           
        </div>
    )

}
