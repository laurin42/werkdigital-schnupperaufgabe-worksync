function getEnvVariable(key: string, defaultValue?: string): string {
    const value = process.env[key] || defaultValue;
    if (!value) {
        throw new Error(`Environment variable ${key} is not set.`);
    }
    return value;
}


export const config = {
    jwtSecret: getEnvVariable("JWT_SECRET"),
    port: Number(process.env.PORT) || 3000,
    databaseUrl: getEnvVariable("DATABASE_URL"),
};