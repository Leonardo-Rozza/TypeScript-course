(() => {
  const fullName = (firstName: string, ...param: string[]): string => {
    return `${firstName} ${param.join(" ")}`;
  };

  const name = fullName("Klar", "Joseph", "Kent");

  console.log(name);
})();
