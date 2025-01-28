import {
  CallHandler,
  ExecutionContext,
  Injectable,
  Logger,
  NestInterceptor,
} from '@nestjs/common';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpException, HttpStatus } from '@nestjs/common';
import { RequestContextService } from './context/app-request-context';

@Injectable()
export class ExceptionInterceptor implements NestInterceptor {
  private readonly logger = new Logger(ExceptionInterceptor.name);

  intercept(context: ExecutionContext, next: CallHandler) {
    return next.handle().pipe(
      catchError((error) => {
        const request = context.switchToHttp().getRequest();
        const status =
          error instanceof HttpException
            ? error.getStatus()
            : HttpStatus.INTERNAL_SERVER_ERROR;
        this.logger.error(
          `Exception at ${request.url} [${status}]: ${error.message}`,
          error.stack,
        );
        // Handle known HTTP exceptions
        if (error instanceof HttpException) {
          const response = error.getResponse();
          const status = error.getStatus();

          return throwError(() => ({
            statusCode: status,
            error:
              typeof response === 'string' ? response : response['message'],
            timestamp: new Date().toISOString(),
            path: context.switchToHttp().getRequest().url,
            correlationId: RequestContextService.getRequestId(),
          }));
        }

        // Handle unexpected exceptions
        return throwError(() => ({
          statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
          error: 'Internal Server Error',
          message: error.message,
          timestamp: new Date().toISOString(),
          path: context.switchToHttp().getRequest().url,
          correlationId: RequestContextService.getRequestId(),
        }));
      }),
    );
  }
}
