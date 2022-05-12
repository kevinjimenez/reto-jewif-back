import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigType } from '@nestjs/config';
import config from '../environment/config';

@Global()
@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: async (_configService: ConfigType<typeof config>) => {
        const { connection, user, password, host, dbName } =
          _configService.mongo;
        return {
          uri: `${connection}://${host}`,
          user,
          pass: password,
          dbName,
        };
      },
      inject: [config.KEY],
    }),
  ],
})
export class DatabaseModule {
}
