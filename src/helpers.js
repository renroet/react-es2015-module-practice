

const choice = (items) => {
    let idx = Math.floor(Math.random() * items.length)
    return items[idx]
}

const remove = (items, item) => {
    let idx = items.indexOf(item)
    let res;
    idx === -1 ? res = undefined : res = items.splice(idx, 1)
    return res
}


export { choice, remove };