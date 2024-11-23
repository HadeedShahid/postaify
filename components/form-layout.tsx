// components/layouts/FormLayout.tsx
"use client";

import React, { ReactNode, useState } from "react";
import { ButtonProps } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Layout from "./ui/layout";

interface FormLayoutProps {
  children: ReactNode | (({ onSuccess, onError }: FormHandlers) => ReactNode);
  title?: string;
  description?: string;
  triggerContent?: ReactNode;
  buttonProps?: ButtonProps;
  trigger?: ReactNode;
}

interface FormHandlers {
  onSuccess: (message?: string) => void;
  onError: (message?: string) => void;
}

interface StatusModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
  variant: "success" | "error";
}

const StatusModal: React.FC<StatusModalProps> = ({
  isOpen,
  onClose,
  title,
  message,
  variant,
}) => (
  <Dialog open={isOpen} onOpenChange={onClose}>
    <DialogContent className="sm:max-w-[425px]">
      <Alert
        className={
          variant === "success"
            ? "border-green-500 bg-green-50"
            : "border-red-500 bg-red-50"
        }
      >
        <AlertTitle>{title}</AlertTitle>
        <AlertDescription>{message}</AlertDescription>
      </Alert>
    </DialogContent>
  </Dialog>
);

const FormLayout = ({
  children,
  title,
  description,
  triggerContent,
  buttonProps,
  trigger,
}: FormLayoutProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleSuccess = (message?: string) => {
    setStatusMessage(message || "Form submitted successfully!");
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setIsOpen(false);
    }, 2000);
  };

  const handleError = (message?: string) => {
    setStatusMessage(message || "An error occurred. Please try again.");
    setShowError(true);
  };

  return (
    <>
      <Layout
        title={title}
        description={description}
        triggerContent={triggerContent}
        buttonProps={buttonProps}
        trigger={trigger}
        open={isOpen}
        onOpenChange={setIsOpen}
      >
        {typeof children === "function"
          ? children({ onSuccess: handleSuccess, onError: handleError })
          : children}
      </Layout>

      <StatusModal
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        title="Success!"
        message={statusMessage}
        variant="success"
      />

      <StatusModal
        isOpen={showError}
        onClose={() => setShowError(false)}
        title="Error"
        message={statusMessage}
        variant="error"
      />
    </>
  );
};

export default FormLayout;
