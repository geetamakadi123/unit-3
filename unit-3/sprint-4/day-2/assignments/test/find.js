const find = (data, id) => {
    let item = data.find((el) => el.id === id);
    // console.log(item)
    return item;
    };

export default find;

