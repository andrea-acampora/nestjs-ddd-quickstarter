export interface DomainService<T> {
  execute(): Promise<T>;
}
