import { supabase } from '@/lib/supabaseClient'
import { useState, useEffect } from 'react'

const RetrieveUserImg = () => {
    const [userImg, setUserImg] = useState();

    useEffect(() => {
        const getUserImg = async () => {
            const { data, error } = await supabase.auth.getSession();

            if (error) {
                console.error("Error: ", error.message);
            }

            if (data.session){
                const displayImg = data.session.user.user_metadata.avatar_url;
                setUserImg(displayImg);
            }
        }

        getUserImg();

    }, [])

    return (
        <>
            <img src={userImg} alt="" className=" rounded-full md:w-8 md:h-8 bg-[#69247C] is-drawer-open:hidden"/>
        </>
    )
}

export default RetrieveUserImg
