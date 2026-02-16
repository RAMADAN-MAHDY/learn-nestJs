import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DatabaseConfig {
  constructor(private configService: ConfigService) {}

  get host(): string {
    return this.configService.getOrThrow<string>('DB_HOST');
  }
  get port(): number {
    return this.configService.getOrThrow<number>('DB_PORT');
  }
  get user(): string {
    return this.configService.getOrThrow<string>('DB_USER');
  }
  get password(): string {
    return this.configService.getOrThrow<string>('DB_PASSWORD');
  }
  get databaseName(): string {
    return this.configService.getOrThrow<string>('DB_NAME');
  }
}
