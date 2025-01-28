import { HttpException, HttpStatus } from '@nestjs/common';

export class CustomConflictException extends HttpException {
  constructor(resource: string) {
    super(
      {
        statusCode: HttpStatus.CONFLICT,
        message: `${resource} already exists`,
      },
      HttpStatus.CONFLICT,
    );
  }
}
