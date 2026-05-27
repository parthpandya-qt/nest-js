import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EvService {
    constructor(private configService: ConfigService) {}

    getMongoUrl(): string {
        return this.configService.get<string>('MONGO_URL') || 'Mongo URI not found';
    }
}