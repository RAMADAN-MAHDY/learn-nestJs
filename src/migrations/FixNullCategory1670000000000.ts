import { MigrationInterface, QueryRunner } from 'typeorm';

export class FixNullCategory1670000000000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // تحديث المنتجات القديمة
    await queryRunner.query(`
            UPDATE "products" 
            SET "categoryId" = 1 
            WHERE "categoryId" IS NULL
        `);

    // جعل العمود NOT NULL
    await queryRunner.query(`
            ALTER TABLE "products" 
            ALTER COLUMN "categoryId" SET NOT NULL
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // الرجوع عن التغيير لو احتجت
    await queryRunner.query(`
            ALTER TABLE "products" 
            ALTER COLUMN "categoryId" DROP NOT NULL
        `);
  }
}
