(() => {
  const batman = "Batman";
  const linternaVerde = "Linterna Verde";
  const volvanNegro = `Héroe: Volcan Negro`;

  console.log(batman[10]?.toUpperCase() || "No hay carácter 11 en la palabra");
})();
