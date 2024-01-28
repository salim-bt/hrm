// pages/api/user/[id].ts
import type { NextApiRequest, NextApiResponse } from "next";
import { createRouter, expressWrapper } from "next-connect";
import multer, {type Multer, type DiskStorageOptions} from "multer";
import {storage} from "@/server/storage";
import {UploadedObjectInfo} from "minio";

const router = createRouter<NextApiRequest, NextApiResponse>();

// Multer Configuration
const upload:Multer = multer({
    storage: multer.memoryStorage(),
});

router
    // Use express middleware in next-connect with expressWrapper function
    // @ts-ignore
    .use(expressWrapper(upload.single("file")))
    .post(async (req, res) => {

        //generate random name
        const newId = Math.random().toString(36).substring(7);
        // @ts-ignore
        const newFileName = `${newId}.${req.file.mimetype.split("/")[1]}`;
        // @ts-ignore
        const uploadedFile:UploadedObjectInfo = await storage.upload(req.file, newFileName);
        // @ts-ignore
        console.log(uploadedFile);
        // @ts-ignore
        const url = await storage.getUrl(newFileName);
        console.log(url);
        res.status(200).json({ message: "success", url });
    });

export const config = {
    api: {
        bodyParser: false, // Disallow body parsing, consume as stream
    },
};

export default router.handler({
    onError: (err, req, res) => {
        // @ts-ignore
        console.error(err.stack);
        // @ts-ignore
        res.status(err.statusCode || 500).end(err.message);
    },
});