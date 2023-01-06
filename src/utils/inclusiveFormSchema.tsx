import * as yup from 'yup'
import { identityBasedOptions, joyBasedOptions } from './formOptions'
import { IFormInputs } from './Interfaces'

export const defaultValues: IFormInputs = {

    title: '',
    subtitle: '',
    series: '',
    seriesNumber: '',
    
    contributors: [
        { contributor: null, type: '' }
    ],

    genre: '',

    editions: [
        {
            editionTitle: '',
            editionSubtitle: '',
            format: '',
            publicationDate: '',
            coverUrl: '',
            languages: [],
            isbn: []
        }
    ],

    description: '',

    grade: {
        birth3: false,
        preK: false,
        firstGrade: false,
        secondGrade: false,
        thirdGrade: false,
        fourthGrade: false,
        fifthGrade: false,
        middleSchool: false,
        highSchool: false,
        adult: false
    },

    arLevel: '',
    identityBased: '',
    joyBased: '',

    generalSubject: {
        activism: false,
        bullying: false,
        comingOfAge: false,
        consent: false,
        friendship: false,
        environment: false,
        family: false,
        stem: false
    },

    generalSubjectOther: [],

    sensitiveContent: {
        bigotry: false,
        childSoldiers: false,
        colonialism: false,
        culturalAppropriation: false,
        deadnaming: false,
        depression: false,
        incarceration: false,
        internment: false,
        genocide: false,
        gunViolence: false,
        police: false,
        racism: false,
        refugees: false,
        segregation: false,
        sexualAssault: false,
        slavery: false,
        selfHarm: false,
        suicide: false,
        war: false
    },

    sensitiveContentOther: [
    ],

    nationalityEthnicity: [],

    raceCulture: {

        afroLatino: false,

        asian: false,
        centralAsian: false,
        eastAsian: false,
        southAsian: false,
        southeastAsian: false,

        blackAfrican: false,
        afroCaribbean: false,
        centralAfrican: false,
        eastAfrican: false,
        northernAfrican: false,
        southernAfrican: false,
        westAfrican: false,

        indigenous: false,
        firstNations: false,
        nativeAmerican: false,

        jewish: false,
        latinx: false,
        middleEastern: false,
        muslim: false,
        pacificIslander: false
    },

    raceCultureOther: [],

    raceCultureContent: {
        multiRacial: false,
        culturalHoliday: false,
        folklore: false,
        immigration: false,
        firstGeneration: false,
        secondGeneration: false
    },

    raceCultureContentOther: [],

    genderSexuality: {
        lgbtq: false,
        aromantic: false,
        asexual: false,

        bisexual: false,
        fluid: false,
        omnisexual: false,
        pansexual: false,
        multisexual: false,

        gay: false,
        intersex: false,
        lesbian: false,
        queer: false,
        questioning: false,

        transgender: false,
        agender: false,
        genderfluid: false,
        nonbinary: false,
        transMan: false,
        transWoman: false,

        twoSpirit: false
    },

    genderSexualityOther: [],

    genderSexualityContent: {
        comingOut: false,
        pride: false
    },

    genderSexualityContentOther: [],

    familyStructure: {
        adopted: false,
        fosterParents: false,
        incarceratedParent: false,
        singleParent: false,
        multigenerational: false,
        raisedByRelative: false,
        twoMoms: false,
        twoDads: false,
        nonbinaryParents: false
    },

    familyStructureOther: [],

    familyStructureContent: {
        differentRace: false
    },

    familyStructureContentOther: [],

    neurodivergent: {
        anxiety: false,
        adhd: false,
        autism: false,
        bipolar: false,
        depression: false,
        dyslexia: false,
        epilepsy: false,
        nonVerbal: false,
        ocd: false,
        synesthesia: false
    },

    neurodivergentOther: [],

    neurodivergentContent: {
        socialSituations: false
    },

    neurodivergentContentOther: [],

    body: {
        bodyCharacteristics: false,
        bodyHair: false,
        bodyType: false,
        fat: false
    },

    bodyOther: [],

    bodyContent: {
        bodyShaming: false,
        bodyPositivity: false
    },

    bodyContentOther: [],

    disability: {
        blind: false,
        deaf: false,
        hearingAid: false,
        missingLimb: false,
        mobilityAid: false,
        cane: false,
        prosthetic: false,
        wheelchair: false,
        serviceAnimal: false
    },

    disabilityOther: [],

    disabilityContent: {
        option1: false
    },

    disabilityContentOther: [],

    awards: {
        americas: false,
        americanIndian: false,
        arabAmerican: false,
        asianPacific: false,
        batchelder: false,
        caldecott: false,
        carter: false,
        coretta: false,
        lambda: false,
        newberry: false,
        nationalBook: false,
        neustadt: false,
        pura: false,
        schneider: false,
        stonewall: false,
        tomasRivera: false,
        walter: false,
        eisner: false
    },

    awardsOther: [],
    
    smartAward: '',

    cataloging: {}

}

export const contributor = yup.object().shape({
    name: yup.string(),
    id: yup.string(),
    description: yup.string(),
    profilePictureUrl: yup.string()
})

export const typeSchema = yup.string().required()

export const requiredStringSchema = yup.string().required()
export const requiredNumberSchema = yup.number().required()

export const contributorSchema = yup.object().shape({
    contributor: contributor,
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
        editionTitle: yup.string(),
        editionSubtitle: yup.string(),
        format: yup.string().required(),
        publicationDate: yup.number().required(),
        coverUrl: yup.string().required(),
        languages: yup.string().required(),
        isbn: yup.array().of(yup.string()).required()
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

        afroLatino: yup.boolean(),

        asian: yup.boolean(),
        centralAsian: yup.boolean(),
        eastAsian: yup.boolean(),
        southAsian: yup.boolean(),
        southeastAsian: yup.boolean(),

        blackAfrican: yup.boolean(),
        afroCaribbean: yup.boolean(),
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

    raceCultureContent: yup.object().shape({
        multiRacial: yup.boolean(),
        culturalHoliday: yup.boolean(),
        folklore: yup.boolean(),
        immigration: yup.boolean(),
        firstGeneration: yup.boolean(),
        secondGeneration: yup.boolean(),
    }),

    raceCultureContentOther: yup.array().of(yup.object().shape({
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
        intersex: yup.boolean(),
        lesbian: yup.boolean(),
        queer: yup.boolean(),
        questioning: yup.boolean(),

        transgender: yup.boolean(),
        agender: yup.boolean(),
        genderfluid: yup.boolean(),
        nonbinary: yup.boolean(),
        transMan: yup.boolean(),
        transWoman: yup.boolean(),

        twoSpirit: yup.boolean()
    }),

    genderSexualityOther: yup.array().of(yup.object().shape({
        value: yup.string().required('Required.')
    })),

    genderSexualityContent: yup.object().shape({
        comingOut: yup.boolean(),
        pride: yup.boolean()
    }),

    genderSexualityContentOther: yup.array().of(yup.object().shape({
        value: yup.string().required('Required.')
    })),

    familyStructure: yup.object().shape({
        adopted: yup.boolean(),
        fosterParents: yup.boolean(),
        incarceratedParent: yup.boolean(),
        singleParent: yup.boolean(),
        multigenerational: yup.boolean(),
        raisedByRelative: yup.boolean(),
        twoMoms: yup.boolean(),
        twoDads: yup.boolean(),
        nonbinaryParents: yup.boolean()
    }),

    familyStructureOther: yup.array().of(yup.object().shape({
        value: yup.string().required('Required.')
    })),

    familyStructureContent: yup.object().shape({
        differentRace: yup.boolean()
    }),

    familyStructureContentOther: yup.array().of(yup.object().shape({
        value: yup.string().required('Required.')
    })),

    neurodivergent: yup.object().shape({
        anxiety: yup.boolean(),
        adhd: yup.boolean(),
        autism: yup.boolean(),
        bipolar: yup.boolean(),
        depression: yup.boolean(),
        dyslexia: yup.boolean(),
        epilepsy: yup.boolean(),
        nonVerbal: yup.boolean(),
        ocd: yup.boolean(),
        synesthesia: yup.boolean()
    }),

    neurodivergentOther: yup.object().shape({
        value: yup.string().required('Required.')
    }),

    neurodivergentContent: yup.object().shape({
        socialSituations: yup.boolean()
    }),

    neurodivergentContentOther: yup.object().shape({
        value: yup.string().required('Required.')
    }),

    body: yup.object().shape({
        bodyCharacteristics: yup.boolean(),
        bodyHair: yup.boolean(),
        bodyType: yup.boolean(),
        fat: yup.boolean()
    }),

    bodyOther: yup.object().shape({
        value: yup.string().required('Required.')
    }),

    bodyContent: yup.object().shape({
        bodyShaming: yup.boolean(),
        bodyPositivity: yup.boolean()
    }),

    bodyContentOther: yup.object().shape({
        value: yup.string().required('Required.')
    }),

    disability: yup.object().shape({
        blind: yup.boolean(),
        deaf: yup.boolean(),
        hearingAid: yup.boolean(),
        missingLimb: yup.boolean(),
        mobilityAid: yup.boolean(),
        cane: yup.boolean(),
        prosthetic: yup.boolean(),
        wheelchair: yup.boolean(),
        serviceAnimal: yup.boolean()
    }),

    disabilityOther: yup.array().of(yup.object().shape({
        value: yup.string().required('Required.')
    })),

    disabilityContent: yup.object().shape({
        option1: yup.boolean()
    }),

    disabilityContentOther: yup.array().of(yup.object().shape({
        value: yup.string().required('Required.')
    })),

    awards: yup.object().shape({
        americas: yup.boolean(),
        americanIndian: yup.boolean(),
        arabAmerican: yup.boolean(),
        asianPacific: yup.boolean(),
        batchelder: yup.boolean(),
        caldecott: yup.boolean(),
        carter: yup.boolean(),
        coretta: yup.boolean(),
        lambda: yup.boolean(),
        newberry: yup.boolean(),
        nationalBook: yup.boolean(),
        neustadt: yup.boolean(),
        pura: yup.boolean(),
        schneider: yup.boolean(),
        stonewall: yup.boolean(),
        tomasRivera: yup.boolean(),
        walter: yup.boolean(),
        eisner: yup.boolean()
    }),

    awardsOther: yup.array().of(yup.object().shape({
        value: yup.string().required('Required.')
    })),
    
    smartAward: yup.string(),

    nationalityEthnicity: yup.array()
    
},[
    ['series','seriesNumber']
])