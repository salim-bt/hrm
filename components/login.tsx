import React from 'react';
import {
  Card,
  Spacer,
  Button,
  Input,
  Checkbox,
  CardBody,
  CardHeader,
} from '@nextui-org/react';
import { useAuth } from 'react-oidc-context';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, type SubmitHandler } from 'react-hook-form';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Logo, NextUILogo } from './icons';
import { title } from './primitives';
const schema = z.object({
    username: z.string().min(3),
    password: z.string().min(3),
});

export default function Login() {
    const {
        signinResourceOwnerCredentials
    } = useAuth();

    const form = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
        defaultValues: {
            username: "",
            password: ""
        },
    });

    const onSubmit:SubmitHandler<z.infer<typeof schema>> = (data) => {
        console.log(data);
        signinResourceOwnerCredentials(data);
    }

  return (
    <div>
        <Card
            isBlurred
            className="w-96 mx-auto"
        >
            <CardHeader
                className='flex flex-col justify-center items-center'
                >
                <Logo className="w-24 h-24"/>
                <h1 className={title({ class: "mt-4 text-center",size:"sm",color:"violet" })}>
                    New Edge
                </h1>
                </CardHeader>
            <CardBody>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <FormField
                            name={"username"}
                            render={({field})=>(
                                <FormItem>
                                    <FormLabel htmlFor={field.name}>Username</FormLabel>
                                    <Input
                                        {...field}
                                        id={field.name}
                                        placeholder="Username"
                                        width="100%"
                                    />
                                    <FormMessage>{form.formState.errors.username?.message}</FormMessage>
                                </FormItem>
                            )}
                        />
                        <FormField
                            name={"password"}
                            render={({field})=>(
                                <FormItem>
                                    <FormLabel htmlFor={field.name}>Password</FormLabel>
                                    <Input
                                        {...field}
                                        id={field.name}
                                        placeholder="Password"
                                        width="100%"
                                    />
                                    <FormMessage>{form.formState.errors.password?.message}</FormMessage>
                                </FormItem>
                            )}
                        />
                        <Spacer y={5}/>
                        <Button
                            type="submit"
                            size="lg"
                            color="primary"
                            variant="solid"
                            className="w-full"
                        >
                            Login
                        </Button>
                    </form>
                </Form>
            </CardBody>
        </Card>
    </div>
  );
}