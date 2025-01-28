export interface ApplicationService<Input, Output> {
  execute(input: Input): Promise<Output>;
}
