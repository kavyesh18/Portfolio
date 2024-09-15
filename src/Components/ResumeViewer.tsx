import { ActionIcon, Modal, ScrollArea, Tooltip } from "@mantine/core";
import {  IconArrowBigDownLineFilled } from "@tabler/icons-react";
import { Document, Page } from "react-pdf";
import { Info } from "../User";

const ResumeViewer = (props: any) => {
  return (
    <Modal.Root
      scrollAreaComponent={ScrollArea.Autosize}
      size="70%"
      className="font-mono"
      opened={props.opened}
      onClose={props.close}
    >
      <Modal.Overlay />
      <Modal.Content className="!rounded-3xl overflow-hidden">
        <Modal.Header className="!bg-bgcolor border-primaryColor !border-2 !border-b-0 !rounded-tl-3xl !rounded-tr-3xl">
          <Modal.Title
            data-autofocus
            className="!text-4xl text-white flex gap-3 items-center !font-bold"
          >
            Resume
            <Tooltip label="Download" className="!text-bgcolor" color="#64FFDA" position="right" offset={5}>
            <ActionIcon className="text-primaryColor" component="a" href={`${process.env.PUBLIC_URL}/Icons/Badugu-Kavyesh_Raj_CV.pdf`} download={Info.name} color="#64FFDA" variant="outline" aria-label="Settings">
      <IconArrowBigDownLineFilled />
    </ActionIcon>
    </Tooltip>
          </Modal.Title>
          <Modal.CloseButton
            size="md"
            iconSize="30px"
            className="!bg-bgcolor !text-red-500"
          />
        </Modal.Header>
        <Modal.Body className="!bg-bgcolor border-primaryColor !border-2 !border-t-0 !rounded-bl-3xl !rounded-br-3xl flex justify-center">
          <div className="overflow-hidden flex justify-center">
            <Document
              file={`${process.env.PUBLIC_URL}/Badugu_Kavyesh_Raj_CV.pdf`}
              className="flex justify-center"
            >
              <Page
                pageNumber={1}
                renderTextLayer={false}
                renderAnnotationLayer={false}
                className="w-full h-auto flex justify-center"
              />
            </Document>
          </div>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
};

export default ResumeViewer;
