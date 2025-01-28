import { RequestContext } from 'nestjs-request-context';
import { TransactionContext } from '@mikro-orm/core';

export class AppRequestContext extends RequestContext {
  requestId?: string;
  transactionContext?: TransactionContext;
}

export class RequestContextService {
  static getContext(): AppRequestContext {
    return RequestContext.currentContext.req as AppRequestContext;
  }

  static setRequestId(id: string): void {
    const ctx = this.getContext();
    ctx.requestId = id;
  }

  static getRequestId(): string | undefined {
    return this.getContext().requestId;
  }

  static getTransactionConnection(): TransactionContext | undefined {
    const ctx = this.getContext();
    return ctx.transactionContext;
  }

  static setTransactionConnection(
    transactionConnection?: TransactionContext,
  ): void {
    const ctx = this.getContext();
    ctx.transactionContext = transactionConnection;
  }

  static cleanTransactionConnection(): void {
    const ctx = this.getContext();
    ctx.transactionContext = undefined;
  }
}
