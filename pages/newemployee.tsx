import SettingUpUser from "@/components/settingUpUser";
import DefaultLayout from "@/layouts/default";
import {Image} from "@nextui-org/image";
import {User} from "@nextui-org/user";
import { useAuth } from "react-oidc-context";

export default function IndexPage() {

    const {user} = useAuth();
    
    return (
        <DefaultLayout>
            <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 w-full">
                <div className="flex flex-col md:flex-row text-start items-start justify-start w-full lg:w-1/2">
                    <Image src="https://source.unsplash.com/random/100x100" alt="Salim" width={100} height={100} className="rounded-full m-2" />
                    <div className="flex flex-col items-start justify-start gap-0 m-0 ml-4">
                        <h1 className="text-foreground text-2xl font-bold">Welcome Salim</h1>
                        <p className="text-foreground text-small">Complete Setting your profile</p>
                    </div>
                </div>
                <div className="flex flex-col items-end justify-end gap-0 m-0 ml-4">
                        <SettingUpUser user={user}/>
                </div>
            </section>
        </DefaultLayout>
    );
}