// import { Listbox, Transition } from "@headlessui/react"
// import { ChevronUpDown } from "@medusajs/icons"
// import { clx } from "@modules/common/components/ui"
// import { Fragment, useMemo } from "react"

// import compareAddresses from "@lib/util/compare-addresses"
// import { HttpTypes } from "@medusajs/types"
// import Radio from "@modules/common/components/radio"

// type AddressSelectProps = {
//   addresses: HttpTypes.StoreCustomerAddress[]
//   addressInput: HttpTypes.StoreCartAddress | null
//   onSelect: (
//     address: HttpTypes.StoreCartAddress | undefined,
//     email?: string
//   ) => void
// }

// const AddressSelect = ({
//   addresses,
//   addressInput,
//   onSelect,
// }: AddressSelectProps) => {
//   const handleSelect = (id: string) => {
//     const savedAddress = addresses.find((a) => a.id === id)
//     if (savedAddress) {
//       onSelect(savedAddress as HttpTypes.StoreCartAddress)
//     }
//   }

//   const selectedAddress = useMemo(() => {
//     return addresses.find((a) => addressInput && compareAddresses(a, addressInput))
//   }, [addresses, addressInput])

//   return (
//     <Listbox onChange={handleSelect} value={selectedAddress?.id}>
//       <div className="relative">
//         <Listbox.Button
//           className="relative w-full flex justify-between items-center px-4 py-[10px] text-left bg-white cursor-default focus:outline-none border rounded-rounded focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-gray-300 focus-visible:ring-offset-2 focus-visible:border-gray-300 text-base-regular"
//           data-testid="shipping-address-select"
//         >
//           {({ open }) => (
//             <>
//               <span className="block truncate">
//                 {selectedAddress
//                   ? selectedAddress.address_1
//                   : "Choose an address"}
//               </span>
//               <ChevronUpDown
//                 className={clx("transition-rotate duration-200", {
//                   "transform rotate-180": open,
//                 })}
//               />
//             </>
//           )}
//         </Listbox.Button>
//         <Transition
//           as={Fragment}
//           leave="transition ease-in duration-100"
//           leaveFrom="opacity-100"
//           leaveTo="opacity-0"
//         >
//           <Listbox.Options
//             className="absolute z-20 w-full overflow-auto text-small-regular bg-white border border-top-0 max-h-60 focus:outline-none sm:text-sm"
//             data-testid="shipping-address-options"
//           >
//             {addresses.map((address) => {
//               return (
//                 <Listbox.Option
//                   key={address.id}
//                   value={address.id}
//                   className="cursor-default select-none relative pl-6 pr-10 hover:bg-gray-50 py-4"
//                   data-testid="shipping-address-option"
//                 >
//                   <div className="flex gap-x-4 items-start">
//                     <Radio
//                       checked={selectedAddress?.id === address.id}
//                       data-testid="shipping-address-radio"
//                     />
//                     <div className="flex flex-col">
//                       <span className="text-left text-base-semi">
//                         {address.first_name} {address.last_name}
//                       </span>
//                       {address.company && (
//                         <span className="text-small-regular text-ui-fg-base">
//                           {address.company}
//                         </span>
//                       )}
//                       <div className="flex flex-col text-left text-base-regular mt-2">
//                         <span>
//                           {address.address_1}
//                           {address.address_2 && (
//                             <span>, {address.address_2}</span>
//                           )}
//                         </span>
//                         <span>
//                           {address.postal_code}, {address.city}
//                         </span>
//                         <span>
//                           {address.province && `${address.province}, `}
//                           {address.country_code?.toUpperCase()}
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </Listbox.Option>
//               )
//             })}
//           </Listbox.Options>
//         </Transition>
//       </div>
//     </Listbox>
//   )
// }

// export default AddressSelect


import { Listbox, Transition } from "@headlessui/react"
import { ChevronUpDown } from "@medusajs/icons"
import { clx } from "@modules/common/components/ui"
import { Fragment, useMemo } from "react"

import compareAddresses from "@lib/util/compare-addresses"
import { HttpTypes } from "@medusajs/types"
import Radio from "@modules/common/components/radio"

type AddressSelectProps = {
  addresses: HttpTypes.StoreCustomerAddress[]
  addressInput: HttpTypes.StoreCartAddress | null
  onSelect: (
    address: HttpTypes.StoreCartAddress | undefined,
    email?: string
  ) => void
}

const AddressSelect = ({
  addresses,
  addressInput,
  onSelect,
}: AddressSelectProps) => {
  const handleSelect = (id: string) => {
    const savedAddress = addresses.find((a) => a.id === id)
    if (savedAddress) {
      onSelect(savedAddress as HttpTypes.StoreCartAddress)
    }
  }

  const selectedAddress = useMemo(() => {
    return addresses.find((a) => addressInput && compareAddresses(a, addressInput))
  }, [addresses, addressInput])

  return (
    <Listbox onChange={handleSelect} value={selectedAddress?.id}>
      <div className="relative">
        <Listbox.Button
          className="relative flex w-full items-center justify-between rounded-xl border border-[#d8d1c4] bg-[#f3f0e7] px-4 py-3 text-left text-base-regular cursor-default focus:outline-none focus-visible:border-[#7f1d2d] focus-visible:ring-2 focus-visible:ring-[#ead9dc]"
          data-testid="shipping-address-select"
        >
          {({ open }) => (
            <>
              <span className="block truncate">
                {selectedAddress
                  ? selectedAddress.address_1
                  : "Choose an address"}
              </span>
              <ChevronUpDown
                className={clx("transition-rotate duration-200", {
                  "transform rotate-180": open,
                })}
              />
            </>
          )}
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options
            className="absolute z-20 w-full max-h-60 overflow-auto rounded-b-xl border border-[#d8d1c4] bg-[#f8f6f0] text-small-regular focus:outline-none sm:text-sm"
            data-testid="shipping-address-options"
          >
            {addresses.map((address) => {
              return (
                <Listbox.Option
                  key={address.id}
                  value={address.id}
                  className="relative cursor-default select-none px-6 py-4 pr-10 hover:bg-[#eee9df]"
                  data-testid="shipping-address-option"
                >
                  <div className="flex gap-x-4 items-start">
                    <Radio
                      checked={selectedAddress?.id === address.id}
                      data-testid="shipping-address-radio"
                    />
                    <div className="flex flex-col">
                      <span className="text-left text-base-semi">
                        {address.first_name} {address.last_name}
                      </span>
                      {address.company && (
                        <span className="text-small-regular text-ui-fg-base">
                          {address.company}
                        </span>
                      )}
                      <div className="flex flex-col text-left text-base-regular mt-2">
                        <span>
                          {address.address_1}
                          {address.address_2 && (
                            <span>, {address.address_2}</span>
                          )}
                        </span>
                        <span>
                          {address.postal_code}, {address.city}
                        </span>
                        <span>
                          {address.province && `${address.province}, `}
                          {address.country_code?.toUpperCase()}
                        </span>
                      </div>
                    </div>
                  </div>
                </Listbox.Option>
              )
            })}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  )
}

export default AddressSelect
