import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import RenderLeaveStatus from "@/components/leave-status";
import {Dropzone} from "@/components/dropzone";
import React from "react";
import {api} from "@/lib/trpc";
import { useAuth } from "react-oidc-context";
export default function IndexPage() {
	const dataQuery = api.leave.getLeave.useQuery({
		token: useAuth().user?.access_token,
	});
	const data = dataQuery.data;
	const {user} = useAuth();

	// fetch("/api/hello",{
	// 	method: "POST",
	// 	body: JSON.stringify({
	// 		token: user?.access_token,
	// 	}),
	// 	headers: {
	// 		"Content-Type": "application/json",
	// 	},
	// }).then((res) => res.json());

	return (
		<DefaultLayout>
			<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
				<div className="inline-block max-w-lg text-center justify-center">
					<h1 className={title()}>Welcome&nbsp;</h1>
					<h1 className={title({ color: "violet" })}>{user?.profile.name?.split(" ")[0]} !&nbsp;</h1>
					<br />
					<h4 className={subtitle({ class: "mt-4" })}>
						Hava a fantastic day!
					</h4>
				</div>
				<div className="grid grid-cols-2 gap-4 mt-8">
					{RenderLeaveStatus()}
				</div>
				<div className="mt-8">
				</div>
			</section>
		</DefaultLayout>
	);
}
