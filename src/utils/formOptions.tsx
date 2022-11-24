export interface simpleFormOption {
    value: string;
    label: string;
    tooltip?: string;
}

export const contributorOptions : simpleFormOption[] = [
    {
        value: 'author',
        label: 'Author'
    },
    {
        value: 'illustrator',
        label: 'Illustrator'
    },
    {
        value: 'editor',
        label: 'Editor'
    },
    {
        value: 'translator',
        label: 'Translator'
    },
    {
        value: 'contributor',
        label: 'Contributor'
    }
]

export const genreOptions : simpleFormOption[] = [
    { 
        value: 'anthology', 
        label: 'Anthology', 
        tooltip: 'A collection of various works. (Ex: Black Mirror)' 
    },
    { 
        value: 'biography', 
        label: 'Biography', 
        tooltip: 'A factual book about a real-world person. (Ex: I Am Malala)' 
    },
    { 
        value: 'fantasy', 
        label: 'Fantasy', 
        tooltip: 'The story does not take place in the real world. (Ex: Lord of the Rings)' 
    },
    { 
        value: 'fiction', 
        label: 'Fiction', 
        tooltip: 'A story in the real world with imaginary events. (Ex: Spider-man, Harry Potter)'
    },
    { 
        value: 'fictionalized-biography', 
        label: 'Fictionalized Biography', 
        tooltip: 'A book about a real-world person where some details, events, or people have been made up for the story (Ex: When Stars Are Scattered)' 
    },
    { 
        value: 'historical-fiction', 
        label: 'Historical Fiction', 
        tooltip: 'The plot takes past in a real-world setting related to the past, but the story itself is fictional (Ex: Gone With The Wind)' 
    },
    { 
        value: 'memoir', 
        label: 'Memoir', 
        tooltip: 'A collection of memories written by that person. (Ex: the fire never goes out)' 
    },
    { 
        value: 'nonfiction', 
        label: 'Nonfiction', 
        tooltip: 'Prose writing that is based on facts, real events, and real people (Ex: Guinness Book of World Records).' 
    }
]

export const gradeOptions: simpleFormOption[] = [
    { value: 'birth-3', label: 'Birth - 3' },
    { value: 'pre-k', label: 'Pre-k' },
    { value: '1st-grade', label: '1st Grade' },
    { value: '2nd-grade', label: '2nd Grade' },
    { value: '3rd-grade', label: '3rd Grade' },
    { value: '4th-grade', label: '4th Grade' },
    { value: '5th-grade', label: '5th Grade' },
    { value: 'middle-school', label: 'Middle School' },
    { value: 'high-school', label: 'High School' },
    { value: 'adult', label: 'Adult' }
]

export const editionOptions: simpleFormOption[] = [
    { value: 'board', label: 'Board' },
    { value: 'soft-cover-picture', label: 'Soft Cover' },
    { value: 'hard-cover-picture', label: 'Hard Cover' },
    { value: 'paperback', label: 'Paperback Chapter' },
    { value: 'hardcover-chapter', label: 'Hardcover Chapter' },
    { value: 'graphic-novel', label: 'Graphic Novel' }
]



