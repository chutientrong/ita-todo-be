import { Repository } from "typeorm";
import { IBaseRepository } from "./base-repository.interface";
import { BadRequestException } from "@nestjs/common";

export class PGRepository<T> implements IBaseRepository<T> {
  private _repository: Repository<T>;

  constructor(repository: Repository<T>) {
    this._repository = repository;
  }

  async getAll(): Promise<T[]> {
    return await this._repository.find();
  }

  async getById(id: any): Promise<T> {
    return await this._repository.findOneBy(id);
  }

  async create(item: T): Promise<T> {
    return await this._repository.save(item);
  }

  async update(id: any, data: any) {
    await this._repository.update(id, data);
  }

  async delete(id: number) {
    await this._repository.delete(id);
  }
}