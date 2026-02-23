import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { EnvConfigType } from 'src/config/env.validation';

@Injectable()
export class TypedConfigService {
  constructor(
    private readonly configService: ConfigService<EnvConfigType, true>
  ) {}

  get<K extends keyof EnvConfigType>(key: K): EnvConfigType[K] {
    return this.configService.get(key, { infer: true });
  }

  get databaseUrl() {
    return this.get('DATABASE_URL');
  }
}
