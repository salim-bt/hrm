import DefaultLayout from "@/layouts/default";
import {Image} from "@nextui-org/image";
import {User} from "@nextui-org/user";

export default function IndexPage() {
    const InfoSection = ({ title, data }:{
        title: string | null;
        data: { label: string; value: string | JSX.Element }[];
    }) => (
        <>
            {title && <h4 className="text-foreground font-bold text-small mt-8">{title}</h4>}
            <div className="flex gap-4 mt-8 justify-start items-start w-full lg:w-1/2">
                <div className="flex flex-col items-start justify-start gap-0 w-1/3 lg:w-1/5">
                    {data.map((item, index) => (
                        <p key={index} className="text-foreground/50 text-small m-2">{item.label}</p>
                    ))}
                </div>
                <div className="flex flex-col items-start justify-start gap-0 w-2/3 lg:w-5/6">
                    {data.map((item, index) => (
                        <p key={index} className="text-foreground text-small m-2">{item.value}</p>
                    ))}
                </div>
            </div>
        </>
    );

    const infoData = [
        {
            title: null,
            data: [
                {
                    label: 'Reports to',
                    value: <User name="Jane Doe" description="Product Designer"
                                 avatarProps={{src: "https://i.pravatar.cc/150?u=a04258114e29026702d"}}/>
                },
            ],
        },
        {
            title: null,
            data: [
                {
                    label: 'Birthday',
                    value: new Date().toLocaleDateString("en-US", {year: "numeric", month: "long", day: "numeric"})
                },
                {label: 'Gender', value: 'Male'},
                {label: 'Email', value: 'test@mail.com'},
                {label: 'Phone', value: '1234567890'},
                {label: 'Address', value: 'Kathmandu, Nepal' },
            ],
        },
        {
            title: 'Personal Information',
            data: [
                { label: 'CID / Passport', value: '1234567890' },
                { label: 'Citizenship', value: 'Bhutanese' },
                { label: 'Nationality', value: 'Bhutanese' },
                { label: 'Religion', value: 'Christian' },
                { label: 'Marital Status', value: 'Married (Spouse: Jane Doe) (Children: 2)' },
                { label: 'Blood Group', value: 'A+' },
            ],
        },
        {
            title: 'Emergency Contact',
            data: [
                { label: 'Name', value: 'John Doe' },
                { label: 'Relationship', value: 'Father' },
                { label: 'Phone', value: '1234567890' },
                { label: 'Email', value: 'johndoe@mail.com' },
                { label: 'Address', value: 'Kathmandu, Nepal' },
            ],
        }
    ];

    return (
        <DefaultLayout>
            <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 w-full">
                <div className="flex flex-col md:flex-row text-start items-start justify-start w-full lg:w-1/2">
                    <Image src="https://source.unsplash.com/random/100x100" alt="Salim" width={100} height={100} className="rounded-full m-2" />
                    <div className="flex flex-col items-start justify-start gap-0 m-0 ml-4">
                        <p className="text-foreground font-bold text-small mt-2">Salim Pradhan</p>
                        <p className="text-foreground/50 italic text-small mt-2">UX Designer</p>
                        <p className="text-foreground/50 text-small mt-2">Software Development Department</p>
                        <p className="text-foreground/50 text-small mt-2">Date of Joining: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
                    </div>
                </div>
                {infoData.map((section, index) => <InfoSection key={index} title={section.title} data={section.data} />)}
            </section>
        </DefaultLayout>
    );
}