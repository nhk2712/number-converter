var inte = document.getElementById('inte'),
    bina = document.getElementById('bina'),
    btn = document.getElementById('btn')

var conv = document.getElementsByClassName('conv')
var mode = document.getElementById('mode')

var btnHex = document.getElementById('btnHex'),
    inteHex = document.getElementById('inteHex'),
    hexa = document.getElementById('hexa')

var dark = document.getElementById('dark'),
    inp = document.getElementsByTagName('input'),
    sel = document.getElementsByTagName('select'),
    but = document.getElementsByTagName('button')

var binaInt = document.getElementById('binaInt'),
    btnInt = document.getElementById('btnInt'),
    intFrBin = document.getElementById('intFrBin')

var hexaInt = document.getElementById('hexaInt'),
    btnHexInt = document.getElementById('btnHexInt'),
    intFrHex = document.getElementById('intFrHex')

dark.onchange = function () {
    if (this.checked) {
        document.body.style.backgroundColor = "black"
        document.body.style.color = "white"

        for (var i = 0; i < inp.length; i++) {
            inp[i].style.backgroundColor = "black"
            inp[i].style.color = "white"
        }
        for (var i = 0; i < sel.length; i++) {
            sel[i].style.backgroundColor = "black"
            sel[i].style.color = "white"
        }
        for (var i = 0; i < but.length; i++) {
            but[i].style.backgroundColor = "black"
            but[i].style.color = "white"
        }
    }
    else {
        document.body.style.backgroundColor = "white"
        document.body.style.color = "black"

        for (var i = 0; i < inp.length; i++) {
            inp[i].style.backgroundColor = "white"
            inp[i].style.color = "black"
        }
        for (var i = 0; i < sel.length; i++) {
            sel[i].style.backgroundColor = "white"
            sel[i].style.color = "black"
        }
        for (var i = 0; i < but.length; i++) {
            but[i].style.backgroundColor = "white"
            but[i].style.color = "black"
        }
    }
}

btn.onclick = function () {
    if (inte.value == "" || !isInt(inte.value)) {
        alert('Please enter an integer!')
    }
    else {
        bina.innerText = intToBin(inte.value)
    }
}

function intToBin(num) {
    var res = ""
    var time = 0
    while (num >= 1 || num == 0) {
        if (time % 4 == 0) res = " " + res

        res = (num % 2).toString() + res
        num -= num % 2
        num /= 2

        time++
        if (num == 0) break
    }

    if (time % 4 == 1) res = "000" + res
    else if (time % 4 == 2) res = "00" + res
    else if (time % 4 == 3) res = "0" + res

    return res;
}

function isInt(num) {
    if (num == Math.floor(num)) return true
    else return false
}

for (var i = 1; i < conv.length; i++) {
    conv[i].style.display = "none"
}

mode.onchange = function () {
    for (var i = 0; i < conv.length; i++) {
        conv[i].style.display = "none"
    }
    var idex = parseInt(this.value)
    conv[idex].style.display = "unset"
}

function intToHex(num) {
    var res = ""
    while (num >= 1 || num == 0) {
        if (num % 16 == 10) res = res + "A"
        else if (num % 16 == 11) res = res + "B"
        else if (num % 16 == 12) res = res + "C"
        else if (num % 16 == 13) res = res + "D"
        else if (num % 16 == 14) res = res + "E"
        else if (num % 16 == 15) res = res + "F"
        else res = (num % 16).toString() + res

        num -= num % 16
        num /= 16

        if (num == 0) break
    }
    return res
}

btnHex.onclick = function () {
    if (inteHex.value == "" || !isInt(inteHex.value)) {
        alert('Please enter an integer!')
    }
    else {
        hexa.innerText = intToHex(inteHex.value)
    }
}

function binToInt(str) {
    var res = 0
    for (var i = str.length - 1; i > -1; i--) {
        if (str.charAt(i) == '1') res += Math.pow(2, str.length - i - 1)
    }
    return res
}

btnInt.onclick = function () {
    var val = strNoSpc(binaInt.value)
    if (!isBin(val)) {
        alert('Please enter a binary number!')
    }
    else {
        intFrBin.innerText = binToInt(val)
    }
}

function isBin(str) {
    if (str == "") return false

    for (var i = 0; i < str.length; i++)
        if (str.charAt(i) != "0" && str.charAt(i) != "1")
            return false

    return true
}

function strNoSpc(str) {
    var res = ""
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) != " ") res += str.charAt(i)
    }
    return res
}

function hexToInt(str) {
    var res = 0
    for (var i = str.length - 1; i > -1; i--) {
        if (str.charAt(i) == 'A' || str.charAt(i) == 'a') res += 10 * Math.pow(16, str.length - i - 1)
        else if (str.charAt(i) == 'B' || str.charAt(i) == 'b') res += 11 * Math.pow(16, str.length - i - 1)
        else if (str.charAt(i) == 'C' || str.charAt(i) == 'c') res += 12 * Math.pow(16, str.length - i - 1)
        else if (str.charAt(i) == 'D' || str.charAt(i) == 'd') res += 13 * Math.pow(16, str.length - i - 1)
        else if (str.charAt(i) == 'E' || str.charAt(i) == 'e') res += 14 * Math.pow(16, str.length - i - 1)
        else if (str.charAt(i) == 'F' || str.charAt(i) == 'f') res += 15 * Math.pow(16, str.length - i - 1)
        else res += parseInt(str.charAt(i)) * Math.pow(16, str.length - i - 1)
    }
    return res
}

function isHex(str) {
    if (str == "") return false

    for (var i = 0; i < str.length; i++)
        if (str.charAt(i)<'0'
        || (str.charAt(i)>'9'&&str.charAt(i)<'A')
        || (str.charAt(i)>'F'&&str.charAt(i)<'a')
        || str.charAt(i)>'f') return false

    return true
}

btnHexInt.onclick = function () {
    var val = strNoSpc(hexaInt.value)
    if (!isHex(val)) {
        alert('Please enter a hexadecimal number!')
    }
    else {
        intFrHex.innerText = hexToInt(val)
    }
}