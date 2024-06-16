import { ErrorMessage, Form, Formik } from "formik";
import { TabPanel } from "@headlessui/react";

import PriceInput from "./widgets/PriceInput";
import {
  MintMaximumMarketCapForm,
  validateMaximumMarketCapSchema,
} from "@/form/MintForm";

type CreateFormMarketcapProps = {
  ticker: string;
  form: MintMaximumMarketCapForm;
  onSubmit: (value: MintMaximumMarketCapForm) => void;
};

export default function CreateFormMarketCap({
  ticker,
  form,
  onSubmit,
}: CreateFormMarketcapProps) {
  return (
    <TabPanel className="flex-1 flex flex-col space-y-8">
      <div>
        <h1 className="text-xl">Bounding Curve Setting</h1>
        <p className="text-sm text-stone-300">
          Set how much market cap to stop trading coin and migrate to raydium?
        </p>
      </div>
      <Formik
        initialValues={form}
        validationSchema={validateMaximumMarketCapSchema}
        onSubmit={(values, { setSubmitting }) => {
          onSubmit(values);
          setSubmitting(false);
        }}
      >
        {({ errors, values, isSubmitting, setFieldValue }) => (
          <Form className="flex-1 flex flex-col space-y-8">
            {JSON.stringify(errors)}
            <div className="flex-1 flex flex-col space-y-2">
              <PriceInput
                balance={0}
                icon="/sol.png"
                ticker={ticker}
                value={values.maximumMarketCap}
                onChange={(value) => setFieldValue("maximumMarketCap", value)}
              />
              <div className="text-xs text-red">
                <ErrorMessage name="maximumMarketCap" />
              </div>
            </div>
            <button
              disabled={isSubmitting}
              className="btn btn-primary"
            >
              Continue
            </button>
          </Form>
        )}
      </Formik>
    </TabPanel>
  );
}
