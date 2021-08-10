const choice = (items) => {
    const randomIdx = Math.floor(Math.random() * items.length);
    return items[randomIdx]
}

const remove = (items,item) => {
    for (let i = 0; i < items.length; i++){
        if (items[i] === item){
           items.splice(i,1)
           return items
        } 
    } 
}

export {choice, remove}