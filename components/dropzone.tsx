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
        <div {...getRootProps()} 
            className='w-full bg-gray-100 border-2 border-gray-300 border-dashed rounded-lg p-12'
        >
        {/* @ts-ignore**/}
            <Input
                aria-label="Dropzone"
                placeholder='Drop files here or click to upload'
                aria-labelledby={isDragActive ? "Dropzone" : undefined}
                {...getInputProps()} 
                size='lg'
                className='hidden'    
            />
            <div className="flex justify-center items-center w-full h-auto">
                <p className='text-center text-gray-400'>Drag and drop files here or click to upload</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10'>
            {
                fileUrls.map((fileUrl) => (
                    <Image
                        key={fileUrl}
                        alt="image" 
                        src={fileUrl} 
                        width={300} 
                        height={300} 
                    />
                ))
            }
            </div>
        </div>
    )
}

export {
    Dropzone
}