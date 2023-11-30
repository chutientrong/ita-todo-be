import { MigrationInterface, QueryRunner } from "typeorm";

export class AddUserTable1701322263326 implements MigrationInterface {
    name = 'AddUserTable1701322263326'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Users" ("id" SERIAL NOT NULL, "isActive" boolean NOT NULL DEFAULT true, "isDeleted" boolean NOT NULL DEFAULT false, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "email" character varying NOT NULL, "userName" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_16d4f7d636df336db11d87413e3" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "Users"`);
    }

}
