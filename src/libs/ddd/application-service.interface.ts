export interface ApplicationService<I, O> {
  execute(input: I): Promise<O>;
}
