import { Migration } from '@mikro-orm/migrations';

export class Migration20240106222612 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "people" add column "first_name" varchar(255) not null, add column "last_name" varchar(255) not null, add column "phone_number" varchar(255) not null;');
  }

  async down(): Promise<void> {
    this.addSql('alter table "people" drop column "first_name";');
    this.addSql('alter table "people" drop column "last_name";');
    this.addSql('alter table "people" drop column "phone_number";');
  }

}
