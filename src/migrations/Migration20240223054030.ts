import { Migration } from '@mikro-orm/migrations';

export class Migration20240223054030 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "message" ("id" serial primary key, "name" varchar(255) not null, "message" varchar(255) not null, "message_type" varchar(255) not null, "user_id" int not null);');

    this.addSql('create table "message_groups" ("message_id" int not null, "group_id" int not null, constraint "message_groups_pkey" primary key ("message_id", "group_id"));');

    this.addSql('create table "group_tags" ("group_id" int not null, "message_id" int not null, constraint "group_tags_pkey" primary key ("group_id", "message_id"));');

    this.addSql('alter table "message" add constraint "message_user_id_foreign" foreign key ("user_id") references "user" ("id") on update cascade;');

    this.addSql('alter table "message_groups" add constraint "message_groups_message_id_foreign" foreign key ("message_id") references "message" ("id") on update cascade on delete cascade;');
    this.addSql('alter table "message_groups" add constraint "message_groups_group_id_foreign" foreign key ("group_id") references "group" ("id") on update cascade on delete cascade;');

    this.addSql('alter table "group_tags" add constraint "group_tags_group_id_foreign" foreign key ("group_id") references "group" ("id") on update cascade on delete cascade;');
    this.addSql('alter table "group_tags" add constraint "group_tags_message_id_foreign" foreign key ("message_id") references "message" ("id") on update cascade on delete cascade;');
  }

  async down(): Promise<void> {
    this.addSql('alter table "message_groups" drop constraint "message_groups_message_id_foreign";');

    this.addSql('alter table "group_tags" drop constraint "group_tags_message_id_foreign";');

    this.addSql('drop table if exists "message" cascade;');

    this.addSql('drop table if exists "message_groups" cascade;');

    this.addSql('drop table if exists "group_tags" cascade;');
  }

}
