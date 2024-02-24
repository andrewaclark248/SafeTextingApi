import { Migration } from '@mikro-orm/migrations';

export class Migration20240224052420 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "group_messages" ("group_id" int not null, "message_id" int not null, constraint "group_messages_pkey" primary key ("group_id", "message_id"));');

    this.addSql('alter table "group_messages" add constraint "group_messages_group_id_foreign" foreign key ("group_id") references "group" ("id") on update cascade on delete cascade;');
    this.addSql('alter table "group_messages" add constraint "group_messages_message_id_foreign" foreign key ("message_id") references "message" ("id") on update cascade on delete cascade;');

    this.addSql('drop table if exists "group_tags" cascade;');
  }

  async down(): Promise<void> {
    this.addSql('create table "group_tags" ("group_id" int not null, "message_id" int not null, constraint "group_tags_pkey" primary key ("group_id", "message_id"));');

    this.addSql('alter table "group_tags" add constraint "group_tags_group_id_foreign" foreign key ("group_id") references "group" ("id") on update cascade on delete cascade;');
    this.addSql('alter table "group_tags" add constraint "group_tags_message_id_foreign" foreign key ("message_id") references "message" ("id") on update cascade on delete cascade;');

    this.addSql('drop table if exists "group_messages" cascade;');
  }

}
