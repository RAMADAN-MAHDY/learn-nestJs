import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ValueTransformer,
} from 'typeorm';
import { Category } from '../../Category/entity/Category.entity';
import { Review } from '../../reviews/entity/reviews.entity';
// import { User } from '../../users/entity/user.entity';
import { CURRENT_TIMESTAMP } from '../../utils/constants';

// Transformer to convert decimal values from the database to number type in TypeScript
const decimalToNumber: ValueTransformer = {
  to: (value): any => value,
  from: (value) => (value === null ? null : parseFloat(String(value))),
};

@Entity({ name: 'products' })
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 150 })
  title: string;

  @Column({
    type: 'decimal',
    precision: 7,
    scale: 2,
    transformer: decimalToNumber,
  })
  price: number;

  @Column()
  description: string;

  @ManyToOne(() => Category, (category) => category.products)
  @JoinColumn({ name: 'categoryId' })
  category: Category;

  @OneToMany(() => Review, (review) => review.product)
  @JoinColumn({ name: 'reviewId' })
  reviews: Review[];

  //   @ManyToOne(() => User, (user) => user.products)
  //   @JoinColumn({ name: 'userId' })
  //   user: User;

  @Column({ nullable: false })
  categoryId: number;

  @CreateDateColumn({ type: 'timestamp', default: () => CURRENT_TIMESTAMP })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => CURRENT_TIMESTAMP,
    onUpdate: CURRENT_TIMESTAMP,
  })
  updatedAt: Date;
}
