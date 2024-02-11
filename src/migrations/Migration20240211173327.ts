import { Migration } from '@mikro-orm/migrations';

export class Migration20240211173327 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "phone" ("id" serial primary key, "number" varchar(255) not null, "user_id" int not null);');

    this.addSql('alter table "phone" add constraint "phone_user_id_foreign" foreign key ("user_id") references "user" ("id") on update cascade;');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "phone" cascade;');
  }

}
