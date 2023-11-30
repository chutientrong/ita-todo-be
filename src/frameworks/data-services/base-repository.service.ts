import { Repository } from "typeorm";
import { IBaseRepository } from "./base-repository.interface";

export class PGRepository<T> implements IBaseRepository<T> {
  private _repository: Repository<T>;

  constructor(repository: Repository<T>) {
    this._repository = repository;
  }

  getAll(): Promise<T[]> {
    return this._repository.find();
  }

  getById(id: any): Promise<T> {
    return this._repository.findOneBy(id);
  }

  create(item: T): Promise<T> {
    return this._repository.save(item);
  }

  update(id: string, data: any) {
    return this._repository.update(id, data);
  }
}