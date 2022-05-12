import { Controller, Get, Query } from '@nestjs/common';
import { PlayerService } from '../services/player.service';
import { FilterProductDto } from '../dtos/player.dto';

@Controller('player')
export class PlayerController {
  constructor(private readonly _playerService: PlayerService) {
  }

  @Get()
  getProducts(@Query() params: FilterProductDto) {
    return this._playerService.findAll(params);
  }
}
