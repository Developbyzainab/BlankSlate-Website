"use client";

export function Accordion({ children, className }) {
  return <div className={className}>{children}</div>;
}

export function AccordionItem({ children }) {
  return <div className="border-b py-2">{children}</div>;
}

export function AccordionTrigger({ children, onClick }) {
  return (
    <div
      onClick={onClick}
      className="flex justify-between items-center cursor-pointer"
    >
      {children}
    </div>
  );
}

export function AccordionContent({ children, isOpen }) {
  return (
    <div
      className={`overflow-hidden transition-all duration-300 ${
        isOpen ? "max-h-40 mt-2 opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <p className="text-sm text-gray-500">{children}</p>
    </div>
  );
}