import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import LeaveApplyForm from "@/components/leave-apply-form";

export default function IndexPage() {
    return (
        <DefaultLayout>
            <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
                <div className="inline-block max-w-lg text-center justify-center">
                    <h1 className={title({color: "violet"})}>Apply &nbsp;</h1>
                    <h1 className={title()}>Leave&nbsp;</h1>
                    {/*<br/>*/}
                    {/*<h4 className={subtitle({class: "mt-4"})}>*/}
                    {/*    All your Pending or Approved Leaves will appear here.*/}
                    {/*</h4>*/}
                </div>
                <div className="flex flex-col gap-4 mt-8">
                    <LeaveApplyForm/>
                </div>
                <div className="mt-8">


                </div>
            </section>
        </DefaultLayout>
    );
}
