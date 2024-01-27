import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import RenderActiveLeaves from "@/components/active-leaves";
import RenderArchivedLeaves from "@/components/archived-leaves";
import {Button} from "@nextui-org/react";
import {Link} from "@nextui-org/link";
export default function IndexPage() {
    return (
        <DefaultLayout>
            {/*<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">*/}
            {/*    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">*/}
            {/*        <Link href="/leave/apply">*/}
            {/*            <Button color="primary">Apply</Button>*/}
            {/*        </Link>*/}
            {/*    </div>*/}
            {/*    <div className="mt-8">*/}

            {/*    </div>*/}
            {/*</section>*/}
            <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
                <div className="inline-block max-w-lg text-center justify-center">
                    <h1 className={title({color: "violet"})}>Active &nbsp;</h1>
                    <h1 className={title()}>Leaves&nbsp;</h1>
                    <br/>
                    <h4 className={subtitle({class: "mt-4"})}>
                        All your Pending or Approved Leaves will appear here.
                    </h4>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-8">
                    {RenderActiveLeaves()}
                </div>
                <div className="mt-8">

                </div>
            </section>
            <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
                <div className="inline-block max-w-lg text-center justify-center">
                    <h1 className={title({color: "violet"})}>Archived &nbsp;</h1>
                    <h1 className={title()}>Leaves&nbsp;</h1>
                    <br/>
                    <h4 className={subtitle({class: "mt-4"})}>
                        All your Pending or Approved Leaves will appear here.
                    </h4>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-8">
                    {RenderArchivedLeaves()}
                </div>
                <div className="mt-8">

                </div>
            </section>
        </DefaultLayout>
    );
}
