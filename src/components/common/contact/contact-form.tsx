/* eslint-disable react/no-unescaped-entities */
"use client";
import { Input, Modal, message } from "antd";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineEmail, MdArrowRightAlt } from "react-icons/md";
import Button from "~/components/ui/button";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useState } from "react";

type Inputs = {
  name: string;
  email: string;
  message: string;
};

const schema = yup.object({
  name: yup.string().required(),
  email: yup.string().required().email(),
  message: yup.string().required(),
});

export default function ContactForm() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [messageApi, contextHolder] = message.useMessage();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });

  const handleError = () => {
    messageApi.open({
      type: "error",
      content: "Something went wrong! Please try again",
    });
  };

  const onSubmit: SubmitHandler<Inputs> = async (value: any) => {
    if (isSubmitting) {
      return;
    }
    try {
      const resp = await axios.post(`/api/email`, value);
      if (resp.status && resp.status === 200) {
        setIsModalOpen(true);
        reset();
      } else {
        handleError();
      }
    } catch (error) {
      handleError();
    }
  };

  return (
    <>
      {contextHolder}
      <Modal
        title="Thank you for reaching out"
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
        footer={
          <div className="flex justify-end">
            <Button
              onClick={() => setIsModalOpen(false)}
              className="!w-[60px] !h-[42px] !p-0 !rounded-[10px] flex 
            items-center justify-center"
            >
              OK
            </Button>
          </div>
        }
      >
        <div>
          <p className="text-base">I will respond to you soon.</p>
        </div>
      </Modal>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-y-4"
        action=""
      >
        <div className="flex flex-col gap-y-1">
          <Controller
            name="name"
            control={control}
            render={({ field: { value, onChange } }) => (
              <Input
                value={value}
                onChange={onChange}
                placeholder="Your name"
                addonAfter={<FaRegUser />}
              />
            )}
          />
          {errors.name && (
            <span className="text-red-800 text-[12px] italic">
              {errors.name.message}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-y-1">
          <Controller
            name="email"
            control={control}
            render={({ field: { value, onChange } }) => (
              <Input
                value={value}
                onChange={onChange}
                placeholder="Your email"
                addonAfter={<MdOutlineEmail />}
              />
            )}
          />
          {errors.email && (
            <span className="text-red-800 text-[12px] italic">
              {errors.email.message}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-y-1">
          <Controller
            name="message"
            control={control}
            render={({ field: { value, onChange } }) => (
              <Input.TextArea
                value={value}
                onChange={onChange}
                autoSize={{ minRows: 3 }}
                placeholder="Type your message here"
              />
            )}
          />
          {errors.message && (
            <span className="text-red-800 text-[12px] italic">
              {errors.message.message}
            </span>
          )}
        </div>
        <div className="flex items-center justify-end">
          <Button
            disabled={isSubmitting}
            type="submit"
            className="w-fit"
            endIcon={
              <span className="text-[18px]">
                <MdArrowRightAlt />
              </span>
            }
          >
            Let's talk
          </Button>
        </div>
      </form>
    </>
  );
}
