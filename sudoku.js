/*EJEMPLO DE SUDOKU
miSudoku=[
[4,1,3,8,2,5,6,7,9],
[5,6,7,1,4,9,8,3,2],
[2,8,9,7,3,6,1,4,5],
[1,9,5,4,6,2,7,8,3],
[7,2,6,9,8,3,5,1,4],
[3,4,8,5,1,7,2,9,6],
[8,5,1,6,9,4,3,2,7],
[9,7,2,3,5,8,4,6,1],
[6,3,4,2,7,1,9,5,8]
];
*/

function esSudokuCorrecto(miSudoku) {
    var subsu = new Array(3);
    for (var z = 0; z < 3; z++) {
        subsu[z] = new Array(3);
    }
    var sema1 = 0;
    var sema2 = 0;
    var subunic = false;

    //recorre los 9 indices primarios de los 9 subsudokus
    for (var a = 0; a < 9; a += 3) {
        for (var b = 0; b < 9; b += 3) {
            //para cada uno recorre las 9 casillas y las copia en subsu
            for (var i = 0; i < 3; i++) {
                for (var j = 0; j < 3; j++) {
                    subsu[i][j] = miSudoku[b + i][a + j];
                }
            }
            //comprueba que solo se repitan una vez (suma 9 cada vez)
            for (var k = 0; k < 3; k++) {
                for (var l = 0; l < 3; l++) {
                    for (var m = 0; m < 3; m++) {
                        for (var n = 0; n < 3; n++) {
                            if (subsu[k][l] == subsu[m][n]) {
                                sema1++;
                            }
                        }
                    }
                }
            }
            //si son 81 , todos los subsudoku esta bien
            if (sema1 == 81) {
                subunic = true;
            }
        }
    }
    //lee miSudoku buscando repetidos en columnas
    for (var o = 0; o < 9; o++) {
        for (var p = 0; p < 9; p++) {
            for (var q = 0; q < 9; q++) {
                if (miSudoku[o][p] == miSudoku[o][q]) {
                    //si no hay repetidos sema2=81
                    sema2++;
                }
            }
        }
    }
    //lee miSudoku buscando repetidos en filas
    for (var r = 0; r < 9; r++) {
        for (var s = 0; s < 9; s++) {
            for (var t = 0; t < 9; t++) {
                if (miSudoku[r][s] == miSudoku[t][s]) {
                    //si no hay repetidos, sumara 81 a sema2
                    sema2++;
                }
            }
        }
    }
    //chequea todo correcto
    if (subunic && sema2 == 162) {
        return true;
    } else {
        return false;
    }
}