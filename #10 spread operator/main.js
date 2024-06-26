// Belajar spread operator
// Sebelum menggunakan spread operator
const favorite = ["seafood", "salad", "nugget", "soup"];
console.log(favorite);

// setelah menggunakan spread operator
console.log(...favorite);

console.log("=========================================");

// Spread operator juga bisa untuk menggabungkan array
// Sebelum
const other = ["nasi goreng", "pizza", "keripik"];
const allFavorite = [favorite, other];
console.log(allFavorite);

// Sesudah
const allOther = [...favorite, ...other];
console.log(allOther);

// Spread operator juga bisa digunakan untuk object literals
let user1 = { firtName: "muhaemin", age: 20 };
let user2 = { lastName: "tikukuruk", gender: "M" };
let allUser = { ...user1, ...user2 };
console.log(allUser);
