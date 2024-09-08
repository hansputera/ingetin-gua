export type Configuration = {
	PORT: number;
	database: {
		host: string;
		port: number;
		user: string;
		password: string;
		database: string;
	};
};
