interface RepresentationInterface {
    type: string;
    identity: string[];
    content: string[]
}

interface AwardInterface {
    general: string[];
    smart: boolean;
    staffPick: boolean;
    volunteerPick: boolean
}

export interface BookInterface {
    
    id: number;
        
    title: string;
    subtitle: string;
    series: string;
    seriesNumber: string;

    authors: string[];
    illustrators: string[];

    genres: string[];
    publicationYear: string;
    formats: string[];

    gradeLevels: string[];
    arLevel: string;

    description: string;

    identityBased: string;
    joyBased: string;

    subject: string;
    sensitiveContent: string;

    representation: RepresentationInterface[];

    languages: string[];

    ownVoice: string[];

    awards: AwardInterface;

    isbn: string[];
    coverUrl: string[]

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