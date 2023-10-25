(() => {
  const fullName = (
    firstName: string,
    lastName?: string,
    upper: boolean = false
  ): string => {
    if (upper) {
      return `${firstName} ${lastName}`.toUpperCase();
    } else {
      return `${firstName} ${lastName || "No last name"}`;
    }
  };

  const name = fullName("Tony", "Montana", true);

  console.log(name);
})();

//El signo de interrogacion en el páramentro significa que puede ir o no. Lo convierte en un páramentro opcional.
