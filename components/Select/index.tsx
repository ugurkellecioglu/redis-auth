import { primary } from "@/styles/themes/primary"
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons"
import * as Select from "@radix-ui/react-select"
import * as stylex from "@stylexjs/stylex"
import classnames from "classnames"
import React from "react"
import { selectStyles } from "./Select.stylex"

// Define the types for the props
interface SelectItemProps {
  value: string
  label: string
  disabled?: boolean
}

interface SelectGroupProps {
  label: string
  items: SelectItemProps[]
}

interface SelectDemoProps {
  groups: SelectGroupProps[]
  placeholder?: string
}

const SelectDemo: React.FC<SelectDemoProps> = ({
  groups,
  placeholder = "Select an item...",
}) => (
  <Select.Root>
    <Select.Trigger {...stylex.props(primary, selectStyles.trigger)}>
      <Select.Value placeholder={placeholder} />
      <Select.Icon className="SelectIcon">
        <ChevronDownIcon />
      </Select.Icon>
    </Select.Trigger>
    <Select.Portal>
      <Select.Content {...stylex.props(primary, selectStyles.content)}>
        <Select.ScrollUpButton
          {...stylex.props(primary, selectStyles.scrollButton)}
        >
          <ChevronUpIcon />
        </Select.ScrollUpButton>
        <Select.Viewport className="SelectViewport">
          {groups.map((group, index) => (
            <React.Fragment key={index}>
              <Select.Group {...stylex.props(primary, selectStyles.group)}>
                <Select.Label {...stylex.props(primary, selectStyles.label)}>
                  {group.label}
                </Select.Label>
                {group.items.map((item) => (
                  <SelectItem
                    key={item.value}
                    {...stylex.props(primary, selectStyles.item)}
                    value={item.value}
                    disabled={item.disabled}
                  >
                    {item.label}
                  </SelectItem>
                ))}
              </Select.Group>
              {index < groups.length - 1 && (
                <Select.Separator
                  {...stylex.props(primary, selectStyles.separator)}
                />
              )}
            </React.Fragment>
          ))}
        </Select.Viewport>
        <Select.ScrollDownButton className="SelectScrollButton">
          <ChevronDownIcon />
        </Select.ScrollDownButton>
      </Select.Content>
    </Select.Portal>
  </Select.Root>
)

const SelectItem = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof Select.Item>
>(({ children, className, ...props }, forwardedRef) => {
  return (
    <Select.Item
      className={classnames("SelectItem", className)}
      {...props}
      ref={forwardedRef}
    >
      <Select.ItemText>{children}</Select.ItemText>
      <Select.ItemIndicator className="SelectItemIndicator">
        <CheckIcon />
      </Select.ItemIndicator>
    </Select.Item>
  )
})

export default SelectDemo
