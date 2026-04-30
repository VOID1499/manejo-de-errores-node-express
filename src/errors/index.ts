export class CustomError extends Error {
    
  public readonly statusCode: number;

  private constructor(message: string, statusCode = 500) {
    super(message);
    this.name = "CustomError";
    this.statusCode = statusCode;
  }

  static badRequest(message: string) {
    return new CustomError(message, 400);
  }

  static notFound(message: string) {
    return new CustomError(message, 404);
  }

  static internal(message = "Internal server error") {
    return new CustomError(message, 500);
  }
}

