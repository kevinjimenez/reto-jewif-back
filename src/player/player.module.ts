import { Module } from '@nestjs/common';
import { PlayerService } from './services/player.service';
import { PlayerController } from './controllers/player.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PlayerEntitySchema } from './entities/player.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'players',
        schema: PlayerEntitySchema,
      },
    ]),
  ],
  providers: [PlayerService],
  controllers: [PlayerController],
})
export class PlayerModule {
}
