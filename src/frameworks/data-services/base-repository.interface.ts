export interface IBaseRepository<T> {
    getAll(): Promise<T[]>;

    getById(id: string): Promise<T>;

    create(item: T): Promise<T>;

    update(id: string, item: T);
}