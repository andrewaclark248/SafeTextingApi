import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateUser1695951930566 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE book ADD COLUMN price int`); 
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
