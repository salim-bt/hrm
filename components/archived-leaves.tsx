import {
    leaves,
    type Leave
} from '@/_mock/leave-active-'

import {Button, Card, CardBody} from "@nextui-org/react";
import {Image} from "@nextui-org/image";
import {ButtonGroup} from "@nextui-org/button";
import {Link} from "@nextui-org/link";

export default function RenderArchivedLeaves(){
    return leaves.map((leave:Leave, index) => {
        if (leave.status === 'PENDING' || leave.status === 'APPROVED'){
            return null
        }
        return (
            <Card key={index} shadow={"md"}>
                <CardBody>
                    <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
                        <div className="relative col-span-6 md:col-span-4">
                            <center>
                                <Image
                                    src="https://source.unsplash.com/random/100x100"
                                    alt={leave.type}
                                    width={180}
                                    height={180}
                                />
                            </center>
                        </div>
                        <div className="flex flex-col col-span-6 md:col-span-8">
                            <div className="flex justify-between items-start">
                                <div className="flex flex-col gap-0">
                                    <h3 className="text-large font-semibold text-foreground/90">{leave.type}</h3>
                                </div>
                            </div>
                            <div className="flex flex-col w-full items-start justify-start mt-3 gap-1">
                                <div>
                                    <p className="text-small text-foreground/50">Status</p>
                                    <p className="text-small">{leave.status}</p>
                                </div>
                                <span className="text-small text-foreground/50">Duration</span>
                                <div className="flex w-full">
                                    <p className="text-small mr-2">{
                                        new Date(leave.startDate).toDateString()
                                    }</p>
                                    <span
                                        className="text-small text-foreground/50 mr-2">
                                        to
                                    </span>
                                    <p className="text-small">{
                                        new Date(leave.endDate).toDateString()
                                    }</p>
                                </div>
                            </div>

                            <div className="flex w-full items-start justify-start my-2">
                                <ButtonGroup>
                                    <Button>
                                        <Link
                                            color={"primary"}
                                            href={`/leave/view/${leave.id}`}
                                        >
                                            View
                                        </Link>
                                    </Button>
                                </ButtonGroup>
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>
        );
    });
}

