import React from 'react'

import { Controller, useFormContext } from 'react-hook-form'
import { Checkbox, FormControlLabel, FormGroup, FormHelperText, Typography } from '@mui/material'
import { nanoid } from 'nanoid'
import InfoTooltip from '../InfoTooltip'
import { simpleFormOption } from '../../utils/formOptions'

export default function ControlledCheckboxGroup(props : { label: string, name: string, defaultValue?: string, options: simpleFormOption[] }) {

    const { control, setValue, watch, formState: { errors } } = useFormContext()

    const name = props.name

    const childStyles = { ml: 3 }

    const options = props.options.map(
        (option, index) => (
            <FormControlLabel
                key={nanoid()}
                control={
                    <Controller
                        name={`${name}.${option.value}`}
                        control={control}
                        render={({field: props}) => (
                            <Checkbox 
                                {...props} 
                                checked={props.value} 
                                sx={option.hasOwnProperty('parent') ? childStyles : {}} 
                                onChange={(e) => {
                                    // If the option is a child of a parent checkbox and the child is being set to true, set the parent to true
                                    if (option.hasOwnProperty('parent') && e.target.checked) {
                                        const parentName = !!option?.parent ? `${name}.${option.parent}` : '' // Even though I check if option has the parent property, calling option.parent in setValue gives a typescript error
                                        watch(parentName) // I truly have no idea why this matters, but it won't update correctly in real time without this - does not seem to cause performance issues
                                        setValue(parentName,true)
                                    } else if (option.hasOwnProperty('children') && !e.target.checked) {
                                        // if it is a parent element and it is being set to false, set the children to false
                                        const children = option.children === undefined ? [] : option.children
                                        for (const child of children) {
                                            const childName = `${name}.${child}`
                                            watch(childName)
                                            setValue(childName,false)
                                        }
                                    }

                                    props.onChange(e.target.checked)
                                }} 
                            />
                        )} 
                    />
                }
                label={
                    <>
                        {option.label}
                        <InfoTooltip isVisible={!!option.tooltip}>
                            <Typography variant='h6'>{option.label}</Typography>
                            <Typography>{option.tooltip}</Typography>
                        </InfoTooltip>
                    </>
                }
            />
        )
    )

    return (
        <>
            {
                !!errors[props.name] ? 
                    <FormHelperText error>
                        <>
                            {errors[props.name]?.message}
                        </>
                    </FormHelperText> 
                    : 
                    <></>
            }
            <FormGroup>
                {options}
            </FormGroup>
        </>
    )
}