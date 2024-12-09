import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { GroupsModule } from './groups/groups.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/sphere'), UsersModule, PostsModule, GroupsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
