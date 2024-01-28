import { Input } from '@nextui-org/react'
import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import {Image} from "@nextui-org/image";


interface DropzoneProps {
    fileUrls: string[],
    setFileUrls: React.Dispatch<React.SetStateAction<string[]>>
}

function Dropzone({fileUrls,setFileUrls}: DropzoneProps) {

    const onDrop = useCallback(async (acceptedFiles: any) => {
        // upload the files to /api/upload/file
        console.log(acceptedFiles)

        // send to formidable endpoint
        const formData = new FormData();
        formData.append('file', acceptedFiles[0]);
        const response = await fetch('/api/upload/file', {
            method: 'POST',
            body: formData
        })
        const data = await response.json()
        console.log(data.url)
        fileUrls.push(data.url)
        setFileUrls(fileUrls)
        console.log(fileUrls)
    }, [fileUrls, setFileUrls])

    const {getRootProps, getInputProps, isDragActive} = useDropzone({
        onDrop,
        multiple:true,
    })

    return (
        <div {...getRootProps()}>
        {/* @ts-ignore**/}
            <Input
                aria-label="Dropzone"
                aria-labelledby={isDragActive ? "Dropzone" : undefined}
                {...getInputProps()} />
            {
                fileUrls.length===0&&isDragActive ?
                    <p>Drop the files here ...</p> :
                    <p>Drag 'n' drop some files here, or click to select files</p>
            }
            {
                fileUrls.map((fileUrl) => (
                    <Image
                        key={fileUrl}
                        alt="image" src={fileUrl} width={200} height={200} />
                ))
            }

        </div>
    )
}

export {
    Dropzone
}