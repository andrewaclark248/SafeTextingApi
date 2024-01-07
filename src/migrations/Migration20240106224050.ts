import { Migration } from '@mikro-orm/migrations';

export class Migration20240106224050 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "people" add column "organization_id" int not null;');
    this.addSql('alter table "people" add constraint "people_organization_id_foreign" foreign key ("organization_id") references "organization" ("id") on update cascade;');
  }

  async down(): Promise<void> {
    this.addSql('alter table "people" drop constraint "people_organization_id_foreign";');

    this.addSql('alter table "people" drop column "organization_id";');
  }

}
