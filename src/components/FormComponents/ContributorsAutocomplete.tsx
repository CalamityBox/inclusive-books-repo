import React from 'react'

import { Avatar, Box, ListSubheader, TextField, Typography, useMediaQuery } from '@mui/material'
import Autocomplete, { autocompleteClasses } from '@mui/material/Autocomplete'
import { Controller, useFormContext } from 'react-hook-form'
import { IContributor } from '../../utils/Interfaces'
import { readDatabase } from '../../utils/useDatabase'
import { nanoid } from 'nanoid'
import { matchSorter } from 'match-sorter'
import InfoTooltip from '../InfoTooltip'

// Virtualization
import { VariableSizeList, ListChildComponentProps } from 'react-window'
import Popper from '@mui/material/Popper'
import { useTheme, styled } from '@mui/material/styles'

export default function ContributorsAutocomplete(props: { name: string, label: string, setSelected?: Function, isError: boolean, errorMessage: string }) {

    const { control } = useFormContext()
    const [options, isLoading] = readDatabase('contributors')

    const filterOptions = (options: any, { inputValue }: any) => matchSorter(options, inputValue,{ keys: ['name'] })

    // Virtualization code from https://stackblitz.com/edit/react-dzmzy2?file=demo.tsx | NOTE: react-virtualized is no longer supported, but it is still the main example on MUI documentation unfortunately
    const LISTBOX_PADDING = 8 //px

    function renderRow(props: ListChildComponentProps) {

        const { data, index, style } = props
        const dataSet = data[index]
        const inlineStyle = {
            ...style,
            top: (style.top as number) + LISTBOX_PADDING
        }

        if (dataSet.hasOwnProperty('group')) {
            return (
                <ListSubheader key={dataSet.key} component='div' style={inlineStyle}>
                    {dataSet.group}
                </ListSubheader>
            )
        }

        return (
            // <Typography component='li' {...dataSet[0]} noWrap style={inlineStyle}>
            //     {dataSet[1]}
            // </Typography>
            <Box key={nanoid()} component="li" {...dataSet[0]} noWrap style={inlineStyle}>
                <Avatar
                    alt={dataSet[1].name}
                    src={!!dataSet[1]?.profilePictureUrl ? dataSet[1].profilePictureUrl : ''}
                    imgProps={{ loading: 'lazy' }}
                    sx={{ mr: 2 }}
                />
                <Typography>{dataSet[1].name}</Typography>
                {
                    !!dataSet[1]?.description ?
                        <InfoTooltip isVisible={true}>
                            <Typography variant='h6'>{dataSet[1].name}</Typography>
                            <Typography>{dataSet[1].description}</Typography>
                        </InfoTooltip>
                        :
                        <></>
                }
            </Box>
        )

    }

    const OuterElementContext = React.createContext({})

    const OuterElementType = React.forwardRef<HTMLDivElement>(
        (props, ref) => {
            const outerProps = React.useContext(OuterElementContext)
            return <div ref={ref} {...props} {...outerProps} />
        }
    )

    function useResetCache(data: any) {

        const ref = React.useRef<VariableSizeList>(null)

        React.useEffect(() => {

            if (ref.current !== null) { //Changed != to !== in the source code; check this first if errors occur
                ref.current.resetAfterIndex(0, true)
            }

        },[data])

        return ref

    }

    // Adapter for react-window
    const ListboxComponent = React.forwardRef<
        HTMLDivElement,
        React.HTMLAttributes<HTMLElement>
    >(function ListboxComponent(props, ref) {

        const { children, ...other } = props
        const itemData: React.ReactChild[] = []; // Keeping this the same for now, but will try typescript suggestion

        (children as React.ReactChild[]).forEach(
            (item: React.ReactChild & { children?: React.ReactChild[] }) => {
                itemData.push(item)
                itemData.push( ...(item.children || []) )
            }
        )

        
        const theme = useTheme()
        const smUp = useMediaQuery(theme.breakpoints.up('sm'), {
            noSsr: true
        })
        
        const itemCount = itemData.length
        const itemSize = smUp ? 56 : 64
        
        const getChildSize = (child: React.ReactChild) => {
            
            if (child.hasOwnProperty('group')) {
                return 48
            }
            
            return itemSize
            
        }
        
        const getHeight = () => {
            
            if (itemCount > 8) {
                return 8 * itemSize
            }
            
            return itemData.map(getChildSize).reduce((a,b) => a + b, 0)
            
        }
        
        const gridRef = useResetCache(itemCount)

        return (
            <div ref={ref}>
                <OuterElementContext.Provider value={other}>
                    <VariableSizeList
                        itemData={itemData}
                        height={getHeight() + 2 * LISTBOX_PADDING}
                        width='100%'
                        ref={gridRef}
                        outerElementType={OuterElementType}
                        innerElementType='ul'
                        itemSize={(index) => getChildSize(itemData[index])}
                        overscanCount={5}
                        itemCount={itemCount}
                    >
                        {renderRow}
                    </VariableSizeList>
                </OuterElementContext.Provider>
            </div>
        )

    })

    const StyledPopper = styled(Popper)({
        [`& .${autocompleteClasses.listbox}`]: {
          boxSizing: 'border-box',
          '& ul': {
            padding: 0,
            margin: 0
          }
        }
    })

    return (
        <>
            <Controller
                name={props.name}
                control={control}
                rules={{ required: true }}

                render={({ field: { onChange, ..._field } }) => (
                    <Autocomplete
                        {..._field}
                        openOnFocus={false}
                        disableListWrap
                        PopperComponent={StyledPopper}
                        ListboxComponent={ListboxComponent}
                        onMouseDownCapture={(e) => e.stopPropagation()}
                        options={!!options ? options : []}
                        onChange={(_,data : any) => {
                            onChange(data)
                            // console.log('data is',data)
                            // Allows component to expose selected contributor, if needed
                            if (props?.setSelected !== undefined) {
                                props.setSelected(data)
                            }
                        }}
                        
                        getOptionLabel={option => option.name}
                        // groupBy={option => option.name[0]}

                        filterOptions={filterOptions}

                        renderOption={(props, option: any) => [props, option]}

                        renderGroup={(params: any) => params}

                        renderInput={(params) => (
                            <TextField 
                                {...params} 
                                label={props.label}
                                placeholder={'Contributor Name'}
                                error={props.isError}
                                helperText={props.isError ? props.errorMessage : ''}
                            />
                        )}
                    />
                )}

            />
        </>
    )
}