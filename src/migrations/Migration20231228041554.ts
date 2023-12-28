import { Migration } from '@mikro-orm/migrations';

export class Migration20231228041554 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "group" ("id" serial primary key, "name" varchar(255) not null);');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "group" cascade;');
  }

}
