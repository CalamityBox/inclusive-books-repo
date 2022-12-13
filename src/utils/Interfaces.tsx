interface Representation {
    label: string;
    identities: string[];
    content?: string[]
}

interface AwardInterface {
    general: string[];
    smart: boolean;
    staffPick: boolean;
    volunteerPick: boolean
}

interface Contributor {
    id: string;
    name: string;
}

interface Edition {
    coverURL: string;
    format: string;
    isbn: string[];
    languages: string[];
    publicationDate: string | number;
}

export interface BookInterface {
    
    content: {
        adversityBased: number;
        genres: string | string[];
        identityBased: number;
    };

    contributors: {
        authors: Contributor[];
        illustrators: Contributor[];
        list: string[]
    };

    editions: Edition[]

    info: {
        arLevel: number;
        description: string;
        firstPublicationDate: string | number;
        fullTitle: string;
        grades: string[];
        isbnList: string[];
        subtitle: string;
        title: string;
    };

    metadata: {
        cataloger: string;
        id: string;
        timestamp: string;
    };

    representation: Representation[];

    reviews: {
        negative: number;
        neutral: number;
        numReviews: number;
        positive: number;
        ids?: string[];
    };

}

// Book Cards
export interface BookCardInterface {
    books: React.ReactElement[];
    page: number;
    booksPerPage: number;
    handleChipClick: Function;
}

// Filters
export interface filterCategoryInterface {
    label: string;
    checked: boolean;
    indeterminate: boolean;
    subOptions: [] | { label: string; checked: boolean }[]
}

export interface ICountry {
    code: string;
    label: string;
    race?: '' | 'asian' | 'eastAsian' | 'centralAsian' | 'southAsian' | 'southeastAsian' | 'blackAfrican' | 'centralAfrican' | 'eastAfrican' | 'westAfrican' | 'northAfrican' | 'southernAfrican' | 'indigenous' | 'firstNations' | 'nativeAmerican' | 'jewish' | 'latinx' | 'middleEastern' | 'muslim' | 'pacificIslander' | 'afroCaribbean' | 'latinoCaribbean' | 'afroLatino',
    parentRace?: 'asian' | 'blackAfrican' | 'indigenous'
    region?: '' | 'Asia' | 'North America' | 'South America' | 'Africa' | 'Europe' | 'Middle East' | 'Antarctica' | 'Australia' | 'Caribbean' | 'Central America' | 'Eastern Europe'
    commonNames?: string[];
}

export interface IDynamicOtherString {
    id: number | string;
    value: string;
}

export interface IFormInputs {
    
    title: string;
    subtitle: string;
    series: string;
    seriesNumber: string;
    
    contributors: {
        contributor: IContributor | null;
        type: string;
    }[]

    genre: string;

    editions: {
        format: string;
        publicationDate: string;
        coverUrl: string;
        isbn: string[];
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

    arLevel: string;
    identityBased: string;
    joyBased: string;

    generalSubject: {
        activism: boolean;
        bullying: boolean;
        comingOfAge: boolean;
        consent: boolean;
        friendship: boolean;
        environment: boolean;
        family: boolean;
        stem: boolean;
    }

    generalSubjectOther: IDynamicOtherString[];

    sensitiveContent: {
        bigotry: boolean;
        childSoldiers: boolean;
        colonialism: boolean;
        culturalAppropriation: boolean;
        deadnaming: boolean;
        depression: boolean;
        incarceration: boolean;
        internment: boolean;
        genocide: boolean;
        gunViolence: boolean;
        police: boolean;
        racism: boolean;
        refugees: boolean;
        segregation: boolean;
        sexualAssault: boolean;
        slavery: boolean;
        selfHarm: boolean;
        suicide: boolean;
        war: boolean;
    }

    sensitiveContentOther: IDynamicOtherString[];

    nationalityEthnicity: (ICountry | string)[];

    raceCulture: {

        afroLatino: boolean;

        asian: boolean;
        centralAsian: boolean;
        eastAsian: boolean;
        southAsian: boolean;
        southeastAsian: boolean;

        blackAfrican: boolean;
        afroCaribbean: boolean;
        centralAfrican: boolean;
        eastAfrican: boolean;
        northernAfrican: boolean;
        southernAfrican: boolean;
        westAfrican: boolean;

        indigenous: boolean;
        firstNations: boolean;
        nativeAmerican: boolean;

        jewish: boolean;
        latinx: boolean;
        middleEastern: boolean;
        muslim: boolean;
        pacificIslander: boolean;
    }

    raceCultureOther: IDynamicOtherString[];

    raceCultureContent: {
        multiRacial: boolean;
        culturalHoliday: boolean;
        folklore: boolean;
        immigration: boolean;
        firstGeneration: boolean;
        secondGeneration: boolean;
    }

    raceCultureContentOther: IDynamicOtherString[];

    genderSexuality: {
        lgbtq: boolean;
        aromantic: boolean;
        asexual: boolean;

        bisexual: boolean;
        fluid: boolean;
        omnisexual: boolean;
        pansexual: boolean;
        multisexual: boolean;

        gay: boolean;
        intersex: boolean;
        lesbian: boolean;
        queer: boolean;
        questioning: boolean;

        transgender: boolean;
        agender: boolean;
        genderfluid: boolean;
        nonbinary: boolean;
        transMan: boolean;
        transWoman: boolean;

        twoSpirit: boolean;
    }

    genderSexualityOther: IDynamicOtherString[];

    genderSexualityContent: {
        comingOut: boolean;
        pride: boolean;
    }

    genderSexualityContentOther: IDynamicOtherString[];

    familyStructure: {
        adopted: boolean;
        fosterParents: boolean;
        incarceratedParent: boolean;
        singleParent: boolean;
        multigenerational: boolean;
        raisedByRelative: boolean;
        twoMoms: boolean;
        twoDads: boolean;
        nonbinaryParents: boolean;
    }

    familyStructureOther: IDynamicOtherString[];

    familyStructureContent: {
        differentRace: boolean;
    }

    familyStructureContentOther: IDynamicOtherString[];

    neurodivergent: {
        anxiety: boolean;
        adhd: boolean;
        autism: boolean;
        bipolar: boolean;
        depression: boolean;
        dyslexia: boolean;
        epilepsy: boolean;
        nonVerbal: boolean;
        ocd: boolean;
        synesthesia: boolean;
    }

    neurodivergentOther: IDynamicOtherString[];

    neurodivergentContent: {
        socialSituations: boolean;
    }

    neurodivergentContentOther: IDynamicOtherString[];

    body: {
        bodyCharacteristics: boolean;
        bodyHair: boolean;
        bodyType: boolean;
        fat: boolean;
    }

    bodyOther: IDynamicOtherString[];

    bodyContent: {
        bodyShaming: boolean;
        bodyPositivity: boolean;
    }

    bodyContentOther: IDynamicOtherString[];

    disability: {
        blind: boolean;
        deaf: boolean;
        hearingAid: boolean;
        missingLimb: boolean;
        mobilityAid: boolean;
        cane: boolean;
        prosthetic: boolean;
        wheelchair: boolean;
        serviceAnimal: boolean;
    }

    disabilityOther: IDynamicOtherString[];

    disabilityContent: {
        option1: boolean;
    }

    disabilityContentOther: IDynamicOtherString[];

    awards: {
        americas: boolean;
        americanIndian: boolean;
        arabAmerican: boolean;
        asianPacific: boolean;
        batchelder: boolean;
        caldecott: boolean;
        carter: boolean;
        coretta: boolean;
        lambda: boolean;
        newberry: boolean;
        nationalBook: boolean;
        neustadt: boolean;
        pura: boolean;
        schneider: boolean;
        stonewall: boolean;
        tomasRivera: boolean;
        walter: boolean;
        eisner: boolean;
    }

    awardsOther: IDynamicOtherString[],
    
    smartAward: string;

}

export interface IGoogleBook {
    accessInfo: any;
    etag: string;
    id: string;
    kind: string;
    saleInfo: any;
    searchInfo: any;
    selfLink: string;
    setSelectedBook: any;
    volumeInfo: {
        allowAnonLogging: any;
        authors?: string[];
        averageRating: number;
        canonicalVolumeLink: string;
        categories: string[];
        contentVersion: string;
        description: string;
        imageLinks: {
            smallThumbnail: string;
            thumbnail: string;
        }
        industryIdentifiers: { type: 'ISBN_10' | 'ISBN_13', identifier: string }[];
        infoLink: string;
        language: string;
        maturityRating: string;
        pageCount: number;
        panelizationSummary: any;
        previewLink: string;
        printType: string;
        publishedDate: string;
        publisher: string;
        ratingsCount: number;
        readingModes: any;
        subtitle?: string;
        title: string;
    }

}

export interface IContributor {
    name: string;
    id: string;
    description?: string;
    profilePictureUrl?: string;
    books?: {
        id: string;
        type: string[]
    }[]
}