import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FolderCode, FileUser } from "lucide-react";
import type { FC } from "react";
import CodeEditor from "./CodeEditor";

const getColor = () => {
  const colors = [
    "fill-rose-400",
    "fill-teal-400",
    "fill-indigo-500",
    "fill-purple-600",
  ];
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
};

const FolderStructure: FC<{
  heading: string;
  accordionData: {
    folderHeading: string;
    contentList: {
      id: string;
      label: string;
    }[];
  }[];
}> = ({ heading, accordionData }) => {
  return (
    <div className="font-md flex-col heading-md flex items-center">
      <p className="text-center w-full h-[4.8rem] p-1 border-b border-color">
        {heading}
      </p>

      {accordionData.map(({ folderHeading, contentList }) => {
        return (
          <Accordion
            type="single"
            collapsible
            className="w-full border-b border-color p-2"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <p className="flex items-center gap-1 cursor-pointer">
                  <svg
                    width="20"
                    height="18"
                    viewBox="0 0 20 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 5V17C20 17.5523 19.5523 18 19 18H1C0.44772 18 0 17.5523 0 17V4H19C19.5523 4 20 4.44772 20 5ZM10.4142 2H0V1C0 0.44772 0.44772 0 1 0H8.4142L10.4142 2Z"
                      className={`${getColor()}`}
                    />
                  </svg>
                  {folderHeading}
                </p>
              </AccordionTrigger>
              <AccordionContent>
                {contentList.map(({ label, id }) => {
                  return (
                    <p
                      id={id}
                      key={id}
                      className="flex items-center cursor-pointer gap-1"
                    >
                      <svg
                        width="20"
                        height="18"
                        viewBox="0 0 20 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 0H19C19.5523 0 20 0.44772 20 1V17C20 17.5523 19.5523 18 19 18H1C0.44772 18 0 17.5523 0 17V1C0 0.44772 0.44772 0 1 0ZM5 12.5V8.5L7 10.5L9 8.5V12.5H11V5.5H9L7 7.5L5 5.5H3V12.5H5ZM16 9.5V5.5H14V9.5H12L15 12.5L18 9.5H16Z"
                          fill="#62748E"
                        />
                      </svg>
                      {label}
                      <div className="rounded-full w-1 h-1 bg-orange-400 ml-auto"></div>
                    </p>
                  );
                })}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        );
      })}
    </div>
  );
};

const About = () => {
  return (
    <section className="flex w-full h-full">
      <aside className="w-7 p-1.5 h-full flex flex-col items-center gap-3 border-r border-color">
        <FolderCode
          size={35}
          className="bg-slate-500 p-0.5 w-4 rounded-xl text-[#0f172b]"
        />
        <FileUser
          size={37}
          className="bg-slate-500 p-0.5 w-4 rounded-xl text-[#0f172b]"
        />
      </aside>
      <section className="w-24 border-r border-color h-full">
        <FolderStructure
          heading="personal-info"
          accordionData={[
            {
              folderHeading: "bio",
              contentList: [
                {
                  id: "bio",
                  label: "Bio",
                },
              ],
            },
            {
              folderHeading: "education",
              contentList: [
                {
                  id: "bachelor",
                  label: "Bachelor's",
                },
                {
                  id: "master",
                  label: "Master's",
                },
              ],
            },
          ]}
        />
      </section>
      <CodeEditor />
    </section>
  );
};

export default About;
