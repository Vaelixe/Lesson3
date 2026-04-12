const files = ["cat.jpg", "dog.png", "docunent.pdf", "Virus.exe"];
for (const file of files){
    if(file=== "cat.jpg"){
        console.log("Пропускаем данную картинку")
        continue;

    }


    if(file=== "Virus.exe"){
        console.log("АЛАРМ! Вирус найден")
        break
    }
    console.log("файл проверян:" + file)
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