import { DiscordModule } from "@discord-nestjs/core";
import { Module } from "@nestjs/common";
import { DiscoveryModule } from "@nestjs/core";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BotController } from "./bot.controller";
import { BotService } from "./bot.service";
import { ChecklistCommand } from "./commands/checklist.command";
// import { CheckListModule } from "./commands/checklist/checklist.module";
import { CompantripCommand } from "./commands/companytrip/companytrip.command";

import { DailyCommand } from "./commands/daily.command";
import { MeetingCommand } from "./commands/meeting/meeting.command";
import { MeetingService } from "./commands/meeting/meeting.service";
import { RemindCommand } from "./commands/remind/remind.command";
import { UserStatusCommand } from "./commands/user_status/user_status.command";
import { UserStatusService } from "./commands/user_status/user_status.service";
import { WFHCommand } from "./commands/wfh/wfh.command";
import { HttpModule } from "@nestjs/axios";
import { ScheduleModule as NestjsScheduleModule } from "@nestjs/schedule";
import { TimeSheetCommand } from "./commands/timesheet/timesheet.command";
import { BotGateway } from "./events/bot.gateway";
import { Daily } from "./models/daily.entity";
import { Holiday } from "./models/holiday.entity";
import { Leave } from "./models/leave.entity";
import { Meeting } from "./models/meeting.entity";
import { Msg } from "./models/msg.entity";
import { Remind } from "./models/remind.entity";
import { User } from "./models/user.entity";
import { VoiceChannels } from "./models/voiceChannel.entity";
import { WorkFromHome } from "./models/wfh.entity";
import { MeetingSchedulerService } from "./scheduler/meeting-scheduler/meeting-scheduler.service";
import { ReminderSchedulerService } from "./scheduler/reminder-scheduler/reminder-scheduler.service";
import { SendMessageSchedulerService } from "./scheduler/send-message-scheduler/send-message-scheduler.service";
import { PlaySlashCommand } from "./slash-commands/play.slashcommand";
import { PlaylistSlashCommand } from "./slash-commands/playlist.slashcommand";
import { NotifiService } from "./commands/notification/noti.service";
import { ToggleActiveCommand } from "./commands/toggleActive/toggleActive.command";
import { ToggleActiveService } from "./commands/toggleActive/toggleActive.service";
import { CheckListModule } from "./utils/checklist/checklist.module";
import { MulterModule } from "@nestjs/platform-express";
import { UtilsModule } from "./utils/utils.module";
import { GemrankCommand } from "./commands/gemrank.command";
import { MoveChannelCommand } from "./commands/move_channel/move_channel.command";
import LeaveCommand from "./commands/leave/leave.command";
import { LeaveService } from "./commands/leave/leave.service";
import { ReportWFHModule } from "./utils/reportWFH/report-wfh.module";
import { PollCommand } from "./commands/poll/poll.command";
import { PollEmbedUntil } from "./utils/poll/pollEmbed.until";
import { ConfigService } from "@nestjs/config";
import { ClientConfigService } from "./config/client-config.service";
import { Opentalk } from "./models/opentalk.entity";
import { Uploadfile } from "./models/uploadFile.entity";
import { ReportOrderModule } from "./utils/reportOrder/reportOrder.module";
import { ReportCommand } from "./commands/report/report.command";
import { ReportOrderService } from "./utils/reportOrder/reportOrder.service";
import { UtilsService } from "./utils/utils.service";
// import { ReportOrder } from "./utils/reportOrder.utils";
import HolidayCommand from "./commands/holiday/holiday.command";
import { Order } from "./models/order.entity";
import { HolidayService } from "./commands/holiday/holiday.service";
import Ncc8Command from "./commands/ncc8/ncc8.command";
// import { CheckListController } from "./commands/Checklist/checklist.controller";
import { CompanyTrip } from "./models/companyTrip.entity";
import { CompanytripService } from "./commands/companytrip/companytrip.service";
import { PingCommand } from "./commands/ping/ping";
import { KomubotrestController } from "./utils/komubotrest/komubotrest.controller";
import { OpenTalkService } from "./commands/open-talk/open-talk.service";
import NotificationCommand from "./commands/notification/noti.command";
import { OrderCommand } from "./commands/order/order.command";
import { OrderService } from "./commands/order/order.service";
import { MoveChannelService } from "./commands/move_channel/move_channel.service";
import { CheckList } from "./models/checklistdata.entity";
import { Subcategorys } from "./models/subcategoryData.entity";
import { Channel } from "./models/channel.entity";
import { ReportTracker } from "./utils/report-tracker.untils";
import { ReportHolidayService } from "./utils/reportHoliday/reportHoliday.service";
import { ReportOpenTalkService } from "./utils/reportOpentalk/reportOpentalk.service";
import { AudioPlayer } from "./utils/audioPlayer.utils";
import { ReportDailyModule } from "./utils/reportDaily/report-daily.module";
import holidayCommand from "./commands/holiday.command";
import { ReportDailyService } from "./utils/reportDaily/report-daily.service";
import { ReportMentionModule } from "./utils/reportMention/reportMention.module";

@Module({
  imports: [
    DiscordModule.forFeature(),
    MulterModule.register({
      dest: "./files",
    }),
    DiscoveryModule,
    TypeOrmModule.forFeature([
      Daily,
      Order,
      Leave,
      Holiday,
      User,
      Meeting,
      VoiceChannels,
      WorkFromHome,
      Msg,
      Remind,
      Uploadfile,
      Opentalk,
      CompanyTrip,
      CheckList,
      Subcategorys,
      Channel,
      Daily,
    ]),
    // forwardRef(() => CheckListModule),
    CheckListModule,
    NestjsScheduleModule.forRoot(),
    HttpModule,
    UtilsModule,
    ReportWFHModule,
    ReportMentionModule
  ],
  providers: [
    PlaySlashCommand,
    PlaylistSlashCommand,
    ChecklistCommand,
    CompantripCommand,
    CompanytripService,
    BotGateway,
    LeaveCommand,
    LeaveService,
    DailyCommand,
    MeetingCommand,
    holidayCommand,
    WFHCommand,
    RemindCommand,
    UserStatusCommand,
    PingCommand,
    UserStatusService,
    BotService,
    KomubotrestController,
    UtilsService,
    ReportTracker,
    MoveChannelCommand,
    TimeSheetCommand,
    OpenTalkService,
    MeetingSchedulerService,
    ReminderSchedulerService,
    SendMessageSchedulerService,
    MeetingService,
    ToggleActiveCommand,
    ToggleActiveService,
    NotifiService,
    NotificationCommand,
    OrderCommand,
    PollCommand,
    OrderService,
    ReportCommand,
    ReportOrderService,
    ReportDailyService,
    HolidayService,
    Ncc8Command,
    KomubotrestController,
    CompanytripService,
    PollEmbedUntil,
    ConfigService,
    ClientConfigService,
    MoveChannelService,
    ReportHolidayService,
    ReportOpenTalkService,
    AudioPlayer,
  ],
  controllers: [BotController],
})
export class BotModule {}
