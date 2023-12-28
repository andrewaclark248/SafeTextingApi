import { Migration } from '@mikro-orm/migrations';

export class Migration20231228174254 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "group" add column "user_id" int not null;');
    this.addSql('alter table "group" add constraint "group_user_id_foreign" foreign key ("user_id") references "user" ("id") on update cascade;');
  }

  async down(): Promise<void> {
    this.addSql('alter table "group" drop constraint "group_user_id_foreign";');

    this.addSql('alter table "group" drop column "user_id";');
  }

}
