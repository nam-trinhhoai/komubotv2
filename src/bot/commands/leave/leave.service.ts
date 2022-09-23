import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
<<<<<<< HEAD
import { Holiday } from "src/bot/models/holiday.entity";
import { Leave } from "src/bot/models/leave.entity";
import { Repository } from "typeorm";

@Injectable()
export class LeaveService {
    constructor(
        @InjectRepository(Leave)
        private leaveReposistory: Repository<Leave>
    ) { }

    async saveLeave(channelId, authorId, minute, reason) {
        this.leaveReposistory.insert({
            channelId: channelId,
            userId: authorId,
            minute,
            reason,

        });
    }
}
=======
import { Message } from "discord.js";
import { TABLE } from "src/bot/constants/table";
import { Leave } from "src/bot/models/leave.entity";
import { Repository } from "typeorm";

interface ILeave {
  minute: number;
  reason: string;
}

@Injectable()
export class LeaveService {
  constructor(
    @InjectRepository(Leave) private leaveRepository: Repository<Leave>
  ) {}

  async saveLeave(message: Message, { minute, reason }: ILeave) {
    await this.leaveRepository.insert({
      channelId: message.channel.id,
      userId: message.author.id,
      minute: +minute,
      reason: reason,
      createdAt: new Date(),
    });
  }
}
>>>>>>> develop
