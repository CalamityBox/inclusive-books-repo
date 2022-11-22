import * as yup from 'yup'

export interface IFormInputs {
    
    title: string;
    subtitle: string;
    submit: any;
    series: string;
    seriesNumber: string;
    
    contributors: {
        name: string;
        type: string;
    }[]

}

export const nameSchema = yup.string().required('You must enter a name.')
export const typeSchema = yup.string().required('You must enter a type.')

export const contributorSchema = yup.object().shape({

    name: nameSchema,
    type: typeSchema

})

export const editionSchema = yup.object().shape({
    format: yup.string(),
    publicationDate: yup.string(),
    coverURL: yup.string()
})

export const inclusiveFormSchema = yup.object().shape({

    // biographical info about book
    title: yup.string().required('You must enter a title.'),
    subtitle: yup.string(),

    series: yup.string()
        .when('seriesNumber',{
            is: (seriesNumber: string) => !!seriesNumber,
            then: yup.string().required('You must enter the series name.')
        }),
    seriesNumber: yup.string()
        .when('series',{
            is: (series: string) => !!series,
            then: yup.string().required('You must enter the series number.')
        }),

    // Contributors
    contributors: yup.array().of(contributorSchema),

    genre: yup.string().required('You must select a genre.'),

    editions: yup.array().of(yup.object().shape({
        format: yup.string(),
        publicationDate: yup.number(),
        coverURL: yup.string()
    })),

    description: yup.string(),

    grade: yup.object().shape({
        option0: yup.boolean(),
        option1: yup.boolean(),
        option2: yup.boolean(),
        option3: yup.boolean(),
        option4: yup.boolean(),
        option5: yup.boolean(),
        option6: yup.boolean(),
        option7: yup.boolean(),
        option8: yup.boolean(),
        option9: yup.boolean()
    }).test({
        name: 'at-least-one-grade',
        test: (grades : object) => Object.values(grades).includes(true),
        message: 'You must select at least one grade.'
    }),

    arLevel: yup.number().min(0.1).max(12.9), // Change to string with regex

    // content
    identityBased: yup.boolean().oneOf([true]),
    joyBased: yup.boolean().oneOf([true]),
    subject: yup.boolean().oneOf([true]),
    sensitiveContent: yup.string(), // Optional checkbox question, not sure what to do here
    
},[
    ['series','seriesNumber']
])