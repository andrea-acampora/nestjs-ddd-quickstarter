import {
  ExecutionContext,
  SetMetadata,
  createParamDecorator,
} from '@nestjs/common';

export const IS_PUBLIC_API = 'IS_PUBLIC_API';

export const PublicApi = () => SetMetadata(IS_PUBLIC_API, true);

export const InjectAuthUser = createParamDecorator(
  (_data: unknown, context: ExecutionContext) => {
    return context.switchToHttp().getRequest().user;
  },
);
