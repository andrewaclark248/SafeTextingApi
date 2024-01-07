import { Migration } from '@mikro-orm/migrations';

export class Migration20240106215149 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "organization" ("id" serial primary key, "name" varchar(255) not null);');

    this.addSql('alter table "user" add column "organization_id" int not null;');
    this.addSql('alter table "user" add constraint "user_organization_id_foreign" foreign key ("organization_id") references "organization" ("id") on update cascade;');
  }

  async down(): Promise<void> {
    this.addSql('alter table "user" drop constraint "user_organization_id_foreign";');

    this.addSql('drop table if exists "organization" cascade;');

    this.addSql('alter table "user" drop column "organization_id";');
  }

}
