import * as yup from 'yup'
import { identityBasedOptions, joyBasedOptions } from './formOptions';

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

    genre: string;

    editions: {
        format: string;
        publicationDate: string;
        coverUrl: string;
        isbn: string;
    }[]

    description: string;

    grade: {
        birth3: boolean;
        preK: boolean;
        firstGrade: boolean;
        secondGrade: boolean;
        thirdGrade: boolean;
        fourthGrade: boolean;
        fifthGrade: boolean;
        middleSchool: boolean;
        highSchool: boolean;
        adult: boolean;
    }

    arLevel: number;
    identityBased: boolean;
    joyBased: boolean;
    subject: boolean;
    sensitiveContent: string;

    

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
        publicationDate: yup.number().required(),
        coverUrl: yup.string().required(),
        isbn: yup.string().required()
    })),

    description: yup.string(),

    grade: yup.object().shape({
        birth3: yup.boolean(),
        preK: yup.boolean(),
        firstGrade: yup.boolean(),
        secondGrade: yup.boolean(),
        thirdGrade: yup.boolean(),
        fourthGrade: yup.boolean(),
        fifthGrade: yup.boolean(),
        middleSchool: yup.boolean(),
        highSchool: yup.boolean(),
        adult: yup.boolean()
    }).test({
        name: 'at-least-one-grade',
        test: (grades : object) => Object.values(grades).includes(true),
        message: 'You must select at least one grade.'
    }),

    arLevel: yup.string().required('You must enter an AR Level.'), // Change to string with regex

    // content
    identityBased: yup.string().oneOf(identityBasedOptions.map(option => option.value), 'You must select an option.'),
    joyBased: yup.string().oneOf(joyBasedOptions.map(option => option.value), 'You must select an option.'),

    generalSubject: yup.object().shape({
        activism: yup.boolean(),
        bullying: yup.boolean(),
        comingOfAge: yup.boolean(),
        consent: yup.boolean(),
        friendship: yup.boolean(),
        environment: yup.boolean(),
        family: yup.boolean(),
        stem: yup.boolean()
    }).test({
        name: 'at-least-one-subject',
        test: (subjects : object) => Object.values(subjects).includes(true),
        message: 'You must select at least one subject.'
    }),

    generalSubjectOther: yup.array().of(yup.object().shape({
        value: yup.string().required('Required.')
    })),

    sensitiveContent: yup.object().shape({
        bigotry: yup.boolean(),
        childSoldiers: yup.boolean(),
        colonialism: yup.boolean(),
        culturalAppropriation: yup.boolean(),
        deadnaming: yup.boolean(),
        depression: yup.boolean(),
        incarceration: yup.boolean(),
        internment: yup.boolean(),
        genocide: yup.boolean(),
        gunViolence: yup.boolean(),
        police: yup.boolean(),
        racism: yup.boolean(),
        refugees: yup.boolean(),
        segregation: yup.boolean(),
        sexualAssault: yup.boolean(),
        slavery: yup.boolean(),
        selfHarm: yup.boolean(),
        suicide: yup.boolean(),
        war: yup.boolean()
    }),

    sensitiveContentOther: yup.array().of(yup.object().shape({
        value: yup.string().required('Required.')
    })),

    raceCulture: yup.object().shape({
        asian: yup.boolean(),
        eastAsian: yup.boolean(),
        southAsian: yup.boolean(),
        southeastAsian: yup.boolean(),

        blackAfrican: yup.boolean(),
        centralAfrican: yup.boolean(),
        eastAfrican: yup.boolean(),
        northernAfrican: yup.boolean(),
        southernAfrican: yup.boolean(),
        westAfrican: yup.boolean(),

        indigenous: yup.boolean(),
        firstNations: yup.boolean(),
        nativeAmerican: yup.boolean(),

        jewish: yup.boolean(),
        latinx: yup.boolean(),
        middleEastern: yup.boolean(),
        muslim: yup.boolean(),
        pacificIslander: yup.boolean()
    }),

    raceCultureOther: yup.array().of(yup.object().shape({
        value: yup.string().required('Required.')
    })),

    genderSexuality: yup.object().shape({
        lgbtq: yup.boolean(),
        aromantic: yup.boolean(),
        asexual: yup.boolean(),

        bisexual: yup.boolean(),
        fluid: yup.boolean(),
        omnisexual: yup.boolean(),
        pansexual: yup.boolean(),
        multisexual: yup.boolean(),

        gay: yup.boolean(),
        lesbian: yup.boolean(),
        queer: yup.boolean(),
        questioning: yup.boolean(),

        transgender: yup.boolean(),
        agender: yup.boolean(),
        genderfluid: yup.boolean(),
        nonbinary: yup.boolean(),
        transMan: yup.boolean(),
        transWoman: yup.boolean()
    }),

    genderSexualityOther: yup.array().of(yup.object().shape({
        value: yup.string().required('Required.')
    })),
    
},[
    ['series','seriesNumber']
])