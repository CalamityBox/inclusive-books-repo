import { awardOptions, bodyContentOptions, bodyOptions, countryOptions, disabilityOptions, familyStructureOptions, genderSexualityOptions, generalSubjectOptions, neurodivergentOptions, raceCultureContentOptions, raceCultureOptions, sensitiveContentOptions, simpleFormOption } from './formOptions'
import { defaultValues } from './inclusiveFormSchema'
import { ICountry, IFormInputs, IGoogleBook } from './Interfaces'

function isKeyWordInArray(keyWord: string, wordArray: string[]) {

    for (const word of wordArray) {
        // console.log('word in description is',word)
        if (keyWord === word) {
            // console.log('description contains',keyWord)
            return true
        }
    }

    return false
}

function keyWordSearch(defaultValues: any, formOptions: simpleFormOption[], bookDescription: string, bookDescriptionKeyWords: string[]) {

    // Logic: if the search term has multiple words, just do a description.includes(keyPhrase) search because it's unlikely to get a false positive
    // if the the search term is just one word, it's more likely to get a false positive (e.g. 'Caucasian' includes 'asian'), do an equality check on individual words
    for (const option of formOptions) {
        // console.log(`${option.label} iteration`)
        if (!!option?.keyWordSearch) {
            for (const searchTerm of option.keyWordSearch) {
                // console.log(`${searchTerm} iteration`)

                // If the search term has multiple words, and the phrase is in the description
                if (searchTerm.includes(' ') && bookDescription.includes(searchTerm)) {

                    // console.log('description includes',searchTerm)

                    defaultValues = {
                        ...defaultValues,
                        [option.value]: true
                    }
                    // If this option has a parent, set it to true as well
                    if (!!option?.parent) {
                        defaultValues = {
                            ...defaultValues,
                            [option.parent]: true
                        }
                    }
                    // Since we have determined this search term is in the description, we can exit the loop because we do not need to check any of the following search phrases for this same option
                    break

                } else if (isKeyWordInArray(searchTerm, bookDescriptionKeyWords)) {


                    defaultValues = {
                        ...defaultValues,
                        [option.value]: true
                    }
                    // If this option has a parent, set it to true as well
                    if (!!option?.parent) {
                        defaultValues = {
                            ...defaultValues,
                            [option.parent]: true
                        }
                    }
                    // Since we have determined this search term is in the description, we can exit the loop because we do not need to check any of the following search phrases for this same option
                    break

                }

            }
        }
    }

    return defaultValues

}

function stringIncludesAnyOf(keyWords: string[] | undefined, testString: string, matchCase: boolean) {

    if (!keyWords) {
        return false
    }

    // an includes method that can take an array
    for (const word of keyWords) {
        if (testString.includes(matchCase ? word : word.toLowerCase())) {
            return true
        }
    }

    return false
}

function countryKeyWordSearch(defaultValues: IFormInputs, bookDescription: string) {

    const nationalityEthnicity: ICountry[] = []

    for (const country of countryOptions) {
        // If the country name is in the description, add it to the nationality arrray and check the race as true
        if (bookDescription.includes(country.label.toLowerCase()) || stringIncludesAnyOf(country.commonNames, bookDescription, false)) {

            nationalityEthnicity.push({...country})

            console.log(`added ${country.label} to array`,country)

            if (!!country.race) {
                console.log(`adding ${country.race} to default values`)
                defaultValues = {
                    ...defaultValues,
                    raceCulture: {
                        ...defaultValues.raceCulture,
                        [country.race]: true
                    }
                }
                console.log('new default values are',defaultValues)
            }

            if (!!country.parentRace) {
                defaultValues = {
                    ...defaultValues,
                    raceCulture: {
                        ...defaultValues.raceCulture,
                        [country.parentRace]: true
                    }
                }
            }

        // If the country name isn't in the description, do the same check with the common names
        }
    }

    defaultValues.nationalityEthnicity = nationalityEthnicity

    return defaultValues

}

// set to adversity based if there is sensitive content
function isAdversityBased(defaultValues: IFormInputs) {

    for (const [key,value] of Object.entries(defaultValues.sensitiveContent)) {
        if (value) {
            return true
        }
    }

    return false

}

// Convert a google books api book object into an inclusive form default values object
export function convertGoogleBookToDefaultFormValues(GoogleBook: IGoogleBook) {

    console.log('selected book in conversion function is',GoogleBook)

    // Use for searching function
    const bookDescriptionForSearch = GoogleBook.volumeInfo.description
        .toLowerCase()
        .replace(/[^a-zA-z\s]/g,' ')
        .replace(/\s\s+/g,' ')

    const bookDescriptionKeyWords = bookDescriptionForSearch.split(' ')

    let defaultValues: IFormInputs = {

        googleBooksId: GoogleBook.id,

        title: GoogleBook.volumeInfo.title,
        subtitle: !!GoogleBook.volumeInfo?.subtitle ? GoogleBook.volumeInfo.subtitle : '',
        series: '',
        seriesNumber: '',

        publisher: !!GoogleBook.volumeInfo?.publisher ? GoogleBook.volumeInfo.publisher : '',
        
        // Ternary: if no authors, set default for one blank author. If it has authors, map each author to a contributor object
        contributors: !!GoogleBook.volumeInfo?.authors ? 
            GoogleBook.volumeInfo.authors.map((authorName: string) => ({ contributor: { name: authorName, id: '' }, type: 'Author' })) 
            : 
            [{ contributor: { name: '', id: '' }, type: 'Author' }],
    
        genre: '',
    
        editions: [
            {
                format: '',
                publicationDate: GoogleBook.volumeInfo.publishedDate.slice(0,4),
                coverUrl: `https://books.google.com/books/publisher/content/images/frontcover/${GoogleBook.id}?fife=w400-h600&source=gbs_api`,
                isbn: GoogleBook.volumeInfo.industryIdentifiers
                    .filter( (isbn) => isbn.type === 'ISBN_13'  )
                    .map( (isbn) => isbn.identifier )
            }
        ],
    
        description: GoogleBook.volumeInfo.description,
    
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
    
        generalSubject: keyWordSearch({
            activism: false,
            bullying: false,
            comingOfAge: false,
            consent: false,
            friendship: false,
            environment: false,
            family: false,
            stem: false
        }, generalSubjectOptions, bookDescriptionForSearch, bookDescriptionKeyWords),
    
        generalSubjectOther: [],
    
        sensitiveContent: keyWordSearch({
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
        }, sensitiveContentOptions, bookDescriptionForSearch, bookDescriptionKeyWords),
    
        sensitiveContentOther: [],
    
        nationalityEthnicity: [],
    
        raceCulture: keyWordSearch({
    
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
        }, raceCultureOptions, bookDescriptionForSearch, bookDescriptionKeyWords),
    
        raceCultureOther: [],
    
        raceCultureContent: keyWordSearch({
            multiRacial: false,
            culturalHoliday: false,
            folklore: false,
            immigration: false,
            firstGeneration: false,
            secondGeneration: false
        }, raceCultureContentOptions, bookDescriptionForSearch, bookDescriptionKeyWords),
    
        raceCultureContentOther: [],
    
        genderSexuality: keyWordSearch({
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
        }, genderSexualityOptions, bookDescriptionForSearch, bookDescriptionKeyWords),
    
        genderSexualityOther: [],
    
        genderSexualityContent: {
            comingOut: false,
            pride: false
        },
    
        genderSexualityContentOther: [],
    
        familyStructure: keyWordSearch({
            adopted: false,
            fosterParents: false,
            incarceratedParent: false,
            singleParent: false,
            multigenerational: false,
            raisedByRelative: false,
            twoMoms: false,
            twoDads: false,
            nonbinaryParents: false
        }, familyStructureOptions, bookDescriptionForSearch, bookDescriptionKeyWords),
    
        familyStructureOther: [],
    
        familyStructureContent: {
            differentRace: false,
        },
    
        familyStructureContentOther: [],
    
        neurodivergent: keyWordSearch({
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
        }, neurodivergentOptions, bookDescriptionForSearch, bookDescriptionKeyWords),
    
        neurodivergentOther: [],
    
        neurodivergentContent: {
            socialSituations: false,
        },
    
        neurodivergentContentOther: [],
    
        body: keyWordSearch({
            bodyCharacteristics: false,
            bodyHair: false,
            bodyType: false,
            fat: false
        }, bodyOptions, bookDescriptionForSearch, bookDescriptionKeyWords),
    
        bodyOther: [],
    
        bodyContent: keyWordSearch({
            bodyShaming: false,
            bodyPositivity: false
        }, bodyContentOptions, bookDescriptionForSearch, bookDescriptionKeyWords),
    
        bodyContentOther: [],
    
        disability: keyWordSearch({
            blind: false,
            deaf: false,
            hearingAid: false,
            missingLimb: false,
            mobilityAid: false,
            cane: false,
            prosthetic: false,
            wheelchair: false,
            serviceAnimal: false
        }, disabilityOptions, bookDescriptionForSearch, bookDescriptionKeyWords),
    
        disabilityOther: [],
    
        disabilityContent: {
            option1: false
        },
    
        disabilityContentOther: [],
    
        awards: keyWordSearch({
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
        }, awardOptions, bookDescriptionForSearch, bookDescriptionKeyWords),
    
        awardsOther: [],
        
        smartAward: '',

        cataloging: []
    
    }

    defaultValues = countryKeyWordSearch(defaultValues, bookDescriptionForSearch)
    defaultValues.joyBased = isAdversityBased(defaultValues) ? 'adversityBased' : ''

    return defaultValues

}