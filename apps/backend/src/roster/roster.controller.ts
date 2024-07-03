import { Controller, Get } from '@nestjs/common';
import { RosterService } from 'apps/backend/src/roster/roster.service';

@Controller('roster')
export class RosterController {
  constructor(private readonly rosterService: RosterService) {}

  @Get()
  async getRoster() {
    return this.rosterService.getRoster();
  }
}