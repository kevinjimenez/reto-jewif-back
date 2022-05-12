import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PlayerEntity } from '../entities/player.entity';
import { FilterProductDto } from '../dtos/player.dto';
import { Validators } from '../../common/validators';

@Injectable()
export class PlayerService {
  constructor(
    @InjectModel('players')
    private readonly _playerModel: Model<PlayerEntity>,
  ) {
  }

  async findAll(params: FilterProductDto) {
    try {
      const { limit, offset, search } = params;

      if (Validators.isNumber(search) && search != '') {
        return await this.findById(+search, offset, limit);
      }
      const records = await this._playerModel
        .find({
          $or: [
            { nickname: { $regex: '.*' + search + '.*' } },
            { status: { $regex: '.*' + search + '.*' } },
          ],
        })
        .sort({ id: 'desc' })
        .skip(offset)
        .limit(limit)
        .exec();

      const totalRecords = await this._playerModel
        .find({
          $or: [
            { nickname: { $regex: '.*' + search + '.*' } },
            { status: { $regex: '.*' + search + '.*' } },
          ],
        })
        .sort({ id: 'desc' })
        .count()
        .exec();
      return [records, totalRecords];
    } catch (e) {
      console.error({ e });
    }
  }

  async findById(id: number, offset, limit) {
    const recordsById = await this._playerModel
      .find({ id })
      .sort({ id: 'desc' })
      .skip(offset)
      .limit(limit)
      .exec();

    const totalRecordsById = await this._playerModel
      .find({ id })
      .sort({ id: 'desc' })
      .count()
      .exec();
    return [recordsById, totalRecordsById];
  }
}
