import { Migration } from '@mikro-orm/migrations';

export class Migration20240106182035 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "people" ("id" serial primary key, "email" varchar(255) not null);');

    this.addSql('create table "group_people" ("group_id" int not null, "people_id" int not null, constraint "group_people_pkey" primary key ("group_id", "people_id"));');

    this.addSql('alter table "group_people" add constraint "group_people_group_id_foreign" foreign key ("group_id") references "group" ("id") on update cascade on delete cascade;');
    this.addSql('alter table "group_people" add constraint "group_people_people_id_foreign" foreign key ("people_id") references "people" ("id") on update cascade on delete cascade;');
  }

  async down(): Promise<void> {
    this.addSql('alter table "group_people" drop constraint "group_people_people_id_foreign";');

    this.addSql('drop table if exists "people" cascade;');

    this.addSql('drop table if exists "group_people" cascade;');
  }

}
