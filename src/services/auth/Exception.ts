interface ExceptionDetails {
  message: string;
  status: number;
}

class Exception extends Error {
  readonly status: number;
  constructor(details: ExceptionDetails) {
    super(details.message);
    this.status = details.status;
  }
}

export default Exception;
