# Manejo de errores con middleware , asyncHandler y CustomError class

Se implementa un CustomError class (clase con constructor privado y metodos estaticos para lanzar errores con codigos de estados HTTP) que extienede del Error class base, añadiendo la propiedad statusCode para manejo de solicitudes HTTP.
Se implementa asyncHandler funcion utilitaria.

Cada funcion de controlador es envuelta por el asyncHandler para evitar el uso de bloques try catch.

En caso de lanzamiento de un error controlado o no controlado se delega al midleware ErrorHandler que de forma centralizada captura (error,req,res,next).
Dentro de este middleware se implementa logica para lanzar errores al cliente de forma controlada.

