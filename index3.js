const pinCodes = ["1111", "5678", "1234", "9999"];
const myPin = "1234";

for (const pin of pinCodes) {
  if (pin === myPin) {
    console.log("Пин код найден: " + myPin);
    break;
  } else {
    console.log("Неверный пин");
  }
}
// files.push("music.mp3")

// for (const file of files){
//     console.log(file)
// }

// let fuel = 100 //toplifo

// while (fuel > 0){
//     console.log("Едём"+"Топливо осталось: " + fuel)
//      fuel -= 10 // = fuel = fuel-10;
// }

// console.log("Приехали")


//  for (Start;финиш;шаг)
// for (let i = 1; i <= 5; i++) {
//     console.log("Отжимание номер" + i )
// }