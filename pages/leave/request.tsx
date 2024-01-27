import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import RenderActiveLeaves from "@/components/active-leaves";
import RenderArchivedLeaves from "@/components/archived-leaves";
import RenderRequestLeaves from "@/components/request-leaves";
import RenderApprovedLeaves from "@/components/approved-leaves";
export default function IndexPage() {
    return (
        <DefaultLayout>
            <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
                <div className="inline-block max-w-lg text-center justify-center">
                    <h1 className={title()}>Leave&nbsp;</h1>
                    <h1 className={title({color: "violet"})}>Requests &nbsp;</h1>
                    <br/>
                    <h4 className={subtitle({class: "mt-4"})}>
                        All your Pending or Approved Leaves will appear here.
                    </h4>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
                    {RenderRequestLeaves()}
                </div>
                <div className="mt-8">

                </div>
            </section>
            <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
                <div className="inline-block max-w-lg text-center justify-center">
                    <h1 className={title({color: "violet"})}>Approved by you &nbsp;</h1>
                    <br/>
                    <h4 className={subtitle({class: "mt-4"})}>
                        All your Pending or Approved Leaves will appear here.
                    </h4>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-8">
                    {RenderApprovedLeaves()}
                </div>
                <div className="mt-8">

                </div>
            </section>
        </DefaultLayout>
    );
}
