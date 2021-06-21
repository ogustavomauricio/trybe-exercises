const gimli = {
    name: "Gimli",
    race: "dwarf",
    weapon: "battle axe",
};

const zeroUm = (parametro) => {
    const ZeroDois = Object.keys(parametro);
for (key in ZeroDois) {
    console.log(`${parametro[ZeroDois[key]]}`);
  }
}
zeroUm(gimli)

const vA = Object.values(gimli)
console.log(vA);