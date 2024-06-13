"use client";
import { useState } from "react";
import { Form, Formik } from "formik";

import { MintForm, validationSchema } from "@/form/MintForm";

import Input from "@/components/widgets/Input";
import FileInput from "@/components/widgets/FileInput";
import CreateTokenBuyModal from "@/components/CreateTokenBuyModal";

export default function CreatePage() {
  const [form, setForm] = useState<MintForm | null>(null);

  return (
    <>
      <main className="flex flex-col md:self-center lt-md:px-4">
        <Formik
          validationSchema={validationSchema}
          initialValues={{
            name: "",
            symbol: "",
            image: "" as unknown as File,
            description: "",
            website: "",
            telegram: "",
            twitter: "",
          }}
          onSubmit={(values) => {
            console.log("hey fuckkkk")
            setForm(values);
          }}
        >
          {({ errors, isSubmitting }) => (
            <Form className="flex flex-col space-y-8">
              {JSON.stringify(form)}
              <div className="flex flex-col space-y-2">
                <Input
                  name="name"
                  label="Name"
                  placeholder="Token Name"
                />
                <Input
                  name="symbol"
                  label="Symbol"
                  placeholder="Token Ticker"
                />
                <FileInput
                  name="image"
                  label="Image"
                  placeholder="Image"
                  type="file"
                  accept="image/*"
                />
                <Input
                  name="description"
                  label="Description"
                  placeholder="Token Description"
                  as="textarea"
                />
                <Input
                  name="website"
                  label="Website(Optional)"
                  placeholder="Website link"
                />
                <Input
                  name="telegram"
                  label="Telegram(Optional)"
                  placeholder="Telegram link"
                />
                <Input
                  name="twitter"
                  label="Twitter(Optional)"
                  placeholder="Twitter link"
                />
              </div>
              <button
                disabled={isSubmitting}
                type="submit"
                className="btn btn-primary"
              >
                Create Token
              </button>
            </Form>
          )}
        </Formik>
      </main>
      {form && (
        <CreateTokenBuyModal
          form={form}
          visible={Boolean(form)}
          setVisible={() => setForm(null)}
        />
      )}
    </>
  );
}
