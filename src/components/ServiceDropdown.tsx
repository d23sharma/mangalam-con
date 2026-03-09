// import { Listbox, Transition } from "@headlessui/react";
// import { ChevronDown, Check } from "lucide-react";
// import { Fragment } from "react";

// type Props = {
//     value: string;
//     onChange: (value: string) => void;
// };

// const services = [
//     "Residential Construction",
//     "Commercial Construction",
//     "Buy Property",
//     "Sell Property",
// ];

// export default function ServiceDropdown({ value, onChange }: Props) {
//     return (
//         <Listbox value={value} onChange={onChange}>
//             <div className="relative">

//                 {/* Dropdown Button */}
//                 <Listbox.Button
//                     className="group w-full px-4 py-3 border border-neutral-300 rounded-lg bg-white
//           flex justify-between items-center shadow-sm transition-all duration-200
//           hover:border-transparent hover:shadow-md hover:bg-gradient-gold
//           focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
//                 >
//                     <span
//                         className={`transition-colors ${value ? "text-neutral-900" : "text-neutral-400"
//                             }`}
//                     >
//                         {value || "Type of Service"}
//                     </span>

//                     <ChevronDown
//                         size={18}
//                         className="text-neutral-600 transition-transform duration-200 ui-open:rotate-180"
//                     />
//                 </Listbox.Button>

//                 {/* Dropdown Options */}
//                 <Transition
//                     as={Fragment}
//                     enter="transition ease-out duration-150"
//                     enterFrom="opacity-0 scale-95"
//                     enterTo="opacity-100 scale-100"
//                     leave="transition ease-in duration-100"
//                     leaveFrom="opacity-100 scale-100"
//                     leaveTo="opacity-0 scale-95"
//                 >
//                     <Listbox.Options
//                         className="absolute z-20 mt-2 w-full bg-white border border-neutral-200
//             rounded-lg shadow-lg overflow-hidden"
//                     >
//                         {services.map((service) => (
//                             <Listbox.Option key={service} value={service}>
//                                 {({ active, selected }) => (
//                                     <div
//                                         className={`px-4 py-3 cursor-pointer flex justify-between items-center
//                     transition-colors
//                     ${selected
//                                                 ? "bg-primary text-white"
//                                                 : active
//                                                     ? "bg-primary text-white"
//                                                     : "text-neutral-700"
//                                             }`}
//                                     >
//                                         <span>{service}</span>

//                                         {selected && (
//                                             <Check size={16} className="text-white" />
//                                         )}
//                                     </div>
//                                 )}
//                             </Listbox.Option>
//                         ))}
//                     </Listbox.Options>
//                 </Transition>

//             </div>
//         </Listbox>
//     );
// }


import { Listbox, Transition } from "@headlessui/react";
import { ChevronDown, Check } from "lucide-react";
import { Fragment } from "react";

type Props = {
    value: string;
    onChange: (value: string) => void;
};

const services = [
    "Residential Construction",
    "Commercial Construction",
    "Buy Property",
    "Sell Property",
];

export default function ServiceDropdown({ value, onChange }: Props) {
    return (
        <Listbox value={value} onChange={onChange}>
            <div className="relative">

                {/* Button */}
                <Listbox.Button
                    className="group w-full px-4 py-3 border border-neutral-300 rounded-lg bg-white
          flex justify-between items-center shadow-sm transition-all duration-200
          hover:border-transparent hover:shadow-md hover:bg-gradient-gold
          focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                >
                    <span className={value ? "text-neutral-900" : "text-neutral-400"}>
                        {value || "Service you are interested in"}
                    </span>

                    <ChevronDown
                        size={18}
                        className="text-neutral-600 transition-transform duration-200 ui-open:rotate-180"
                    />
                </Listbox.Button>

                {/* Dropdown */}
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-150"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Listbox.Options
                        className="absolute z-20 mt-2 w-full bg-white border border-neutral-200
            rounded-lg shadow-lg overflow-hidden focus:outline-none"
                    >
                        {services.map((service) => (
                            <Listbox.Option key={service} value={service}>
                                {({ active, selected }) => (
                                    <div
                                        className={`px-4 py-3 cursor-pointer flex justify-between items-center
                    transition-colors
                    ${selected
                                                ? "bg-primary text-white"
                                                : active
                                                    ? "bg-primary text-white"
                                                    : "text-neutral-700"
                                            }`}
                                    >
                                        <span>{service}</span>

                                        {selected && (
                                            <Check size={16} className="text-white" />
                                        )}
                                    </div>
                                )}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </Transition>

            </div>
        </Listbox>
    );
}