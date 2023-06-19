import { Module } from '@nestjs/common'
import { CategoryModule } from './category/category.module'
import { PrismaModule } from './prisma/prisma.module'

@Module({
    imports: [PrismaModule, CategoryModule, PrismaModule],
    controllers: [],
    providers: []
})
export class AppModule {}
