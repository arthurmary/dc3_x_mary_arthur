const Positif = (nbr) => {
    if (isNaN(nbr)) {
        let afficher = "STOP"
        return afficher
    } else {
        let afficher
        switch (Math.sign(nbr)) {
            case 1:
                afficher = "P"
                break;
            case -1:
                afficher = "N"
                break;
            case 0:
                afficher = "P"
                break;
            case -0:
                afficher = "P"
                break;
            default:
                afficher = "N"
        }
        return afficher
    }
}

console.log(Positif(-1))