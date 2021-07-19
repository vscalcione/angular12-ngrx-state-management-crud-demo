export class Movie{
    id!: number;
    name!: string;
    earning!: string;
    releaseDate!: Date;
    username!: string;

    constructor(name?: string, earning?: string, relaaseDate?: Date, username?: string) {
        this.name = name || '';
        this.earning = earning || '';
        this.releaseDate = this.releaseDate || new Date();
        this.username = username || '';
    }

}