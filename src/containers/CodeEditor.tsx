import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { useFilesContent } from "@/store";
import { X } from "lucide-react";

const CodeEditor = () => {
  const filesContent = useFilesContent();
  return (
    <section className="w-full h-full flex flex-col">
      <div className="w-full min-h-[4.8rem] h-[4.8rem] px-2 gap-1 flex items-center border-b border-color font-md">
        {filesContent.map(({ id, label }) => {
          return (
            <p
              className="flex cursor-pointer h-full items-center justify-between px-1 w-15 border-r border-color"
              key={id}
              id={id}
            >
              {label}
              <X size={16} />
            </p>
          );
        })}
      </div>
      <ResizablePanelGroup direction="horizontal">
        {filesContent.map(({ id, content }, index) => {
          return (
            <>
              <ResizablePanel id={id} key={id} className="flex flex-col p-2">
                <p className="font-lg code-line first-line"></p>
                {content.map((line) => {
                  return <p className="font-lg code-line">* {line}</p>;
                })}
                <p className="font-lg code-line last-line"></p>
              </ResizablePanel>
              {index !== filesContent.length - 1 && <ResizableHandle />}
            </>
          );
        })}
      </ResizablePanelGroup>
    </section>
  );
};

export default CodeEditor;
