import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import {Plus, X} from "lucide-react";

type QandaCardProps<T> = {
  data: T[];
  ask: (item: T) => string;
  answer: (item: T) => string;
};

function QandaCard<T>({data, ask, answer}: QandaCardProps<T>) {
  return (
    <div className="w-full">
      <Accordion type="single" collapsible>
        {data.map((item, index) => (
          <AccordionItem key={index} value={ask(item)} className="mb-7.75">
            <AccordionTrigger className="hover:no-underline group mb-8 cursor-pointer">
              <div className="flex items-center justify-between w-full">
                <h5 className="font-medium font-DMSans text-[20px] leading-[120%] tracking-[-3%] xl:w-140">
                  {ask(item)}
                </h5>
                <div className="text-primary">
                  <Plus className="group-data-[state=open]:hidden transition-transform duration-1000" />
                  <X className="hidden group-data-[state=open]:block transition-transform duration-1000" />
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-[16px] font-medium text-muted/50 leading-[160%]">
              {answer(item)}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default QandaCard;
