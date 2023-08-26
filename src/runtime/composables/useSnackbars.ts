import { Snackbar, ISnackbar } from './../types/snackbar.d';
import { useState } from "nuxt/app";

export const useSnackbars = () => {
    const snackbars = useState<(ISnackbar)[]>('snackbars', () => [])

    const _id = snackbars.value.length

    function remove (id : number){
        snackbars.value.splice(snackbars.value.findIndex(x => x.id == id), 1)
    }

    function push (snackbar : Snackbar){
        snackbars.value.push({
            id : _id,
            type: snackbar.type,
            content: snackbar.content,
            duration: snackbar.duration
        })

        if (snackbar.duration){
            setTimeout(() => {
                remove(_id)
            }, snackbar.duration)
        }
    }

    return {snackbars, push, remove}
}