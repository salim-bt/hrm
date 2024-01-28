import React, { useEffect } from "react";
import { api } from "@/lib/trpc";
import { useAuth } from "react-oidc-context";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormLabel,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Input,
  Button,
  Select,
  SelectItem,
  SelectSection,
} from "@nextui-org/react";

const employeeSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  role: z.string(),
  dob: z.string(),
  gender: z.string(),
  supervisorId: z.string(),
  department: z.string(),
  phoneNumber: z.string(),
  address: z.string(),
  cidOrPassport: z.string(),
  citizenship: z.string(),
  nationality: z.string(),
  religion: z.string(),
  maritalStatus: z.string(),
  bloodGroup: z.string(),
  emergencyContactName: z.string(),
  emergencyContactNumber: z.string(),
  emergencyContactEmail: z.string(),
  emergencyContactRelation: z.string(),
  emergencyContactAddress: z.string(),
  joinedDate: z.string(),
});

export default function SettingUpUser({ user }: { user: any }) {
  const form = useForm({
    resolver: zodResolver(employeeSchema),
    defaultValues: {
      name: user?.profile.name,
      email: user?.profile.email,
      id: user?.profile.sub,
      supervisorId: "",
      role: "",
      dob: "",
      gender: "",
      department: "",
      phoneNumber: "",
      address: "",
      cidOrPassport: "",
      citizenship: "",
      nationality: "",
      religion: "",
      maritalStatus: "",
      bloodGroup: "",
      emergencyContactName: "",
      emergencyContactNumber: "",
      emergencyContactEmail: "",
      emergencyContactRelation: "",
      emergencyContactAddress: "",
      joinedDate: "",
    }
  });

  const { mutateAsync } = api.user.createEmployee.useMutation();

  const onSubmit: SubmitHandler<z.infer<typeof employeeSchema>> =async (
    data
  ) => {
    console.log(data);
    data.joinedDate = new Date(data.joinedDate);
    data.dob = new Date(data.dob);
    await mutateAsync({
      employee: data,
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor={field.name}>Name</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  id={field.name}
                  value={user?.profile.name}
                  placeholder="Name"
                  size="lg"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor={field.name}>Email</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  id={field.name}
                  value={user?.profile.email}
                  placeholder="Email"
                  size="lg"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="dob"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor={field.name}>Date of Birth</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  id={field.name}
                  value={field.value}
                  type="date"
                  placeholder="Date of Birth"
                  size="lg"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="gender"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Gender</FormLabel>
              <FormControl>
                <Select
                  {...field}
                  id="leaveType"
                  aria-label={"leaveType"}
                  placeholder={"Select Leave Type"}
                >
                  <SelectSection>
                    {["MALE", "FEMALE"].map((item, index) => (
                      <SelectItem key={item} value={item}>
                        {item}
                      </SelectItem>
                    ))}
                  </SelectSection>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Role</FormLabel>
              <FormControl>
                <Select
                  onChange={field.onChange}
                  id="leaveType"
                  aria-label={"leaveType"}
                  placeholder={"Select Leave Type"}
                  multiple
                >
                  <SelectSection>
                    {["Software Developer"].map((item, index) => (
                      <SelectItem key={item} value={item}>
                        {item}
                      </SelectItem>
                    ))}
                  </SelectSection>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor={field.name}>Phone Number</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  id={field.name}
                  placeholder="Phone Number"
                  size="lg"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor={field.name}>Address</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  id={field.name}
                  placeholder="Address"
                  size="lg"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="cidOrPassport"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor={field.name}>CID or Passport</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  id={field.name}
                  placeholder="CID or Passport"
                  size="lg"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="citizenship"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor={field.name}>Citenzenship</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  id={field.name}
                  placeholder="Citenzenship"
                  size="lg"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="bloodGroup"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Blood Group</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  id={field.name}
                  placeholder="Blood Group"
                  size="lg"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="religion"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Religion</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  id={field.name}
                  placeholder="Religion"
                  size="lg"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="maritalStatus"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Marital Status</FormLabel>
              <FormControl>
                <Select
                  {...field}
                  aria-label={"leaveType"}
                  placeholder={"Select Leave Type"}
                >
                  <SelectSection>
                    {["SINGLE", "MARRIED"].map((item, index) => (
                      <SelectItem key={item} value={item}>
                        {item}
                      </SelectItem>
                    ))}
                  </SelectSection>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="emergencyContactName"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor={field.name}>Emergency Contact Name</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  id={field.name}
                  placeholder="Emergency Contact Name"
                  size="lg"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="emergencyContactNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor={field.name}>
                Emergency Contact Number
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  id={field.name}
                  placeholder="Emergency Contact Number"
                  size="lg"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="emergencyContactEmail"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor={field.name}>
                Emergency Contact Email
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  id={field.name}
                  placeholder="Emergency Contact Email"
                  size="lg"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="emergencyContactRelation"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor={field.name}>
                Emergency Contact Relation
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  id={field.name}
                  placeholder="Emergency Contact Relation"
                  size="lg"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="emergencyContactAddress"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor={field.name}>
                Emergency Contact Address
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  id={field.name}
                  placeholder="Emergency Contact Address"
                  size="lg"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="joinedDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor={field.name}>Joined Date</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  id={field.name}
                  type="date"
                  placeholder="Joined Date"
                  size="lg"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="department"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Department</FormLabel>
              <FormControl>
                <Select
                  {...field}
                  id="leaveType"
                  aria-label={"leaveType"}
                  placeholder={"Select Leave Type"}
                >
                  <SelectSection>
                    {[
                      "Software Development",
                      "Network and Infrastructure",
                    ].map((item, index) => (
                      <SelectItem key={item} value={item}>
                        {item}
                      </SelectItem>
                    ))}
                  </SelectSection>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="supervisorId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Supervisor</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  id={field.name}
                  placeholder="Supervisor"
                  size="lg"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      <Input type="submit" value="Submit" />
      </form>
    </Form>
  );
}
