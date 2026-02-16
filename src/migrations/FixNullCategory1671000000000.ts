import { MigrationInterface, QueryRunner } from 'typeorm';

export class FixNullCategory1671000000000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // تحديث المنتجات القديمة
    await queryRunner.query(`
            UPDATE "products" 
            SET "userId" = 1 
            WHERE "userId" IS NULL
        `);

    // جعل العمود NOT NULL
    await queryRunner.query(`
            ALTER TABLE "products" 
            ALTER COLUMN "userId" SET NOT NULL
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // الرجوع عن التغيير لو احتجت
    await queryRunner.query(`
            ALTER TABLE "products" 
            ALTER COLUMN "userId" DROP NOT NULL
        `);
  }
}
