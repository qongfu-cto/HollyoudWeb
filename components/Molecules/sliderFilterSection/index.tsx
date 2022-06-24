import {Box, Slider} from '@mui/material';
import {FC, useState} from 'react';
import {isNullable} from 'utilities/value';
import {SpecializedFilterSectionRendererProps} from '../filterDialog/types';
import {FilterOptions, FilterTitle} from '../filterDialog/filterSection/helpers';

type NormalizationArgs = Pick<SpecializedFilterSectionRendererProps<'slider'>,
    'value' | 'min' | 'max'>;

const normalizeValue = ({
                            max,
                            min,
                            value: [start, end]
                        }: NormalizationArgs): [number, number] => {
    let newStart = min;
    let newEnd = max;
    if (!isNullable(start) && start! > min) {
        // newStart = Math.round((start! * 100) / max);
        newStart = (start! / max) * 100;
    }
    if (!isNullable(end) && end! < max) {
        // newEnd = Math.round((end! * 100) / max);
        newEnd = (end! / max) * 100;
    }
    return [newStart, newEnd];
};

const denormalizeValue = ({
                              max,
                              value: [start, end]
                          }: NormalizationArgs): [number, number] => {
    const newStart = Math.round((start * max) / 100);
    const newEnd = Math.round((end * max) / 100);
    // const newStart = (start * max) / 100;
    // const newEnd = (end * max) / 100;
    return [newStart, newEnd];
};

const useValue = (args: NormalizationArgs) => {
    const [value, setValue] = useState(normalizeValue(args));
    const denormalized = denormalizeValue({...args, value});
    // useEffect(() => {

    // }, [value]);

    return {
        setValue,
        normalized: value,
        denormalized
    };
};

const SliderFilterSection: FC<SpecializedFilterSectionRendererProps<'slider'>> = ({
                                                                                      title,
                                                                                      name,
                                                                                      max,
                                                                                      min,
                                                                                      unit,
                                                                                      value
                                                                                  }) => {
    // const [_value, setValue] = useState(normalizeValue({ value, min, max }));
    const {normalized, denormalized, setValue} = useValue({
        value,
        min,
        max
    });

    return (
        <>
            <FilterTitle title={title}/>
            <FilterOptions>
                {denormalized[0]}
                <Box sx={{width: 300}}>
                    <Slider
                        getAriaLabel={() => 'Temperature range'}
                        step={100 / max}
                        value={normalized}
                        onChange={(e, val) => {
                            setValue(val as typeof normalized);
                        }}
                        // valueLabelDisplay="auto"
                        // getAriaValueText={valuetext}
                    />
                </Box>
                {denormalized[1]}
            </FilterOptions>
        </>
    );
};

export default SliderFilterSection;
