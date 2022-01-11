import {favCounterVar} from "./cache";
import {ApolloError} from "@apollo/client";
import {Toast} from "native-base";

export const saveToFav = (id: string)=>{

    if(favCounterVar().includes(id)){
        const updatedFav= favCounterVar().filter(function(item) {
            return item !== id
        })
        favCounterVar(updatedFav)
    } else{
        const updatedFav = [...favCounterVar(), id]
        favCounterVar(updatedFav)
    }

}


export const handleError = (err: ApolloError | undefined) => {
    if (err) {
        if (err?.networkError)
            Toast.show({
                text: err.networkError.message,
                duration: 5000,
                type: "danger",
            });
        else
            Toast.show({
                text: err.message,
                duration: 5000,
                type: "danger",
            });
    }
};