let amar = {
    name: "amar",
    work: "singer",
    city: "goa",
};

let akbar = {
    name: "akbar",
    work: "chef",
    city: "mumbai",
};

let anthony = {
    name: "anthomy",
    work:"magician",
    city: "kashmir",
};

function friends(meet){
    console.log("Meet" +" "+ "a" +" "+ meet +" " + this.name);
}


friends.call(amar,"chef");
friends.call(akbar, "singer");
friends.call(anthony,"chef");