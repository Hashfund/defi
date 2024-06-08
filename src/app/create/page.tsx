"use client";
import { Form, Formik } from "formik";
import Input from "@/components/widgets/Input";

export default function CreatePage() {
  return (
    <main className="flex flex-col md:self-center lt-md:px-4">
      <Formik
        initialValues={{
          name: "",
          ticker: "",
          description: "",
        }}
        onSubmit={() => {}}
      >
        <Form className="flex flex-col space-y-8">
          <div className="flex flex-col space-y-2">
            <Input
              name="name"
              label="Name"
              placeholder="Token Name"
            />
            <Input
              name="ticker"
              label="Ticker"
              placeholder="Token Ticker"
            />
            <Input
              name="description"
              label="Description"
              placeholder="Token Description"
              as="textarea"
            />
          </div>
          <button className="btn btn-primary">Create Token</button>
        </Form>
      </Formik>
    </main>
  );
}
