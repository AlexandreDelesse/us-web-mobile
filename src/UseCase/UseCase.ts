export interface UseCase<T = any, P = any> {
  execute: (params?: P) => Promise<T>;
}
