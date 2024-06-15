"use client";
import { useState } from "react";
import { Form, Formik } from "formik";
import { TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

import { MintForm, validationSchema } from "@/form/MintForm";

import Input from "@/components/widgets/Input";
import FileInput from "@/components/widgets/FileInput";
import CreateTokenBuyModal from "@/components/CreateTokenBuyModal";
import StepButton from "@/components/widgets/StepButton";
import CreateFormMetadata from "@/components/CreateFormMetadata";

export default function CreatePage() {

  return (
    <>
      <TabGroup className="flex flex-1 flex-col lg:flex-row md:justify-center lt-md:px-4 md:px-8 lg:space-x-4 lt-md:space-y-8">
        <TabList className="flex lg:w-sm lg:flex-col lg:justify-center lt-lg:space-x-4">
          <StepButton
            position="1"
            title="Token Metdata"
          />
          <StepButton
            position="2"
            title="Set maximum market cap & range"
          />
          <StepButton
            position="3"
            title="Enter deposit amount"
            hideLine
          />
        </TabList>
        <TabPanels className="h-full max-w-lg md:w-lg">
          <CreateFormMetadata />
          <TabPanel>1</TabPanel>
          <TabPanel>2</TabPanel>
        </TabPanels>
      </TabGroup>
     
    </>
  );
}
