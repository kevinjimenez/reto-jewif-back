import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PlayerModule } from './player/player.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { enviroment } from './environment/enviroment';
import config from './environment/config';
import * as Joi from 'joi';

@Module({
  imports: [
    // MongooseModule.forRoot(
    //   'mongodb+srv://creditu-assessment.xavvj.mongodb.net/?authMechanism=DEFAULT&tls=true',
    //   {
    //     user: 'creditu-assessment',
    //     pass: 'ZsnF72CcRkC7TKoV',
    //     dbName: 'assessment',
    //   },
    // ),
    ConfigModule.forRoot({
      envFilePath: enviroment[process.env.NODE_ENV] || '.env',
      isGlobal: true,
      load: [config],
      // validationSchema: Joi.object({
      //   API_KEY: Joi.number().required(),
      //   DATABASE_NAME: Joi.string().required(),
      //   DATABASE_PORT: Joi.number().required(),
      // }),
    }),
    PlayerModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
