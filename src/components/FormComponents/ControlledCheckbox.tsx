import React from 'react'

import { Controller, useFormContext } from 'react-hook-form'
import { Checkbox, FormControlLabel } from '@mui/material'
import { simpleFormOption } from '../../utils/formOptions'

export default function ControlledCheckboxGroup(props : { label: string, name: string, callback?: Function }) {

    const { control, setValue, watch } = useFormContext()
    const {name, label, callback} = props

    return (
        <FormControlLabel
            label={label}
            control={
                <Controller
                    name={name}
                    control={control}
                    render={({field: props}) => (
                        <Checkbox 
                            {...props} 
                            checked={props.value}
                            onChange={(e) => {
                                if (callback !== undefined) {
                                    callback(e.target.checked)
                                }
                                props.onChange(e.target.checked)
                            }} 
                        />
                    )} 
                />
            }
        />
    )
}