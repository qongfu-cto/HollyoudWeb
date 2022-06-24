import React, { useState, useEffect, DOMElement, CSSProperties } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Select, { SelectProps, SelectRenderer } from "react-dropdown-select";
import useQDropDownInputBoxStylesEN from "./stylesEN";

interface QDropDownInputBoxProps {
  placeholder?: string;
  options?: {
    id?: number;
    value?: string | number | null;
    label?: string;
  }[];
  color?: string;
  multi?: boolean;
  clearable?: boolean;
  searchable?: boolean;
  dropdownHandle?: boolean;
  dropdownHeight?: string;
  create?: boolean;
  backspaceDelete?: boolean;
  onSelectChange?: any;
  selectProps?: SelectProps<{ values: string[] }>;
  containerStyle?: CSSProperties;
  value?: any;
  disabled?: boolean;
  //FIXME:
  searchFn?: any; //({ props, state, methods }: SelectRenderer<any>) => any[];
}

/**
 * QDropDownInputBox
 *
 * A dynamic input box component.
 *
 * @param placeholder - optional placeholder property
 * @param options - options property that displays all the options .
 * @param multi - If true - will act as multi-select, if false - only one option will be selected at the time
 * @param clearable - Clear all indicator property
 * @param searchable - If property is set to true, select will have search input text
 * @param dropdownHandle - Dropdown handle property to open/close dropdown
 * @param dropdownHeight - optional property that sets a minimum height of a dropdown
 * @param create - Property that can add new values
 * @param backspaceDelete - If true, backspace key will delete last value
 * @param onSelectChange - Function property that is called upon triggering onChange function
 * @param selectProps - Property that triggers in-built props of the imported drop down Select component
 *
 */

const QDropDownInputBox = ({
  placeholder,
  options,
  color,
  multi,
  clearable,
  searchable,
  dropdownHandle,
  dropdownHeight,
  create,
  backspaceDelete,
  onSelectChange,
  selectProps,
  value,
  containerStyle,
  disabled,
  searchFn,
}: QDropDownInputBoxProps) => {
  const stylesEN = useQDropDownInputBoxStylesEN();
  const [selected, setSelected] = useState([]);
  const [styles, setStyles] = useState();

  const sampleOption: Array<any> = [
    { value: 1, label: "Option 1" },
    { value: 2, label: "Option 2" },
    { value: 3, label: "Option 3", disabled: true },
    { value: 4, label: "Option 4" },
    { value: 5, label: "Option 5" },
    { value: 6, label: "Option 6" },
  ];

  const handleChange = () => {
    return;
  };

  const handleInputChange = () => {
    return;
  };

  return (
    <div>
      <Select
        multi={multi ?? false}
        values={value ? value : []}
        clearable={clearable ?? false}
        searchable={searchable ?? true}
        dropdownHandle={dropdownHandle ?? true}
        options={options ?? sampleOption}
        onChange={onSelectChange}
        color={color ?? "#57C1E3"}
        style={
          containerStyle
            ? containerStyle
            : {
                height: 48,
                width: 224,
                borderRadius: 12,
                fontFamily: "Poppins",
                fontSize: 13,
              }
        }
        placeholder={placeholder ?? "Select"}
        create={create ?? true}
        dropdownHeight={dropdownHeight ?? "100px"}
        backspaceDelete={backspaceDelete ?? true}
        disabled={disabled}
        noDataLabel={"No Results Found"}
        searchFn={searchFn}
        // {...selectProps}
      />
    </div>
  );
};

export default QDropDownInputBox;
