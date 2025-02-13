// const bodyColorSelect = document.querySelector(".body_color_select");
// const bardBodyColor = document.querySelector("#body");
// const headColorSelect = document.querySelector(".head_color_select");
// const bardHeadColor = document.querySelector("#head");
// const featherColorSelect = document.querySelector(".feather_color_select");
// const bardFeatherColor = document.querySelector("#feather");
// const bardTailFeatherColor = document.querySelector("#tail_feathers");
// const cheeksColorSelect = document.querySelector(".cheek_color_select");
// const bardCheeksColor = document.querySelector("#cheeks");






const bodyColor = {
    colorList: ["red_brown", "white", "yellow_green"],
    colorSelect: document.querySelector(".body_color_select"),
    bardColor: document.querySelector("#body")
}

const headColor = {
    colorList: ["black", "white"],
    colorSelect: document.querySelector(".head_color_select"),
    bardColor: document.querySelector("#head")
}

const featherColor = {
    colorList: ["grey", "olive_bluegrey"],
    colorSelect: document.querySelector(".feather_color_select"),
    bardColor: document.querySelector("#feather"),
    bardColor2: document.querySelector("#tail_feathers")
}

const cheekcColor = {
    colorList: ["light_orange", "white"],
    colorSelect: document.querySelector(".cheek_color_select"),
    bardColor: document.querySelector("#cheeks")
}


// console.log(cheeksColorSelect.value);


// 後々絶対リファクタリングする。絶対!!
// 検索はリファクタリングし終わった！、あとは鳥の検索方法を修正したい。


const colorCls = 
["red_brown", "white", "yellow_green", "black", "olive_bluegrey", "grey",
    "light_orange"
];

function TEST() {
    // console.log("no_function");
}

function EEE(kk, colorarray) {
    kk.bardColor2.classList.remove(...colorarray);
    kk.bardColor2.classList.add(kk.bardColor.getAttribute("class"));
    // console.log("run_function");
}


function SSS(kk, colorarray, func = TEST) {
    for (let color of kk.colorList) {
        if (kk.colorSelect.value === color) {
            removeClass(colorarray, kk);
            kk.colorSelect.classList.add(color);
            kk.bardColor.classList.add(color);
            func(kk, colorarray);
        } else if (kk.colorSelect.value === "same_body_color") {
            removeClass(colorarray, kk);
            kk.colorSelect.classList.add(bodyColor.colorSelect.value);
            kk.bardColor.classList.add(bodyColor.colorSelect.value);
            func(kk, colorarray);
        }
        kk.colorSelect.addEventListener("change", function() {
            if (kk.colorSelect.value === color) {
                removeClass(colorarray, kk);
                kk.colorSelect.classList.add(color);
                kk.bardColor.classList.add(color);
                func(kk, colorarray);
            } else if (kk.colorSelect.value === "same_body_color") {
                removeClass(colorarray, kk);
                kk.colorSelect.classList.add(bodyColor.colorSelect.value);
                kk.bardColor.classList.add(bodyColor.colorSelect.value);
                func(kk, colorarray);
            }
        })
    }
    function removeClass(cls, selectcolor) {
        selectcolor.colorSelect.classList.remove(...cls);
        selectcolor.bardColor.classList.remove(...cls);
    }
}


// function GGG(kk, colorarray) {
//     EEE(kk, colorarray);

//     for (let color of colorarray) {
//         if (kk.colorSelect.value === color) {
//             removeClass(colorarray, kk);
//             kk.colorSelect.classList.add(color);
//             kk.bardColor.classList.add(color);
//             EEE(kk, colorarray);
//         }
//         kk.colorSelect.addEventListener("change", function() {
//             if (kk.colorSelect.value === color) {
//                 removeClass(colorarray, kk);
//                 kk.colorSelect.classList.add(color);
//                 kk.bardColor.classList.add(color);
//                 EEE(kk, colorarray);
//             }
//         })
//     }

//     if (kk.colorSelect.value === "same_body_color") {
//         removeClass(colorarray, kk);
//         kk.colorSelect.classList.add(bodyColorSelect.value);
//         kk.bardColor.classList.add(bodyColorSelect.value);
//         EEE(kk, colorarray);
//     }
//     kk.colorSelect.addEventListener("change", function() {
//         if (kk.colorSelect.value === "same_body_color") {
//             removeClass(colorarray, kk);
//             kk.colorSelect.classList.add(bodyColorSelect.value);
//             kk.bardColor.classList.add(bodyColorSelect.value);
//             EEE(kk, colorarray);
//         }
//     })
// }

// function EEE(kk, colorarray) {
//     kk.bardColor2.classList.remove(...colorarray);
//     kk.bardColor2.classList.add(kk.bardColor.getAttribute("class"));
// }





SSS(bodyColor, colorCls);

SSS(headColor, colorCls);

SSS(featherColor, colorCls, EEE);

SSS(cheekcColor, colorCls);


// function RRR(kk, colorarray) {
//     if (kk.colorSelect.value === "same_body_color") {
//         removeClass(colorarray, kk);
//         kk.colorSelect.classList.add(bodyColor.colorSelect.value);
//         kk.bardColor.classList.add(bodyColor.colorSelect.value);
//     }
//     kk.colorSelect.addEventListener("change", function() {
//         if (kk.colorSelect.value === "same_body_color") {
//             removeClass(colorarray, kk);
//             kk.colorSelect.classList.add(bodyColor.colorSelect.value);
//             kk.bardColor.classList.add(bodyColor.colorSelect.value);
//         }
//     })
// }



// 体の色
// for (let color of bodyColor.colorList) {
//     if (bodyColor.colorSelect.value === color) {
//         removeClass(colorCls, bodyColor);
//         bodyColor.colorSelect.classList.add(color);
//         bodyColor.bardColor.classList.add(color);
//     }
//     bodyColor.colorSelect.addEventListener("change", function() {
//         if (bodyColor.colorSelect.value === color) {
//             removeClass(colorCls, bodyColor);
//             bodyColor.colorSelect.classList.add(color);
//             bodyColor.bardColor.classList.add(color);
//         }
//     })
// }


// function removeClass(cls, selectcolor) {
//     selectcolor.colorSelect.classList.remove(...cls);
//     selectcolor.bardColor.classList.remove(...cls);
// }





// 頭の色
// for (let color of ["black", "white"]) {
//     if (headColorSelect.value === color) {
//         removeClass(colorCls, headColorSelect, bardHeadColor);
//         headColorSelect.classList.add(color);
//         bardHeadColor.classList.add(color);
//     }
//     headColorSelect.addEventListener("change", function() {
//         if (headColorSelect.value === color) {
//             removeClass(colorCls, headColorSelect, bardHeadColor);
//             headColorSelect.classList.add(color);
//             bardHeadColor.classList.add(color);
//         }
//     })
// }

// if (headColorSelect.value === "same_body_color") {
//     removeClass(colorCls, headColorSelect, bardHeadColor);
//     headColorSelect.classList.add(bodyColorSelect.value);
//     bardHeadColor.classList.add(bodyColorSelect.value);
// }
// headColorSelect.addEventListener("change", function() {
//     if (headColorSelect.value === "same_body_color") {
//         removeClass(colorCls, headColorSelect, bardHeadColor);
//         headColorSelect.classList.add(bodyColorSelect.value);
//         bardHeadColor.classList.add(bodyColorSelect.value);
//     }
// })





// 羽の色
// let TailFeatherColor = bardFeatherColor.getAttribute("class");
// console.log(TailFeatherColor);
// bardTailFeatherColor.classList.remove(...colorCls);
// bardTailFeatherColor.classList.add(TailFeatherColor);

// for (let color of ["grey", "olive_bluegrey"]) {
//     if (featherColorSelect.value === color) {
//         removeClass(colorCls, featherColorSelect, bardFeatherColor);
//         featherColorSelect.classList.add(color);
//         bardFeatherColor.classList.add(color);
//         TailFeatherColor = bardFeatherColor.getAttribute("class");
//         console.log(TailFeatherColor);
//         bardTailFeatherColor.classList.remove(...colorCls);
//         bardTailFeatherColor.classList.add(TailFeatherColor);
//     }
//     featherColorSelect.addEventListener("change", function() {
//         if (featherColorSelect.value === color) {
//             removeClass(colorCls, featherColorSelect, bardFeatherColor);
//             featherColorSelect.classList.add(color);
//             bardFeatherColor.classList.add(color);
//             TailFeatherColor = bardFeatherColor.getAttribute("class");
//             console.log(TailFeatherColor);
//             bardTailFeatherColor.classList.remove(...colorCls);
//             bardTailFeatherColor.classList.add(TailFeatherColor);
//         }
//     })
// }

// if (featherColorSelect.value === "same_body_color") {
//     removeClass(colorCls, featherColorSelect, bardFeatherColor);
//     featherColorSelect.classList.add(bodyColorSelect.value);
//     bardFeatherColor.classList.add(bodyColorSelect.value);
//     TailFeatherColor = bardFeatherColor.getAttribute("class");
//     console.log(TailFeatherColor);
//     bardTailFeatherColor.classList.remove(...colorCls);
//     bardTailFeatherColor.classList.add(TailFeatherColor);
// }
// featherColorSelect.addEventListener("change", function() {
//     if (featherColorSelect.value === "same_body_color") {
//         removeClass(colorCls, featherColorSelect, bardFeatherColor);
//         featherColorSelect.classList.add(bodyColorSelect.value);
//         bardFeatherColor.classList.add(bodyColorSelect.value);
//         TailFeatherColor = bardFeatherColor.getAttribute("class");
//         console.log(TailFeatherColor);
//         bardTailFeatherColor.classList.remove(...colorCls);
//         bardTailFeatherColor.classList.add(TailFeatherColor);
//     }
// })


// ほっぺの色
// for (let color of ["light_orange", "white"]) {
//     if (cheeksColorSelect.value === color) {
//         removeClass(colorCls, cheeksColorSelect, bardCheeksColor);
//         cheeksColorSelect.classList.add(color);
//         bardCheeksColor.classList.add(color);
//     }
//     cheeksColorSelect.addEventListener("change", function() {
//         if (cheeksColorSelect.value === color) {
//             removeClass(colorCls, cheeksColorSelect, bardCheeksColor);
//             cheeksColorSelect.classList.add(color);
//             bardCheeksColor.classList.add(color);
//         }
//     })
// }

// if (cheeksColorSelect.value === "same_body_color") {
//     removeClass(colorCls, cheeksColorSelect, bardCheeksColor);
//     cheeksColorSelect.classList.add(bodyColorSelect.value);
//     bardCheeksColor.classList.add(bodyColorSelect.value);
// }
// cheeksColorSelect.addEventListener("change", function() {
//     if (cheeksColorSelect.value === "same_body_color") {
//         removeClass(colorCls, cheeksColorSelect, bardCheeksColor);
//         cheeksColorSelect.classList.add(bodyColorSelect.value);
//         bardCheeksColor.classList.add(bodyColorSelect.value);
//     }
// })




// 鳥検索
const searchButton = document.querySelector(".search_button");

searchButton.addEventListener("click", function(e) {
    console.log("search...");
    e.preventDefault();

    const CheeksColor = cheekcColor.bardColor.getAttribute("class");
    const FeatherColor = featherColor.bardColor.getAttribute("class");
    const HeadColor = headColor.bardColor.getAttribute("class");
    const BodyColor = bodyColor.bardColor.getAttribute("class");


    if (
        BodyColor === "red_brown" &&
        HeadColor === "black" &&
        FeatherColor === "grey" &&
        CheeksColor === "light_orange"
    ) {
        console.log("あなたが探しているのは「ヤマガラ」かもしれません");
    } else if (
        BodyColor === "white" &&
        HeadColor === "black" &&
        FeatherColor === "olive_bluegrey" &&
        CheeksColor === "white"
    ) {
        console.log("あなたが探しているのは「シジュウカラ」かもしれません");
    }
})
