export class CommonService {

  constructor() {

  }

  public handleError(error: any) {
    const errorResponse = error.error;
    // console.error('handleError', errorResponse);
    return {
      status: errorResponse._error ? errorResponse._error.errorCode : errorResponse.status,
      message: errorResponse._error ? errorResponse._error.detailMessage || errorResponse._error.message : errorResponse.message
    };

  }

}
