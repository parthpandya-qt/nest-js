import { Injectable } from '@nestjs/common';

@Injectable()
export class DatabaseService {
    private isConnected = false;
    connectToDatabase() {
        // Simulate database connection logic
        console.log('Connecting to the database...');
        this.isConnected = true;
        console.log('Database connected successfully!');
    }

    onModuleInit() {
        this.connectToDatabase();
    }
    onApplicationShutdown(signal: string) {
        if (this.isConnected) {
            console.log('Disconnecting from the database...');
            this.isConnected = false;
            console.log('Database disconnected successfully!');
        }
    }
    getData(){
        return {status: this.isConnected ? 'Connected' : 'Disconnected'};
    }
    
}
