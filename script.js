function calc() {
    base = document.querySelector('#selectBaseAtual').value;
    baseConverter = document.querySelector('#selectBaseConverter').value;
    areaConverter = document.querySelector('#txtareaConverter');
    areaConvertido = document.querySelector('#txtareaConvertido');
    areaConvertido.value = "";

    if (base == 'Decimal' && baseConverter == 'Binário') {
        let bin = []
        decimal = areaConverter.value

        while (decimal > 0) {
            bin.unshift(decimal % 2)
            decimal = parseInt(decimal / 2)
        }


        for (i = 0; i < bin.length; i++) {
            areaConvertido.value += bin[i]
        }
    }

    else if (base == 'Binário' && baseConverter == 'Decimal') {
        let bin = areaConverter.value
        var vetorBinario = bin.split("")
        var decimal = 0

        vetorBinario.reverse()

        for (i = 0; i < vetorBinario.length; i++) {
            switch (vetorBinario[i]) {
                case "0":
                    break;
                case "1":
                    decimal += 2 ** i
                    break;
            }
        }
        areaConvertido.value = decimal
    }

    else if (base == 'Decimal' && baseConverter == 'Octal') {
        let bin = []
        decimal = areaConverter.value

        while (decimal > 0) {
            bin.unshift(decimal % 8)
            decimal = parseInt(decimal / 8)
        }


        for (i = 0; i < bin.length; i++) {
            areaConvertido.value += bin[i]
        }
    }

    else if (base == 'Octal' && baseConverter == 'Binário') {
        octal = areaConverter.value
        let vetorBin = octal.split("")
        var bin = "";

        for (i = 0; i < vetorBin.length; i++) {
            let num = vetorBin[i]
            while (num > 0) {
                if ((num - 4) >= 0) {
                    num = num - 4
                    bin += "1"
                } else {
                    bin += "0"
                }
                if ((num - 2) >= 0) {
                    num = num - 2
                    bin += "1"
                } else {
                    bin += "0"
                }
                if ((num - 1) >= 0) {
                    num = num - 1
                    bin += "1"
                } else {
                    bin += "0"
                }
            }
        }
        areaConvertido.value = bin
    }
    else if (base == 'Octal' && baseConverter == 'Decimal') {
        octal = areaConverter.value
        let vetorBin = octal.split("")
        var bin = "";

        for (i = 0; i < vetorBin.length; i++) {
            let num = vetorBin[i]
            while (num > 0) {
                if ((num - 4) >= 0) {
                    num = num - 4
                    bin += "1"
                } else {
                    bin += "0"
                }
                if ((num - 2) >= 0) {
                    num = num - 2
                    bin += "1"
                } else {
                    bin += "0"
                }
                if ((num - 1) >= 0) {
                    num = num - 1
                    bin += "1"
                } else {
                    bin += "0"
                }
            }
        }
        var vetorBinario = bin.split("")
        var decimal = 0

        vetorBinario.reverse()

        for (i = 0; i < vetorBinario.length; i++) {
            switch (vetorBinario[i]) {
                case "0":
                    break;
                case "1":
                    decimal += 2 ** i
                    break;
            }
        }
        areaConvertido.value = decimal
    }
}