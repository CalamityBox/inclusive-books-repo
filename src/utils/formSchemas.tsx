import * as yup from 'yup'
import { identityBasedOptions, joyBasedOptions } from './formOptions'

export const ContributorGroupSchema = yup.object().shape({
    contributor: yup.object().shape({
        name: yup.string(),
        id: yup.string(),
        description: yup.string(),
        profilePictureUrl: yup.string()
    }),
    type: yup.string().required()
})

export const GradeSchema = yup.object().shape({
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
})

export const EditionSchema = yup.array().of(
    yup.object().shape({
        format: yup.string().required(),
        publicationDate: yup.number().required(),
        coverUrl: yup.string().required(),
        isbn: yup.array().of(yup.string()).required()
    })
)

export const CheckboxOtherSchema = yup.array().of(
    yup.object().shape({
        value: yup.string().required('Required.')
    })
)

export const GeneralSubjectSchema = yup.object().shape({
    activism: yup.boolean(),
    bullying: yup.boolean(),
    comingOfAge: yup.boolean(),
    consent: yup.boolean(),
    friendship: yup.boolean(),
    environment: yup.boolean(),
    family: yup.boolean(),
    stem: yup.boolean()
})

export const SensitiveContentSchema = yup.object().shape({
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
})

export const RaceCultureSchema = yup.object().shape({

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
})

export const RaceCultureContentSchema = yup.object().shape({
    multiRacial: yup.boolean(),
    culturalHoliday: yup.boolean(),
    folklore: yup.boolean(),
    immigration: yup.boolean(),
    firstGeneration: yup.boolean(),
    secondGeneration: yup.boolean()
})

export const GenderSexualitySchema = yup.object().shape({
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
})

export const GenderSexualityContentSchema = yup.object().shape({
    comingOut: yup.boolean(),
    pride: yup.boolean()
})

export const FamilyStructureSchema = yup.object().shape({
    adopted: yup.boolean(),
    fosterParents: yup.boolean(),
    incarceratedParent: yup.boolean(),
    singleParent: yup.boolean(),
    multigenerational: yup.boolean(),
    raisedByRelative: yup.boolean(),
    twoMoms: yup.boolean(),
    twoDads: yup.boolean(),
    nonbinaryParents: yup.boolean()
})

export const FamilyStructureContentSchema = yup.object().shape({
    differentRace: yup.boolean()
})

export const NeurodivergentSchema = yup.object().shape({
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
})

export const NeurodivergentContentSchema = yup.object().shape({
    socialSituations: yup.boolean()
})

export const BodySchema = yup.object().shape({
    bodyCharacteristics: yup.boolean(),
    bodyHair: yup.boolean(),
    bodyType: yup.boolean(),
    fat: yup.boolean()
})

export const BodyContentSchema = yup.object().shape({
    bodyShaming: yup.boolean(),
    bodyPositivity: yup.boolean()
})

export const DisabilitySchema = yup.object().shape({
    blind: yup.boolean(),
    deaf: yup.boolean(),
    hearingAid: yup.boolean(),
    missingLimb: yup.boolean(),
    mobilityAid: yup.boolean(),
    cane: yup.boolean(),
    prosthetic: yup.boolean(),
    wheelchair: yup.boolean(),
    serviceAnimal: yup.boolean()
})

export const DisabilityContentSchema = yup.object().shape({
    option1: yup.boolean()
})

export const AwardSchema = yup.object().shape({
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
})

export const InclusiveFormSchema = yup.object().shape({

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
    contributors: yup.array().of(ContributorGroupSchema),

    genre: yup.string().required('You must select a genre.'),

    editions: EditionSchema,

    description: yup.string(),

    grade: GradeSchema.test({
        name: 'at-least-one-grade',
        test: (grades : object) => Object.values(grades).includes(true),
        message: 'You must select at least one grade.'
    }),

    arLevel: yup.string().required('You must enter an AR Level.'), // Change to string with regex

    // content
    identityBased: yup.string().oneOf(identityBasedOptions.map(option => option.value), 'You must select an option.'),
    joyBased: yup.string().oneOf(joyBasedOptions.map(option => option.value), 'You must select an option.'),

    generalSubject: GeneralSubjectSchema.test({
        name: 'at-least-one-subject',
        test: (subjects : object) => Object.values(subjects).includes(true),
        message: 'You must select at least one subject.'
    }),

    generalSubjectOther: CheckboxOtherSchema,

    sensitiveContent: SensitiveContentSchema,
    sensitiveContentOther: CheckboxOtherSchema,

    nationalityEthnicity: yup.array(),

    raceCulture: RaceCultureSchema,
    raceCultureOther: CheckboxOtherSchema,
    raceCultureContent: RaceCultureContentSchema,
    raceCultureContentOther: CheckboxOtherSchema,

    genderSexuality: GenderSexualitySchema,
    genderSexualityOther: CheckboxOtherSchema,
    genderSexualityContent: GenderSexualityContentSchema,
    genderSexualityContentOther: CheckboxOtherSchema,

    familyStructure: FamilyStructureSchema,
    familyStructureOther: CheckboxOtherSchema,
    familyStructureContent: FamilyStructureContentSchema,
    familyStructureContentOther: CheckboxOtherSchema,

    neurodivergent: NeurodivergentSchema,
    neurodivergentOther: CheckboxOtherSchema,
    neurodivergentContent: NeurodivergentContentSchema,
    neurodivergentContentOther: CheckboxOtherSchema,

    body: BodySchema,
    bodyOther: CheckboxOtherSchema,
    bodyContent: BodyContentSchema,
    bodyContentOther: CheckboxOtherSchema,

    disability: DisabilitySchema,
    disabilityOther: CheckboxOtherSchema,
    disabilityContent: DisabilityContentSchema,
    disabilityContentOther: CheckboxOtherSchema,

    awards: AwardSchema,
    awardsOther: CheckboxOtherSchema,
    smartAward: yup.string()
    
},[
    ['series','seriesNumber']
])

export const ContributorFormSchema = yup.object().shape({

    name: yup.string().required('You must enter a name.'),
    description: yup.string().required('You must enter a description.'),

    largeImage: yup.string().required('You must enter an image.'),
    smallImage: yup.string().required('You must enter an image.'),

    privacy: yup.string(),

    nationalityEthnicity: yup.array(),

    raceCulture: RaceCultureSchema,
    raceCultureOther: CheckboxOtherSchema,

    genderSexuality: GenderSexualitySchema,
    genderSexualityOther: CheckboxOtherSchema,

    familyStructure: FamilyStructureSchema,
    familyStructureOther: CheckboxOtherSchema,

    neurodivergent: NeurodivergentSchema,
    neurodivergentOther: CheckboxOtherSchema,

    body: BodySchema,
    bodyOther: CheckboxOtherSchema,

    disability: DisabilitySchema,
    disabilityOther: CheckboxOtherSchema

})

export const ReviewFormSchema = yup.object().shape({
    oversimplification: yup.string().required('You must select a value.'),
    tokenism: yup.string().required('You must select a value.'),
    success: yup.string().required('You must select a value.'),
    supporting: yup.string().required('You must select a value.'),
    erasure: yup.string().required('You must select a value.'),
    dominantPopulation: yup.string().required('You must select a value.'),
    underrepresented: yup.string().required('You must select a value.'),
    friendships: yup.string().required('You must select a value.'),
    achievement: yup.string().required('You must select a value.'),
    culture: yup.string().required('You must select a value.'),
    jobsRoles: yup.string().required('You must select a value.'),
    families: yup.string().required('You must select a value.'),
    centralCharacters: yup.string().required('You must select a value.'),
    identity: yup.string().required('You must select a value.'),
    multilingual: yup.string().required('You must select a value.'),
    recommendation: yup.string().required('You must select a value.'),
    review: yup.string().required('You must enter a review.')
})

export const ReviewFormDefaultValues = {
    oversimplification: '',
    tokenism: '',
    success: '',
    supporting: '',
    erasure: '',
    dominantPopulation: '',
    underrepresented: '',
    friendships: '',
    achievement: '',
    culture: '',
    jobsRoles: '',
    families: '',
    centralCharacters: '',
    identity: '',
    multilingual: '',
    recommendation: '',
    review: ''
}