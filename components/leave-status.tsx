import {
    LeaveDetails,
    leaveDetails,
} from "@/_mock/dashboard_card_data";
import {Card, CardBody} from "@nextui-org/react";
import {Image} from "@nextui-org/image";
import {Progress} from "@nextui-org/progress";

export default function RenderLeaveStatus(){
    return leaveDetails.map((leave:LeaveDetails, index) => {
        return (
            <Card key={index} shadow={"md"}>
                <CardBody>
                    <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
                        <div className="relative col-span-6 md:col-span-4">
                            <Image
                                src="https://source.unsplash.com/random/100x100"
                                alt={leave.type}
                                width={180}
                                height={180}
                            />
                         </div>
                        <div className="flex flex-col col-span-6 md:col-span-8">
                            <div className="flex justify-between items-start">
                                <div className="flex flex-col gap-0">
                                    <h3 className="text-large font-semibold text-foreground/90">{leave.type}</h3>
                                </div>
                            </div>
                            <div className="flex flex-col w-full items-start justify-start mt-3 gap-1">
                                <p className="text-small text-foreground/50">Description</p>
                                <p className="text-small">{leave.description}</p>
                            </div>
                            <div className="flex flex-col w-full items-center justify-center mt-3 gap-1">
                                <Progress
                                    value={leave.taken/leave.allowed*100}
                                    size="lg"
                                />
                                <div className="flex justify-center w-full">
                                    <p className="text-small mr-2">{
                                        leave.taken
                                    }</p>
                                    <span
                                        className="text-small text-foreground/50 mr-2">
                                        of
                                    </span>
                                    <p className="text-small">{
                                        leave.allowed
                                    }</p>
                                </div>
                                <span className="text-small text-foreground/50">
                                    days taken
                                </span>
                            </div>

                            <div className="flex w-full items-center justify-center">

                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>
        );
    });
}