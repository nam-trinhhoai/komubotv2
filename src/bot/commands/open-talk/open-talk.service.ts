import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TABLE } from "src/bot/constants/table";
import { Opentalk } from "src/bot/models/opentalk.entity";
import { getTimeWeek } from "src/bot/utils/open-talk.untils";
import { Repository } from "typeorm";

@Injectable()
export class OpenTalkService {
  constructor(
    @InjectRepository(Opentalk)
    private readonly openTalkRepository: Repository<Opentalk>
  ) {}

  async getUserOpenTalk(userId, username) {
    return await this.openTalkRepository
      .createQueryBuilder(TABLE.OPEN_TALK)
      .where(`"userId" = :userId`, { userId: userId })
      .andWhere(`"username" = :username`, { username: username })
      .andWhere(
        `${TABLE.OPEN_TALK}.createdTimestamp >= ${
          getTimeWeek().firstday.timestamp
        }`
      )
      .andWhere(
        `${TABLE.OPEN_TALK}.createdTimestamp <= ${
          getTimeWeek().lastday.timestamp
        }`
      )
      .select(`${TABLE.OPEN_TALK}.*`)
      .execute();
  }

  async deleteUserOpenTalk(id) {
    return await this.openTalkRepository
      .createQueryBuilder()
      .delete()
      .from(Opentalk)
      .where("id = :id", { id: id })
      .execute();
  }
}
