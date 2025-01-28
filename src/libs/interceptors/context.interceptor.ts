import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { RequestContextService } from './context/app-request-context';
import { v4 } from 'uuid';

@Injectable()
export class ContextInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler) {
    const request = context.switchToHttp().getRequest();
    const requestId = request?.body?.requestId ?? v4();
    RequestContextService.setRequestId(requestId);
    return next.handle();
  }
}
