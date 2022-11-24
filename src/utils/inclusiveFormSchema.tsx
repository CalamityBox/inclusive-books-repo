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

export const nameSchema = yup.string().required()
export const typeSchema = yup.string().required()

export const requiredStringSchema = yup.string().required()
export const requiredNumberSchema = yup.number().required()

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
        format: yup.string().required(),
            // .when(['publicationDate','coverUrl','isbn'],{
            //     is: (publicationDate : string, coverUrl : string, isbn: string) => !!publicationDate || !!coverUrl || !!isbn,
            //     then: yup.string().required()
            // }),
        publicationDate: yup.number().required(),
            // .when(['format','coverUrl','isbn'],{
            //     is: (format : string, coverUrl : string, isbn: string) => !!format || !!coverUrl || !!isbn,
            //     then: yup.string().required()
            // }),
        coverUrl: yup.string().required(),
            // .when(['format','publicationDate','isbn'],{
            //     is: (format : string, publicationDate : string, isbn: string) => !!format || !!publicationDate || !!isbn,
            //     then: yup.string().required()
            // }),
        isbn: yup.string().required()
            // .when(['format','publicationDate','coverUrl'],{
            //     is: (format : string, publicationDate : string, coverUrl : string) => !!format || !!publicationDate || !!coverUrl,
            //     then: yup.string().required()
            // })
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

    arLevel: yup.number().min(0.1).max(12.9).required('You must enter an AR Level.'), // Change to string with regex

    // content
    identityBased: yup.boolean().oneOf([true]),
    joyBased: yup.boolean().oneOf([true]),
    subject: yup.boolean().oneOf([true]),
    sensitiveContent: yup.string(), // Optional checkbox question, not sure what to do here
    
},[
    ['series','seriesNumber'],
    // ['format','publicationDate'],
    // ['format','coverUrl'],
    // ['format','isbn'],
    // ['publicationDate','coverUrl'],
    // ['publicationDate','isbn'],
    // ['coverUrl','isbn']
])