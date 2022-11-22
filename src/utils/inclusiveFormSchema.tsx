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
    series: yup.string(),
    seriesNumber: yup.string(),

    // Contributors
    contributors: yup.array().of(contributorSchema),

    genre: yup.string(),
    editions: yup.array().of(yup.object().shape({
        format: yup.string(),
        publicationDate: yup.number(),
        coverURL: yup.string()
    })),

    description: yup.string(),
    grade: yup.boolean().oneOf([true]),
    arLevel: yup.number().min(0.1).max(12.9), // Change to string with regex

    // content
    identityBased: yup.boolean().oneOf([true]),
    joyBased: yup.boolean().oneOf([true]),
    subject: yup.boolean().oneOf([true]),
    sensitiveContent: yup.string(), // Optional checkbox question, not sure what to do here
    
})