import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const QueryParams = createParamDecorator(
  (_data: unknown, ctx: ExecutionContext): unknown => {
    const request = ctx.switchToHttp().getRequest();
    const params = request.query;
    if (params.limit) {
      params.limit = convertParamToType('limit', params.limit);
    }
    if (params.offset) {
      params.offset = convertParamToType('offset', params.offset);
    }
    params.filter = convertToObject(params, 'filter');
    params.sort = convertToObject(params, 'sort');
    return params;
  },
);

function convertToObject(
  params: Record<string, string>,
  property: string,
): object {
  const object: Record<string, string | number | Date> = {};
  const regex = new RegExp(`${property}\\[(.*?)\\]`);
  for (const key in params) {
    const match = regex.exec(key);
    if (match) {
      if (property === 'filter') {
        object[match[1]] = convertParamToType(match[1], params[key]);
      } else {
        object[match[1]] = params[key];
      }
      delete params[key];
    }
  }
  return object;
}

const convertParamToType = (
  param: string,
  value: string,
): string | number | Date => {
  const numberParams = ['offset', 'limit'];
  return numberParams.includes(param) ? Number(value) : value;
};
