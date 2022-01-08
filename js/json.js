//JavaScript Object Notation
//JSON
// const user = {
//     id: 3343,
//     name: "Gorib Amir",
//     job: "actor"
// };
// const stringified = JSON.stringify(user)

const shop = {
    name: "Alia Store",
    address: "Green Road",
    profit: 343,
    product: ['laptop', 'mobile', 'pepsi'],
    isExpensiv: false,
    owner: {
        name: "Alia Bhaat",
        profession: "Actor"
    }
}

const shopStringified = JSON.stringify(shop);
const converted = JSON.parse(shopStringified)
console.log(shopStringified.owner);
console.log(converted.owner);