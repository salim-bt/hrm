import {z} from "zod";
import {SubmitHandler, useForm} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {Select, SelectSection, SelectItem} from "@nextui-org/select";
import {Popover, PopoverContent, PopoverTrigger} from "@nextui-org/popover";
import {format} from "date-fns";
import {CalendarIcon} from "lucide-react";
import {Calendar} from "@/components/ui/calendar";
import React from "react";
import {Textarea} from "@nextui-org/input";
import {Input,Button} from "@nextui-org/react";
import {Dropzone} from "@/components/dropzone";

const leaveApplyFormSchema = z.object({
    leaveType: z.string(),
    date: z.object(
        {
            from: z.date(),
            to: z.date().optional()
        }
    ),
    reason: z.string(),
    attachment: z.array(z.string()),
    sendToUserId: z.string(),
});

const LeaveApplyForm = () => {
    const [fileUrls, setFileUrls] = React.useState<string[]>([]);
    const form = useForm<z.infer<typeof leaveApplyFormSchema>>({
        mode: "onBlur",
        resolver: zodResolver(leaveApplyFormSchema),
        defaultValues: {
            leaveType: "Casual",
            date: {
                from: new Date(),
                to: new Date(),
            },
            attachment: [],
            sendToUserId: "",
        },
    });

    const onSubmit:SubmitHandler<z.infer<typeof leaveApplyFormSchema>> = (data) => {
        console.log(data);
    }

    return (
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 gap-6">
                <FormField
                    name={"leaveType"}
                    render={({field})=>(
                        <FormItem>
                            <FormLabel htmlFor={field.name}>Leave Type</FormLabel>
                            <FormControl>
                                <Select
                                    {...field}
                                    id="leaveType"
                                    aria-label={"leaveType"}
                                    placeholder={"Select Leave Type"}
                                    >
                                    <SelectSection>
                                        {["Casual", "Sick", "Maternity", "Paternity", "Bereavement", "Unpaid", "Study", "Other"].map((item, index) => (
                                            <SelectItem key={item} value={item}>
                                                {item}
                                            </SelectItem>
                                        ))}
                                    </SelectSection>
                                </Select>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    name={"date"}
                    render={({field})=>(
                        <FormItem>
                            <FormItem>
                                <FormLabel>Date of birth</FormLabel>
                                <Popover>
                                    <PopoverTrigger>
                                        <FormControl>
                                            <Button
                                                variant="shadow"
                                                className="pl-3 text-left font-normal w-full h-24 bg-gray-100"
                                            >
                                                {field.value.from ? (
                                                    <div
                                                        className="text-md text-center"
                                                    >
                                                        <div>
                                                            {format(field.value.from, "PPP")}
                                                        </div>
                                                        to
                                                        <div>
                                                            {format(field.value.to ?? new Date(), "PPP")}
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <span>Pick a date</span>
                                                )}
                                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50"/>
                                            </Button>
                                        </FormControl>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0">
                                        <Calendar
                                            mode="range"
                                            selected={field.value}
                                            onSelect={field.onChange}
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>
                                <FormMessage/>
                            </FormItem>

                        </FormItem>
                    )}
                />
                <FormField
                    name={"reason"}
                    render={({field})=>(
                        <FormItem>
                            <FormLabel htmlFor={field.name}>Reason</FormLabel>
                            <FormControl>
                                <Textarea
                                    {...field}
                                    id="reason"
                                    name="reason"
                                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
                                />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    name={"attachment"}
                    render={({field})=>(
                        <FormItem>
                            <FormLabel htmlFor={field.name}>Attachment</FormLabel>
                            <FormControl>
                                {/*<Input*/}
                                {/*    onChange={(e) => {*/}

                                {/*    }}*/}
                                {/*    id="attachment"*/}
                                {/*    name="attachment"*/}
                                {/*    type="file"*/}
                                {/*    multiple*/}
                                {/*    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"*/}
                                {/*/>*/}
                                <Dropzone
                                    fileUrls={fileUrls}
                                    setFileUrls={setFileUrls}
                                />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    name={"sendToUserId"}
                    render={({field})=>(
                        <FormItem>
                            <FormLabel htmlFor={field.name}>Semd To</FormLabel>
                            <FormControl>
                                <Select
                                    {...field}
                                    id="sendToUserId"
                                    aria-label={"sendToUserId"}
                                >
                                    <SelectSection>
                                        {[
                                            "CEO",
                                            "HR",
                                            "HOD"
                                        ].map((item, index) => (
                                            <SelectItem key={item} value={item}>
                                                {item}
                                            </SelectItem>
                                        ))}
                                    </SelectSection>
                                </Select>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
            </div>
            <div className="mt-6">
                <Button
                    type="submit"
                    color={"primary"}
                    className="w-full"
                >
                    Submit
                </Button>
            </div>
        </form>
        </Form>
    );
}

export default LeaveApplyForm;