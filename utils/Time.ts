

export function secToMin(sec : number ){


    return  (sec/ 60).toFixed(1)
}

export function formatSec(sec : number){

    const _min = Math.floor(sec/60)
    const _sec = sec % 60 

    const minText = `${_min} min `;
    const secText = `${_sec} sec `;
    const connector = "and"
    const sentense = [];

    if(_min > 0){
        sentense.push(minText)
    }

   

    if(_min > 0 && _sec > 0){
        sentense.push(connector)
    }

    if(_sec > 0){
        sentense.push(secText)
    }

    


    return sentense.join(" ");
}