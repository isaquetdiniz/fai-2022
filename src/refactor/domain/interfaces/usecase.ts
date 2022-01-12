export interface Usecase<T = any> {
    execute(params: any): T
}