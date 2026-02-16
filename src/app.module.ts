import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { ReviewsModule } from './reviews/reviews.module';
import { UsersModule } from './users/users.moduls';
import { CategoryModule } from './Category/category.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { DatabaseConfig } from './config/database.config';
import { DatabaseConfigModule } from './config/DatabaseConfig.module';
import { Review } from './reviews/entity/reviews.entity';
import { Product } from './products/entity/product.entity';
import { User } from './users/entity/user.entity';
import { Category } from './Category/entity/Category.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env.dev',
    }),

    DatabaseConfigModule,

    TypeOrmModule.forRootAsync({
      imports: [DatabaseConfigModule],
      inject: [DatabaseConfig],
      useFactory: (dbConfig: DatabaseConfig) => ({
        type: 'postgres',
        host: dbConfig.host,
        port: dbConfig.port,
        username: dbConfig.user,
        password: dbConfig.password,
        database: dbConfig.databaseName,
        entities: [Product, Review, User, Category],
        synchronize: process.env.NODE_ENV !== 'production',
      }),
    }),

    ProductsModule,
    ReviewsModule,
    UsersModule,
    CategoryModule,
  ],
})
export class AppModule {}
