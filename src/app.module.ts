import { Global, Module } from '@nestjs/common'
import { CategoryModule } from './category/category.module'
import { PrismaModule } from './prisma/prisma.module'
import { ArticleModule } from './article/article.module'
import { ConfigModule } from '@nestjs/config'

@Module({
    imports: [
        PrismaModule,
        CategoryModule,
        PrismaModule,
        ArticleModule,
        ConfigModule.forRoot({
            isGlobal: true
        })
    ],
    controllers: [],
    providers: []
})
export class AppModule {}
