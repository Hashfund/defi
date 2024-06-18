import { Form, Formik } from "formik";
import { TabPanel } from "@headlessui/react";
import PriceInput from "./widgets/PriceInput";
import {
  createInitialDepositSchema,
  MintInitialBuyAmountForm,
} from "@/form/MintForm";
import useBalance from "@/composables/useBalance";

type CreateFormDepositProps = {
  ticker: string;
  form: MintInitialBuyAmountForm;
  onSubmit: (value: MintInitialBuyAmountForm) => Promise<void>;
};

export default function CreateFormDeposit({
  ticker,
  form,
  onSubmit,
}: CreateFormDepositProps) {
  const { solBalance } = useBalance();
  const balance = solBalance / 1_000_000_000;
  const validationSchema = createInitialDepositSchema(balance);

  return (
    <TabPanel className="flex flex-1 flex-col">
      <div>
        <h1 className="text-xl font-bold">Provide Collateral</h1>
        <p className="text-sm text-gray-200">
          Buy a little token and burn to make price fair
        </p>
      </div>
      <Formik
        initialValues={form}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          onSubmit(values).finally(() => setSubmitting(false));
        }}
      >
        {({ values, isSubmitting, setFieldValue }) => (
          <Form className="flex flex-1 flex-col space-y-4">
            <div className="flex-1">
              <PriceInput
                ticker={"SOL"}
                icon="/sol.png"
                balance={balance}
                value={values.initialBuyAmount}
                onChange={(value) => setFieldValue("initialBuyAmount", value)}
              />
            </div>
            <button
              disabled={isSubmitting}
              className="btn btn-primary"
            >
              Create Token
            </button>
          </Form>
        )}
      </Formik>
    </TabPanel>
  );
}
