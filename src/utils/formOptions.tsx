export interface simpleFormOption {
    value: string;
    label: string;
    tooltip?: string;
    parent?: string;
    children?: string[]
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
    { value: 'birth3', label: 'Birth - 3' },
    { value: 'preK', label: 'Pre-k' },
    { value: 'firstGrade', label: '1st Grade' },
    { value: 'secondGrade', label: '2nd Grade' },
    { value: 'thirdGrade', label: '3rd Grade' },
    { value: 'fourthGrade', label: '4th Grade' },
    { value: 'fifthGrade', label: '5th Grade' },
    { value: 'middleSchool', label: 'Middle School' },
    { value: 'highSchool', label: 'High School' },
    { value: 'adult', label: 'Adult' }
]

export const editionOptions: simpleFormOption[] = [
    { value: 'board', label: 'Board' },
    { value: 'softCoverPicture', label: 'Soft Cover' },
    { value: 'hardCoverPicture', label: 'Hard Cover' },
    { value: 'paperback', label: 'Paperback Chapter' },
    { value: 'hardcoverChapter', label: 'Hardcover Chapter' },
    { value: 'graphicNovel', label: 'Graphic Novel' }
]

export const identityBasedOptions: simpleFormOption[] = [
    { value: 'identityBased', label: 'More identity-based', tooltip: 'Books that are more identity-based have a story that focuses on a specific identity or culture. Elements of that identity or culture will be central elements of the story. An example is the book The Proudest Blue, which is about a girl who is excited to start wearing a hijab.' },
    { value: 'neutral', label: 'Neutral', tooltip: 'This is an in-between category for books that might have elements of both an identity-based and identity-independent story.' },
    { value: 'identityIndependent', label: 'More identity-independent', tooltip: 'Books that are more identity-independent place little to no focus on the identity or culture of the protagonist in the events or conflict of the story. An example is the book Max Speed, which is just about a Black boy driving a race car and having fun.' }
]

export const joyBasedOptions: simpleFormOption[] = [
    { value: 'joyBased', label: 'More joy-based', tooltip: 'A story that is more joy-based tends to be a happier, upbeat, or positive story. An example of this is Eyes That Kiss In The Corners because it is about an Asian girl celebrating the way her eyes look.' },
    { value: 'neutral', label: 'Neutral', tooltip: 'This is an in-between category for books that might have elements of both a joy-based and adversity-independent story.' },
    { value: 'adversityBased', label: 'More adversity-based', tooltip: 'A story that is more adversity-based tends to be a more sad, difficult, or challenging story. This is not to be confused with conflict; both joy and adversity-based stories can have conflict, but an adversity-based book will have "heavier" subject matter.' }
]

export const generalSubjectOptions: simpleFormOption[] = [
    { value: 'activism', label: 'Activism', tooltip: 'Activism is the practice of taking direct action to achieve political or social goals.' },
    { value: 'bullying', label: 'Bullying', tooltip: 'Abuse and mistreatment of someone vulnerable by someone stronger, more powerful, etc.' },
    { value: 'comingOfAge', label: 'Coming of Age', tooltip: 'A coming-of-age novel is a book that tells the story of a character growing up and going through a series of important life-defining changes.' },
    { value: 'consent', label: 'Consent', tooltip: 'Obtaining permission, agreement, or approval to do something. In this context, it is commonly about, or an analogy for, sexual consent and healthy relationships.' },
    { value: 'environmentalism', label: 'Environmentalism', tooltip: 'Stories about or related to the environment, conservation, protecting nature, or climate change. A book about, say, hiking would be more appropriate for the nature category.' },
    { value: 'family', label: 'Family', tooltip: 'Stories about or related to family relationships. This can include non-traditional family structures, such as "found family."' },
    { value: 'friendship', label: 'Friendship', tooltip: 'Stories about making friends, learning how to be friends, or whose overall themes encompass those ideas.' },
    { value: 'nature', label: 'Nature', tooltip: 'Stories about or related to exploring, appreciating, or connecting with nature. A story about preserving nature would be better suited for the Environmentalism category.' },
    { value: 'stem', label: 'STEM', tooltip: 'Stories about or related to Science, Technology, Engineering, or Math. Note: we are typically referring to stories about people working or studying in these fields. Baby books about counting are concept books, not STEM books.' }
]

export const sensitiveContentOptions: simpleFormOption[] = [
    { value: 'bigotry', label: 'Bigotry / Discrimination', tooltip: 'This refers to stories featuring characters who exhibit prejudice or hate towards someone based on characteristics such as race, sexual orientation, disability, etc. Note that this does not refer to books that espouse or endorse such beliefs - those belong in the Questionable / Harmful Catalog.' },
    { value: 'childSoldiers', label: 'Child Soldiers', tooltip: 'A child soldier is a human being less than 18 years old, recruited by an army or simply participating in an armed conflict.' },
    { value: 'colonialism', label: 'Colonialism / Imperialism', tooltip: 'The policy or practice of acquiring full or partial political control over another country, occupying it with settlers, and exploiting it economically.' },
    { value: 'culturalAppropriation', label: 'Cultural Appropriation', tooltip: 'The unacknowledged or inappropriate adoption of the customs, practices, ideas, etc. of one people or society by members of another and typically more dominant people or society.' },
    { value: 'deadnaming', label: 'Deadnaming', tooltip: 'Calling a transgender person by their birth name when they have changed their name as part of their gender transition.' },
    { value: 'incarceration', label: 'Incarceration', tooltip: 'The state of being confined in prison; imprisonment. We are using this term in the context of the prison-industrial complex.' },
    { value: 'internment', label: 'Internment Camps', tooltip: 'A prison camp for the confinement of enemies, prisoners of war, political prisoners, etc.' },
    { value: 'genocide', label: 'Genocide', tooltip: 'The deliberate killing of a large number of people from a particular nation or ethnic group with the aim of destroying that nation or group.' },
    { value: 'gunViolence', label: 'Gun Violence', tooltip: 'Threats, harm, or violence commited by using a gun.' },
    { value: 'police', label: 'Police Brutality', tooltip: 'Police brutality is the excessive and unwarranted use of force by law enforcement against an individual or a group. It is an extreme form of police misconduct and is a civil rights violation. Police brutality includes, but is not limited to, beatings, shootings, "improper takedowns, and unwarranted use of tasers."' },
    { value: 'racism', label: 'Racism', tooltip: 'Prejudice, discrimination, or antagonism directed against a person or people on the basis of their membership in a particular racial or ethnic group, typically one that is a minority or marginalized.' },
    { value: 'refugees', label: 'Refugees', tooltip: 'A person who has been forced to leave their country in order to escape war, persecution, or natural disaster.' },
    { value: 'segregation', label: 'Segregation', tooltip: 'Systematic separation of people into racial or other ethnic groups in daily life.' },
    { value: 'sexualAssault', label: 'Sexual Assault', tooltip: "Sexual assault is an act in which one intentionally sexually touches another person without that person's consent, or coerces or physically forces a person to engage in a sexual act against their will." },
    { value: 'slavery', label: 'Slavery', tooltip: 'Slavery and enslavement are both the state and the condition of being a slave, who is someone forbidden to quit their service for an enslaver, and who is treated by the enslaver as their property.' },
    { value: 'selfHarm', label: 'Self Harm', tooltip: 'The meaning of self-harm is the act of purposely hurting oneself (as by cutting or burning the skin) as an emotional coping mechanism.' },
    { value: 'suicide', label: 'Suicide', tooltip: 'Suicide is death caused by injuring oneself with the intent to die.' },
    { value: 'war', label: 'War Crimes / Violence / Oppression', tooltip: 'An action carried out during the conduct of a war that violates accepted international rules of war.' }
]

export const raceCultureOptions: simpleFormOption[] = [
    { value: 'bipoc', label: 'General BIPOC', tooltip: 'Black, Indigenous People of Color. We use this term to refer collectively to Black people, Indigenous people, and People of Color. This is opposed to another interpretation where BIPOC can mean specifically People of Color who are Black or Indigenous. Use this as a general label if there is no particular focus, main character, or specified race or culture.' },
    { value: 'asian', label: 'Asian', tooltip: 'A native of Asia or a person of Asian descent.', children: ['eastAsian', 'southAsian', 'southeastAsian'] },
    { value: 'eastAsian', label: 'East Asian', tooltip: 'East Asia is the eastern region of Asia, which is defined in both geographical and ethno-cultural terms. The modern states of East Asia include China, Japan, Mongolia, North Korea, South Korea, and Taiwan.', parent: 'asian' },
    { value: 'southAsian', label: 'South Asian', tooltip: 'The southern subregion of Asia, which is defined in both geographical and ethno-cultural terms. The region consists of the countries of Afghanistan, Bangladesh, Bhutan, India, Maldives, Nepal, Pakistan, and Sri Lanka.', parent: 'asian' },
    { value: 'southeastAsian', label: 'Southeast Asian', tooltip: 'The geographical south-eastern region of Asia, consisting of the regions that are situated south of mainland China, east of the Indian subcontinent, and north-west of mainland Australia.', parent: 'asian' },
   
    { value: 'blackAfrican', label: 'Black / African', tooltip: 'A person who is Black.', children: ['centralAfrican','eastAfrican','northAfrican','westAfrican','southernAfrican'] },
    { value: 'centralAfrican', label: 'Central African', tooltip: 'Central Africa is a subregion of the African continent comprising various countries according to different definitions.', parent: 'blackAfrican' },
    { value: 'eastAfrican', label: 'East African', tooltip: 'Part of sub-Saharan Africa comprising two traditionally recognized regions: East Africa, made up of Kenya, Tanzania, and Uganda; and the Horn of Africa, made up of Somalia, Djibouti, Eritrea, and Ethiopia.', parent: 'blackAfrican' },
    { value: 'northAfrican', label: 'North African', tooltip: 'The part of Africa between the Mediterranean and the Sahara: consists chiefly of Morocco, Algeria, Tunisia, Libya, and Egypt.', parent: 'blackAfrican' },
    { value: 'westAfrican', label: 'West African', tooltip: 'The westernmost region of Africa. The United Nations defines Western Africa as the 16 countries of Benin, Burkina Faso, Cape Verde, The Gambia, Ghana, Guinea, Guinea-Bissau, Ivory Coast, Liberia, Mali, Mauritania, Niger, Nigeria, Senegal, Sierra Leone, and Togo, as well as Saint Helena, Ascension and Tristan da Cunha (United Kingdom Overseas Territory).', parent: 'blackAfrican' },
    { value: 'southernAfrican', label: 'Southern African', tooltip: 'The southernmost region of the African continent, comprising the countries of Angola, Botswana, Lesotho, Malawi, Mozambique, Namibia, South Africa, Swaziland, Zambia, and Zimbabwe. The island nation of Madagascar is excluded because of its distinct language and cultural heritage.', parent: 'blackAfrican' },
    
    { value: 'indigenous', label: 'Indigenous', tooltip: 'Indigenous peoples are culturally distinct ethnic groups whose members are directly descended from the earliest known inhabitants of a particular geographic region and, to some extent, maintain the language and culture of those original peoples.', children: ['firstNations','nativeAmerican'] },
    { value: 'firstNations', label: 'First Nations', tooltip: 'Any of the groups of indigenous peoples of Canada officially recognized as an administrative unit by the federal government or functioning as such without official status. The term is generally understood to exclude the Inuit and Metis.', parent: 'indigenous' },
    { value: 'nativeAmerican', label: 'Native American', tooltip: 'Native Americans, also known as American Indians, First Americans, Indigenous Americans, and other terms, are the Indigenous peoples of the mainland United States.', parent: 'indigenous' },

    { value: 'jewish', label: 'Jewish', tooltip: '' },
    { value: 'latinx', label: 'Latinx / Latine', tooltip: 'A person of Latin American origin or descent. Geographically includes Mexico, Puerto Rico, Belize, Costa Rica, El Salvador, Guatemala, Honduras, Nicaragua, Panama, Argentina, Bolivia, Brazil, Chile, Colombia, Ecuador, French Guiana, Guyana, Paraguay, Peru, Suriname, Uruguay, and Venezuela, Cuba, the Dominican Republic, Haiti.' },
    { value: 'middleEastern', label: 'Middle Eastern', tooltip: 'The Middle East is a geopolitical region commonly encompassing Arabia, Asia Minor, East Thrace, Egypt, Iran, the Levant, Mesopotamia, and the Socotra Archipelago.' },
    { value: 'muslim', label: 'Muslim', tooltip: '' },
    { value: 'pacificIslander', label: 'Pacific Islander', tooltip: 'A person of Pacific Island heritage including Indigenous Hawaiian. Nations include Northern Mariana Islands, Federate States of Micronesia, Fiji, French Polynesia, Kiribati, Marshall Islands, Nauru, New Caledonia, New Zealand, Palau, Samoa, Solomon Islands, Tonga, Tuvalu, Vanuatu, Wallis and Futuna.' }
]

export const genderSexualityOptions: simpleFormOption[] = [
    { value: 'lgbtq', label: 'LGBTQIAP2S+', tooltip: 'LGTBQIA2S+ is an acronym for Lesbian, Gay, Bisexual, Transgender, Queer and/or Questioning, Intersex, Asexual, Pansexual, Two-Spirit, and the countless affirmative ways in which people choose to self-identify. Use this as a general label if no specific identity is named, or if there is not a focus on one identity or main character.' },
    { value: 'aromantic', label: 'Aromantic', tooltip: 'Having  little or no romantic attraction to others. May or may not feel sexual attraction.' },
    { value: 'asexual', label: 'Asexual', tooltip: 'Lack of sexual attraction to others, or low or absent interest in or desire for sexual activity. It may be considered a sexual orientation or lack thereof.' },

    { value: 'bisexual', label: 'Bisexual', tooltip: 'A romantic or sexual attraction towards more than one gender.', children: ['fluid','omnisexual','pansexual','multisexual'] },
    { value: 'fluid', label: 'Fluid', tooltip: 'A person whose attractions are not fixed and include people of more than one sex over time.', parent: 'bisexual' },
    { value: 'omnisexual', label: 'Omnisexual', tooltip: 'Attraction to all sexes.', parent: 'bisexual' },
    { value: 'pansexual', label: 'Pansexual', tooltip: 'A romantic or sexual attraction towards people regardless of their sex or gender identity.', parent: 'bisexual' },
    { value: 'multisexual', label: 'Multisexual', tooltip: 'Attraction to multiple sexes', parent: 'bisexual' },

    { value: 'gay', label: 'Gay', tooltip: 'A man who is attracted to other men romantically, sexually, or both.' },
    { value: 'lesbian', label: 'Lesbian', tooltip: 'A woman who is attracted to other women romantically, sexually, or both.' },
    { value: 'queer', label: 'Queer', tooltip: 'Queer is an umbrella term for people who are not heterosexual or cisgender. Has been historically used in the pejorative, but has largely been reclaimed by the community in a positive connotation.' },
    { value: 'questioning', label: 'Questioning', tooltip: 'Someone who is in the process of exploring their sexual orientation, gender identity, or gender expression.' },

    { value: 'transgender', label: 'Transgender', tooltip: 'The umbrella term for someone whose gender identity or gender expression does not correspond with their sex assigned at birth.', children: ['agender','genderfluid','nonbinary','transMan','transWoman'] },
    { value: 'agender', label: 'Agender', tooltip: 'Not having a gender / being genderless.', parent: 'transgender' },
    { value: 'genderfluid', label: 'Genderfluid', tooltip: 'A person who does not have a fixed gender.', parent: 'transgender' },
    { value: 'nonbinary', label: 'Nonbinary', tooltip: 'A person who feel their gender cannot be defined within the gender binary which is compromised of male/ masculine or female/ feminine.', parent: 'transgender' },
    { value: 'transMan', label: 'Trans Man', tooltip: 'A man that was assigned female at birth.', parent: 'transgender' },
    { value: 'transWoman', label: 'Trans Woman', tooltip: 'A woman that was assigned male at birth.', parent: 'transgender' },
]



