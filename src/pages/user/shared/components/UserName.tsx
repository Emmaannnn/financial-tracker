import { supabase } from '@/lib/supabaseClient'
import { useState, useEffect } from 'react'

const RetrieveUserName = () => {
    const [userName, setUserName] = useState("");

    useEffect(() => {
        const getUser = async () => {
            const { data, error } = await supabase.auth.getSession();

            if (error) {
                console.error("Error: ", error.message);
            }

            if (data.session){
                const displayName = data.session.user.user_metadata.name;
                setUserName(displayName);
            }
        }

        getUser();

    }, [])

    return (
        <>
            {userName}
        </>
    )
}

export default RetrieveUserName
