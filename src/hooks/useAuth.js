import React, {useEffect, useState} from 'react'
import {onAuthStateChanged} from 'firebase/auth'

import { auth } from '../config/firebase'


export const useAuth = ()=>{
    const [user,setUser] = useState()

    useEffect(()=>{
        const unSuscribeFromAuthStateChanged = onAuthStateChanged(auth,(user)=>{
            if(user){
                setUser(user)
            }else{
                setUser(undefined)
            }
        })

        return unSuscribeFromAuthStateChanged;
    })

    return {user};
}