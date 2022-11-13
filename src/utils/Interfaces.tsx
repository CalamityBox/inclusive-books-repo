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