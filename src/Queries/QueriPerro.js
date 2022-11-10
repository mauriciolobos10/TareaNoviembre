import { useQuery, queryCache } from "@tanstack/react-query";
import axios from "axios";

export function useBuscarPerro() {
    return useQuery(
        ["buscarPerro"], buscarPerro, {
        retry: 0,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        keepPreviousData: false,
        enabled: true
    }
    )
}

export const buscarPerro = async () => {
    const { data } =  await axios.get("https://dog.ceo/api/breeds/image/random")
    let nombrePerro = generateRandomString(6);
    
    console.log(data.message);
    let PerroPreFusion= {foto: data.message, nombre: nombrePerro}

    console.log("hoola");
    console.log(PerroPreFusion);
    return PerroPreFusion;

    //setObjetoPrueba(response.data);
}

const  generateRandomString = (num) => {
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result1= ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < num; i++ ) {
        result1 += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result1;
}