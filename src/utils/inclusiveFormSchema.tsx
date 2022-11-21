import * as yup from 'yup'

export interface IFormInputs {
    
    title: string;
    subtitle: string;
    submit: any;
    series: string;
    seriesNumber: string;
    
    contributorName1: string;
    contributorType1: string;
    contributorName2: string;
    contributorType2: string;
    contributorName3: string;
    contributorType3: string;
    contributorName4: string;
    contributorType4: string;
    contributorName5: string;
    contributorType5: string;
    contributorName6: string;
    contributorType6: string;
    contributorName7: string;
    contributorType7: string;
    contributorName8: string;
    contributorType8: string;
    contributorName9: string;
    contributorType9: string;
    contributorName10: string;
    contributorType10: string;

}

export const inclusiveFormSchema = yup.object().shape({

    // biographical info about book
    title: yup.string().required('You must enter a title.'),
    subtitle: yup.string(),
    series: yup.string(),
    seriesNumber: yup.string(),

    // Contributors
    contributorName1: yup.string().required('You must enter a name.').when('contributorType1',{
            is: (contributorType1 : string | undefined) => !!contributorType1,
            then: yup.string().required('You must enter a name.')
        }),
    contributorType1: yup.string().required('You must enter a type.').when('contributorName1',{
            is: (contributorName1 : string) => contributorName1.length > 0,
            then: yup.string().required('You must enter a type.')
        }),

    contributorName2: yup.string().when('contributorType2',{
            is: (contributorType2 : string | undefined) => !!contributorType2,
            then: yup.string().required('You must enter a name.')
        }),
    contributorType2: yup.string().when('contributorName2',{
            is: (contributorName2 : string) => contributorName2.length > 0,
            then: yup.string().required('You must enter a type.')
        }),

    contributorName3: yup.string().when('contributorType3',{
            is: (contributorType3 : string | undefined) => !!contributorType3,
            then: yup.string().required('You must enter a name.')
        }),
    contributorType3: yup.string().when('contributorName3',{
            is: (contributorName3 : string) => contributorName3.length > 0,
            then: yup.string().required('You must enter a type.')
        }),

    contributorName4: yup.string().when('contributorType4',{
            is: (contributorType4 : string | undefined) => !!contributorType4,
            then: yup.string().required('You must enter a name.')
        }),
    contributorType4: yup.string().when('contributorName4',{
            is: (contributorName4 : string) => contributorName4.length > 0,
            then: yup.string().required('You must enter a type.')
        }),
    
    contributorName5: yup.string().when('contributorType5',{
            is: (contributorType5 : string | undefined) => !!contributorType5,
            then: yup.string().required('You must enter a name.')
        }),
    contributorType5: yup.string().when('contributorName5',{
            is: (contributorName5 : string) => contributorName5.length > 0,
            then: yup.string().required('You must enter a type.')
        }),

    contributorName6: yup.string().when('contributorType6',{
            is: (contributorType6 : string | undefined) => !!contributorType6,
            then: yup.string().required('You must enter a name.')
        }),
    contributorType6: yup.string().when('contributorName6',{
            is: (contributorName6 : string) => contributorName6.length > 0,
            then: yup.string().required('You must enter a type.')
        }),

    contributorName7: yup.string().when('contributorType7',{
        is: (contributorType7 : string | undefined) => !!contributorType7,
        then: yup.string().required('You must enter a name.')
    }),
    contributorType7: yup.string().when('contributorName7',{
            is: (contributorName7 : string) => contributorName7.length > 0,
            then: yup.string().required('You must enter a type.')
        }),

    contributorName8: yup.string().when('contributorType8',{
            is: (contributorType8 : string | undefined) => !!contributorType8,
            then: yup.string().required('You must enter a name.')
        }),
    contributorType8: yup.string().when('contributorName8',{
            is: (contributorName8 : string) => contributorName8.length > 0,
            then: yup.string().required('You must enter a type.')
        }),

    contributorName9: yup.string().when('contributorType9',{
            is: (contributorType9 : string | undefined) => !!contributorType9,
            then: yup.string().required('You must enter a name.')
        }),
    contributorType9: yup.string().when('contributorName9',{
            is: (contributorName9 : string) => contributorName9.length > 0,
            then: yup.string().required('You must enter a type.')
        }),

    contributorName10: yup.string().when('contributorType10',{
            is: (contributorType10 : string | undefined) => !!contributorType10,
            then: yup.string().required('You must enter a name.')
        }),
    contributorType10: yup.string().when('contributorName10',{
            is: (contributorName10 : string) => contributorName10.length > 0,
            then: yup.string().required('You must enter a type.')
        }),

    genre: yup.string().required(),
    editions: yup.array().of(yup.object().shape({
        format: yup.string().required(),
        publicationDate: yup.number().required(),
        coverURL: yup.string().required()
    })),

    description: yup.string().required(),
    grade: yup.boolean().oneOf([true]),
    arLevel: yup.number().min(0.1).max(12.9), // Change to string with regex

    // content
    identityBased: yup.boolean().oneOf([true]),
    joyBased: yup.boolean().oneOf([true]),
    subject: yup.boolean().oneOf([true]),
    sensitiveContent: yup.string().required(), // Optional checkbox question, not sure what to do here
    
},
[
    ['contributorName1','contributorType1'],
    ['contributorName2','contributorType2'],
    ['contributorName3','contributorType3'],
    ['contributorName4','contributorType4'],
    ['contributorName5','contributorType5'],
    ['contributorName6','contributorType6'],
    ['contributorName7','contributorType7'],
    ['contributorName8','contributorType8'],
    ['contributorName9','contributorType9'],
    ['contributorName10','contributorType10'],
]
)