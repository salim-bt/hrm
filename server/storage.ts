import {Client} from 'minio';

const minioClient = new Client({
    useSSL: false,
    endPoint: "localhost",
    port: 9000,
    accessKey: "KZdOCWJjWfe37SShvgd7",
    secretKey: "CQ6AqJ6YQRMxs5zM9tOjobB2C0I2n7AreDSawX5o"
});

export const storage = {
    upload: async (file: Express.Multer.File, path: string) => {
        return minioClient.putObject(
            "leave-attachments",
            path,
            file.buffer,
            file.size,
        );
    },
    getUrl: async (path: string) => {
        return minioClient.presignedGetObject("leave-attachments", path);
    }
};
