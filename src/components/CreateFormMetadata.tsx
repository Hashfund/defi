import { useState } from "react";
import { Formik, Form } from "formik";
import { TabPanel } from "@headlessui/react";

import { MintForm, validationSchema } from "@/form/MintForm";

import Input from "./widgets/Input";
import FileInput from "./widgets/FileInput";
import CreateTokenBuyModal from "./CreateTokenBuyModal";

export default function CreateFormMetadata() {
  const [form, setForm] = useState<MintForm | null>(null);

  return (
    <TabPanel>
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
        onSubmit={setForm}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-1 flex-col space-y-8">
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
      {form && (
        <CreateTokenBuyModal
          form={form}
          visible={Boolean(form)}
          setVisible={() => setForm(null)}
        />
      )}
    </TabPanel>
  );
}
