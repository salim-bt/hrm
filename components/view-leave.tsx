import {Image} from "@nextui-org/image";
import {Card, CardBody} from "@nextui-org/react";

export default function ViewLeave() {
    return (
        <Card
            className="w-full lg:w-1/2"
            >
            <CardBody className="flex flex-col gap-4 w-full lg:w-1/2">
                <div className="flex gap-4 w-full items-start justify-start">
                    <Image
                        src="https://avatars.githubusercontent.com/u/21313211?v=4"
                        width={100}
                        height={100}
                        className="rounded-full"
                    />
                    <div className="flex flex-col gap-1">
                        <h4 className="font-semibold">Salim Pradhan</h4>
                        <h4 className="font-medium italic">UX Developer</h4>
                        <h4 className="font-medium italic font-sans">Software Development</h4>
                    </div>
                </div>
                <div className="flex flex-col gap-1 w-full items-start justify-start">
                    <h4 className="font-semibold">Leave Type</h4>
                    <h4 className="font-medium italic">Sick Leave</h4>
                </div>
                <div className="flex flex-col gap-1 w-full items-start justify-start">
                    <h4 className="font-semibold">Leave Duration</h4>
                    <h4 className="font-medium italic">1 Day</h4>
                </div>
                <div className="flex flex-col gap-1 w-full items-start justify-start">
                    <h4 className="font-semibold">Leave Start Date</h4>
                    <h4 className="font-medium italic">14th May, 2021</h4>
                </div>
                <div className="flex flex-col gap-1 w-full items-start justify-start">
                    <h4 className="font-semibold">Leave End Date</h4>
                    <h4 className="font-medium italic">14th May, 2021</h4>
                </div>
                <div className="flex flex-col gap-1 w-full items-start justify-start">
                    <h4 className="font-semibold">Leave Reason</h4>
                    <h4 className="font-medium italic">I am not feeling well</h4>
                </div>
                <div className="flex flex-col gap-1 w-full items-start justify-start">
                    <h4 className="font-semibold">Leave Status</h4>
                    <h4 className="font-medium italic">Pending</h4>
                </div>
                <div className="flex flex-col gap-1 w-full items-start justify-start">
                    <h4 className="font-semibold">Leave Applied On</h4>
                    <h4 className="font-medium italic">12th May, 2021</h4>
                </div>
                <div className="flex flex-col gap-1 w-full items-start justify-start">
                    <h4 className="font-semibold">Leave Approved On</h4>
                    <h4 className="font-medium italic">13th May, 2021</h4>
                </div>
            </CardBody>
        </Card>
    )
}