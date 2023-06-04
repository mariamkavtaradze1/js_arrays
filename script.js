//davaleba 1

var a = [
    2, 3, "a",
    [5, 4, [], 15, [3, 4, 5], [2], 5, 6],
    "aaa", "bb",
    [5, [2], 4, [], 4]
]

for (let r = 0; r < a.length; r++) {
    console.log(a[r])
    if (Array.isArray(a[r])) {
        for (let l = 0; l < a[r].length; l++) {
            console.log(a[r][l])
            if (Array.isArray(a[r][l])) {
                for (let v = 0; v < a[r][l].length; v++) {
                    console.log(a[r][l][v])
                }
                if (a[r][l].length == 0) {
                    console.log("ცარიელი ელემენტი")
                } else {
                    if (a[r][l].length == [1]) {
                        console.log(1000)
                    } else {
                        for (let x = 0; x < a[r][l].length; x++) {
                            console.log(a[r][l][x])
                        }
                    }
                }
            }
        }
    }
}


//davaleba 2

var arr = [5, 7, 6, 3, 4, 9, 110, 234, 3464, 443]
for (let t = 0; t < arr.length; t++) {
    if (t % 3 == 2) {
        console.log(arr[t])
    }
}


//davaleba 3

var arr2 = [1, 2, 3, 4, 5, 6, 7, 3, 4, 5, 6, 2, 9, 7, 5]
for (let c = 0; c < arr2.length; c++) {
    console.log(arr2[c])
    if (arr2[c] % 3 == 0) {
        console.log(arr2[c], Math.pow(arr2[c], 3))
    } else {
        if (arr2[c] % 2 == 0) {
            console.log(arr2[c], Math.pow(arr2[c], 2))
        } else {
            if (arr2[c] % 7 == 0) {
                delete arr2[c]
                    console.log(arr2[c])
            } else {
                console.log(arr2[c])
            }
        }
    }
}

















