// "use client"

// import { IconBadge, clx } from "@modules/common/components/ui"
// import {
//   SelectHTMLAttributes,
//   forwardRef,
//   useEffect,
//   useImperativeHandle,
//   useRef,
//   useState,
// } from "react"

// import ChevronDown from "@modules/common/icons/chevron-down"

// type NativeSelectProps = {
//   placeholder?: string
//   errors?: Record<string, unknown>
//   touched?: Record<string, unknown>
// } & Omit<SelectHTMLAttributes<HTMLSelectElement>, "size">

// const CartItemSelect = forwardRef<HTMLSelectElement, NativeSelectProps>(
//   ({ placeholder = "Select...", className, children, ...props }, ref) => {
//     const innerRef = useRef<HTMLSelectElement>(null)
//     const [isPlaceholder, setIsPlaceholder] = useState(false)

//     useImperativeHandle<HTMLSelectElement | null, HTMLSelectElement | null>(
//       ref,
//       () => innerRef.current
//     )

//     useEffect(() => {
//       if (innerRef.current && innerRef.current.value === "") {
//         setIsPlaceholder(true)
//       } else {
//         setIsPlaceholder(false)
//       }
//     }, [innerRef.current?.value])

//     return (
//       <div>
//         <IconBadge
//           onFocus={() => innerRef.current?.focus()}
//           onBlur={() => innerRef.current?.blur()}
//           className={clx(
//             "relative flex items-center txt-compact-small border text-ui-fg-base group",
//             className,
//             {
//               "text-ui-fg-subtle": isPlaceholder,
//             }
//           )}
//         >
//           <select
//             ref={innerRef}
//             {...props}
//             className="appearance-none bg-transparent border-none px-4 transition-colors duration-150 focus:border-gray-700 outline-none w-16 h-16 items-center justify-center"
//           >
//             <option disabled value="">
//               {placeholder}
//             </option>
//             {children}
//           </select>
//           <span className="absolute flex pointer-events-none justify-end w-8 group-hover:animate-pulse">
//             <ChevronDown />
//           </span>
//         </IconBadge>
//       </div>
//     )
//   }
// )

// CartItemSelect.displayName = "CartItemSelect"

// export default CartItemSelect


"use client"

import { clx } from "@modules/common/components/ui"
import {
  Children,
  forwardRef,
  isValidElement,
  useEffect,
  useImperativeHandle,
  useId,
  useRef,
  useState,
} from "react"
import type {
  ReactElement,
  ReactNode,
  SelectHTMLAttributes,
} from "react"

import ChevronDown from "@modules/common/icons/chevron-down"

type NativeSelectProps = {
  placeholder?: string
  errors?: Record<string, unknown>
  touched?: Record<string, unknown>
} & Omit<SelectHTMLAttributes<HTMLSelectElement>, "size">

type OptionElement = ReactElement<{
  value?: string | number
  disabled?: boolean
  children?: ReactNode
}>

const CartItemSelect = forwardRef<HTMLSelectElement, NativeSelectProps>(
  (
    {
      placeholder = "Select...",
      className,
      children,
      onChange,
      value,
      defaultValue,
      disabled,
      ...selectProps
    },
    ref
  ) => {
    const innerRef = useRef<HTMLSelectElement>(null)
    const rootRef = useRef<HTMLDivElement>(null)
    const listboxId = useId()
    const triggerRef = useRef<HTMLButtonElement>(null)
    const [isOpen, setIsOpen] = useState(false)
    const [internalValue, setInternalValue] = useState(
      String(defaultValue ?? "")
    )

    useImperativeHandle<HTMLSelectElement | null, HTMLSelectElement | null>(
      ref,
      () => innerRef.current
    )

    useEffect(() => {
      if (value !== undefined) {
        setInternalValue(String(value))
      }
    }, [value])

    useEffect(() => {
      if (!isOpen) {
        return
      }

      const handlePointerDown = (event: PointerEvent) => {
        if (!rootRef.current?.contains(event.target as Node)) {
          setIsOpen(false)
        }
      }

      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          setIsOpen(false)
          triggerRef.current?.focus()
        }
      }

      document.addEventListener("pointerdown", handlePointerDown)
      document.addEventListener("keydown", handleKeyDown)

      return () => {
        document.removeEventListener("pointerdown", handlePointerDown)
        document.removeEventListener("keydown", handleKeyDown)
      }
    }, [isOpen])

    const options = Children.toArray(children).reduce<OptionElement[]>(
      (uniqueOptions, child) => {
        if (!isValidElement(child) || child.type !== "option") {
          return uniqueOptions
        }

        const option = child as OptionElement
        const optionValue = String(option.props.value ?? "")

        if (option.props.disabled || optionValue === "") {
          return uniqueOptions
        }

        if (!uniqueOptions.some((existing) => String(existing.props.value) === optionValue)) {
          uniqueOptions.push(option)
        }

        return uniqueOptions
      },
      []
    )

    const selectedValue = String(value ?? internalValue ?? "")
    const selectedOption = options.find(
      (option) => String(option.props.value ?? "") === selectedValue
    )
    const selectedLabel = selectedOption?.props.children ?? placeholder

    const selectOption = (nextValue: string) => {
      const select = innerRef.current
      if (!select) {
        return
      }

      if (value === undefined) {
        setInternalValue(nextValue)
      }

      select.value = nextValue
      select.dispatchEvent(new Event("change", { bubbles: true }))
      setIsOpen(false)
      triggerRef.current?.focus()
    }

    return (
      <div
        ref={rootRef}
        className={clx("relative z-20 inline-flex h-10 w-14 items-center justify-center rounded-xl border border-[#e4dfd4] bg-[#fffefa] text-[#171915] shadow-sm transition-all duration-200 hover:border-[#c8d5c9] focus-within:border-[#6f9277] focus-within:ring-2 focus-within:ring-[#e2ebe3]", className, {
          "z-[70]": isOpen,
        })}
        onKeyDown={(event) => {
          if (event.key === "Escape" && isOpen) {
            setIsOpen(false)
            triggerRef.current?.focus()
          }
          if (event.key === "ArrowDown" && !isOpen && !disabled) {
            event.preventDefault()
            setIsOpen(true)
          }
        }}
      >
        <select
          ref={innerRef}
          {...selectProps}
          value={value}
          defaultValue={value === undefined ? defaultValue : undefined}
          onChange={onChange}
          disabled={disabled}
          aria-hidden="true"
          tabIndex={-1}
          className="pointer-events-none absolute h-px w-px overflow-hidden opacity-0"
        >
          <option disabled value="">
            {placeholder}
          </option>
          {children}
        </select>

        <button
          ref={triggerRef}
          type="button"
          disabled={disabled}
          aria-label={selectProps["aria-label"] ?? "Select quantity"}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-controls={listboxId}
          data-testid="cart-item-select-trigger"
          onClick={() => setIsOpen((open) => !open)}
          className="!translate-x-0 flex h-full w-full items-center justify-between gap-2 !rounded-xl bg-transparent px-2.5 text-sm font-bold text-[#171915] outline-none transition-colors focus-visible:ring-2 focus-visible:ring-[#dfe9e1] disabled:cursor-not-allowed disabled:opacity-50"
        >
          <span className="min-w-0 flex-1 text-center">{selectedLabel}</span>
          <span
            className={clx(
              "shrink-0 text-[#77796f] transition-transform duration-200",
              { "rotate-180": isOpen }
            )}
            aria-hidden="true"
          >
            <ChevronDown />
          </span>
        </button>

        {isOpen && options.length > 0 && (
          <div
            id={listboxId}
            role="listbox"
            aria-label="Quantity options"
            className="absolute right-0 top-full z-[80] mt-2 max-h-60 w-40 overflow-y-auto rounded-2xl border border-[#e7e1d6] bg-white p-1.5 shadow-xl shadow-[#171915]/10"
          >
            {options.map((option) => {
              const optionValue = String(option.props.value ?? "")
              const isSelected = optionValue === selectedValue

              return (
                <button
                  key={optionValue}
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => selectOption(optionValue)}
                  className={clx(
                    "!translate-x-0 flex min-h-9 w-full items-center justify-between !rounded-xl px-3 py-2 text-left text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#6f9277]",
                    isSelected
                      ? "bg-[#edf3ed] text-[#245d35]"
                      : "text-[#171915] hover:bg-[#f5f2eb]"
                  )}
                >
                  <span>{option.props.children}</span>
                  {isSelected && (
                    <span className="text-xs font-bold text-[#477b52]" aria-hidden="true">
                      ✓
                    </span>
                  )}
                </button>
              )
            })}
          </div>
        )}
      </div>
    )
  }
)

CartItemSelect.displayName = "CartItemSelect"

export default CartItemSelect
