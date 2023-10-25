(() => {
  const error = (message: string): never => {
    throw new Error(message);
  };

  //Never es una funcion que eventualmente va a terminar con un error!

  //error("lalalal");
})();
