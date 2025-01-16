import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { HealthController } from './controller/health.controller';

@Module({
  imports: [TerminusModule],
  controllers: [HealthController],
  providers: [],
  exports: [],
})
export class HealthModule {}
