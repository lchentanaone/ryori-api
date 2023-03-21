/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersEntity } from './entities/user/user.entity';
import { UserModule } from './entities/user/user.module';
import { FoodModule } from './entities/food/food.module';
import { FoodsEntity } from './entities/food/food.entity';
import { StoreEntity } from './entities/store/store.entity';
import { StoreModule } from './entities/store/store.module';
import { OutletEntity } from './entities/outlet/outlet.entity';
import { OutletModule } from './entities/outlet/outlet.module';
import { CustomerEntity } from './entities/customer/customer.entity';
import { CustomerModule } from './entities/customer/customer.module';
import { MenuCategoryEntity } from './entities/menu-categories/menu.entity';
import { MenuModule } from './entities/menu-categories/menu.module';
import { AuthModule } from './authentication/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'ryori_api',
      entities: [UsersEntity, FoodsEntity, StoreEntity, OutletEntity, CustomerEntity, MenuCategoryEntity],
      synchronize: true,
      autoLoadEntities: true,
    }),AuthModule, UserModule, FoodModule, StoreModule, OutletModule, CustomerModule, MenuModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
