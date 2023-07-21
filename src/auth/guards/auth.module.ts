import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { configOptions } from 'src/shared/config/app.config.options';
@Module({
  imports: [
    JwtModule.register({
      secret: configOptions.JWT_SECRET,
      global: true,
    }),
  ],
})
export class AuthModule {}
