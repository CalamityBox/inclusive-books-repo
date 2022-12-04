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
    { value: 'suicide', label: 'Suicide / Ideation', tooltip: 'Suicide is death caused by injuring oneself with the intent to die.' },
    { value: 'war', label: 'War Crimes / Violence / Oppression', tooltip: 'An action carried out during the conduct of a war that violates accepted international rules of war.' }
]

export const raceCultureOptions: simpleFormOption[] = [
    { value: 'bipoc', label: 'General BIPOC', tooltip: 'Black, Indigenous People of Color. We use this term to refer collectively to Black people, Indigenous people, and People of Color. This is opposed to another interpretation where BIPOC can mean specifically People of Color who are Black or Indigenous. Use this as a general label if there is no particular focus, main character, or specified race or culture.' },

    { value: 'afroLatino', label: 'Afro-Latino' },

    { value: 'asian', label: 'Asian', tooltip: 'A native of Asia or a person of Asian descent.', children: ['eastAsian', 'southAsian', 'southeastAsian'] },
    { value: 'centralAsian', label: 'Central Asian', parent: 'asian' },
    { value: 'eastAsian', label: 'East Asian', tooltip: 'East Asia is the eastern region of Asia, which is defined in both geographical and ethno-cultural terms. The modern states of East Asia include China, Japan, Mongolia, North Korea, South Korea, and Taiwan.', parent: 'asian' },
    { value: 'southAsian', label: 'South Asian', tooltip: 'The southern subregion of Asia, which is defined in both geographical and ethno-cultural terms. The region consists of the countries of Afghanistan, Bangladesh, Bhutan, India, Maldives, Nepal, Pakistan, and Sri Lanka.', parent: 'asian' },
    { value: 'southeastAsian', label: 'Southeast Asian', tooltip: 'The geographical south-eastern region of Asia, consisting of the regions that are situated south of mainland China, east of the Indian subcontinent, and north-west of mainland Australia.', parent: 'asian' },
   
    { value: 'blackAfrican', label: 'Black / African', tooltip: 'A person who is Black.', children: ['centralAfrican','eastAfrican','northAfrican','westAfrican','southernAfrican'] },
    { value: 'afroCaribbean', label: 'Afro-Caribbean', parent: 'blackAfrican' },
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

interface IRaceCultureParents {
    centralAsian: string;
    eastAsian: string;
    southAsian: string;
    southeastAsian: string;

    afroCaribbean: string;
    centralAfrican: string;
    eastAfrican: string;
    northAfrican: string;
    westAfrican: string;
    southernAfrican: string;

    firstNations: string;
    nativeAmerican: string;
}

export const raceCultureParents: IRaceCultureParents = {
    centralAsian: 'asian',
    eastAsian: 'asian',
    southAsian: 'asian',
    southeastAsian: 'asian',

    afroCaribbean: 'blackAfrican',
    centralAfrican: 'blackAfrican',
    eastAfrican: 'blackAfrican',
    northAfrican: 'blackAfrican',
    westAfrican: 'blackAfrican',
    southernAfrican: 'blackAfrican',

    firstNations: 'indigenous',
    nativeAmerican: 'indigenous',
}

export const raceCultureContentOptions: simpleFormOption[] = [
    { value: 'multiRacial', label: 'Multi-Racial', tooltip: '' },
    { value: 'culturalHoliday', label: 'Cultural Holiday', tooltip: '' },
    { value: 'folklore', label: 'Folklore / Traditions', tooltip: '' },
    { value: 'immigration', label: 'Immigration / Migration', tooltip: '', children: ['firstGeneration', 'secondGeneration'] },
    { value: 'firstGeneration', label: '1st Generation Immigrant', tooltip: '', parent: 'immigration' },
    { value: 'secondGeneration', label: '2nd Generation+ Immigrant', tooltip: '', parent: 'immigration' }
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
    { value: 'intersex', label: 'Intersex', tooltip: 'A person born with sex characteristics that are not typical for male or female bodies. Sex characteristics are physical features relating to sex — including chromosomes, genitals, hormones and other reproductive anatomy — as well as secondary features that emerge from puberty.' },
    { value: 'lesbian', label: 'Lesbian', tooltip: 'A woman who is attracted to other women romantically, sexually, or both.' },
    { value: 'queer', label: 'Queer', tooltip: 'Queer is an umbrella term for people who are not heterosexual or cisgender. Has been historically used in the pejorative, but has largely been reclaimed by the community in a positive connotation.' },
    { value: 'questioning', label: 'Questioning', tooltip: 'Someone who is in the process of exploring their sexual orientation, gender identity, or gender expression.' },

    { value: 'transgender', label: 'Transgender', tooltip: 'The umbrella term for someone whose gender identity or gender expression does not correspond with their sex assigned at birth.', children: ['agender','genderfluid','nonbinary','transMan','transWoman'] },
    { value: 'agender', label: 'Agender', tooltip: 'Not having a gender / being genderless.', parent: 'transgender' },
    { value: 'genderfluid', label: 'Genderfluid', tooltip: 'A person who does not have a fixed gender.', parent: 'transgender' },
    { value: 'nonbinary', label: 'Non-binary', tooltip: 'A person who feel their gender cannot be defined within the gender binary which is compromised of male/ masculine or female/ feminine.', parent: 'transgender' },
    { value: 'transMan', label: 'Trans Man', tooltip: 'A man that was assigned female at birth.', parent: 'transgender' },
    { value: 'transWoman', label: 'Trans Woman', tooltip: 'A woman that was assigned male at birth.', parent: 'transgender' },

    { value: 'twoSpirit', label: 'Two-spirit', tooltip: 'Two-spirit is a modern, pan-Indian, umbrella term used by some Indigenous North Americans to describe Native people in their communities who fulfill a traditional third-gender ceremonial and social role in their cultures.' }
]

export const genderSexualityContentOptions: simpleFormOption[] = [
    { value: 'comingOut', label: 'Coming Out', tooltip: '' },
    { value: 'pride', label: 'Pride / Celebration', tooltip: '' }
]

export const familyStructureOptions: simpleFormOption[] = [
    { value: 'adopted', label: 'Adopted', tooltip: 'A person who has been permanently taken into the custody of an adult who acts as that person’s parent or guardian.' },
    { value: 'fosterParents', label: 'Foster Parents', tooltip: "A person temporarily serving as a parent for a child who has lost or been removed from a parent's care and who is not the person's own biological child." },
    { value: 'incarceratedParent', label: 'Incarcerated Parent(s)', tooltip: 'Parent(s) who are in the prison industrial complex.' },
    { value: 'singleParent', label: 'Single Parent', tooltip: 'A parent raising a child without a partner.' },
    { value: 'multigenerational', label: 'Multigenerational Household', tooltip: 'A household including two or more adult generations. (Most commonly seen as children, parents, and grandparents in the same household.)' },
    { value: 'raisedByRelative', label: 'Raised by Relative(s)', tooltip: 'A child raised by a relative other than their parents, such as their grandparents, older siblings, or aunts and uncles.' },
    { value: 'twoMoms', label: 'Two Moms', tooltip: 'A child that has two mothers in a lesbian or queer relationship. If checking this identity, “lesbian” or “queer” should not be checked unless the child is also a lesbian or is queer.' },
    { value: 'twoDads', label: 'Two Dads', tooltip: 'A child that has two fathers in a gay or queer relationship. If checking this identity, “gay” or “queer” should not be checked unless the child is also gay or is queer.' },
    { value: 'nonbinaryParents', label: 'Non-binary Parent(s)', tooltip: 'A child who has one or more parents who are non-binary. If checking this identity, “non-binary” or “transgender” should not be checked unless the child is also non-binary or transgender.' }
]

export const familyStructureContentOptions: simpleFormOption[] = [
    { value: 'differentRace', label: 'Adoptive Family Different Race', tooltip: '' }
]

export const neurodivergentOptions: simpleFormOption[] = [
    { value: 'anxiety', label: 'Anxiety', tooltip: 'Generalized anxiety disorder involves persistent and excessive worry that interferes with daily activities. This ongoing worry and tension may be accompanied by physical symptoms, such as restlessness, feeling on edge or easily fatigued, difficulty concentrating, muscle tension or problems sleeping.' },
    { value: 'adhd', label: 'ADHD', tooltip: 'Attention-deficit / hyperactivity disorder is marked by an ongoing pattern of inattention and / or hyperactivity-impulsivity that interferes with functioning or development.' },
    { value: 'autism', label: 'Autism', tooltip: 'A developmental disability that affects how autists experience the world. Commonly, autists describe having differences in ability or interest in socializing and communicating. They may have specific sensory needs and / or hyper fixations on special interests.' },
    { value: 'bipolar', label: 'Bipolar', tooltip: 'A disorder associated with episodes of mood swings ranging from depressive lows to manic highs.' },
    { value: 'depression', label: 'Depression', tooltip: 'A mental health disorder characterized by persistently depressed mood or loss of interest in activities, causing significant impairment in daily life.' },
    { value: 'dyslexia', label: 'Dyslexia', tooltip: 'Dyslexia is a learning disorder that involves difficulty reading due to problems identifying speech sounds and learning how they relate to letters and words (decoding). Also called a reading disability, dyslexia is a result of individual differences in areas of the brain that process language.' },
    { value: 'epilepsy', label: 'Epilepsy', tooltip: 'A disorder in which nerve cell activity in the brain is disturbed, causing seizures.' },
    { value: 'nonVerbal', label: 'Non-verbal', tooltip: 'A person who communicates primarily through methods other than speech. Can fall under the autism spectrum in many cases.' },
    { value: 'ocd', label: 'OCD', tooltip: 'Excessive thoughts (obsessions) that lead to repetitive behaviors (compulsions).' },
    { value: 'synesthesia', label: 'Synesthesia', tooltip: 'Synesthesia is an anomalous blending of the senses in which the stimulation of one modality simultaneously produces sensation in a different modality. For example, some people can hear colors, feel sounds and taste shapes.' }
]

export const neurodivergentContentOptions: simpleFormOption[] = [
    { value: 'socialSituations', label: 'Navigating Social Situations', tooltip: '' }
]

export const bodyOptions: simpleFormOption[] = [
    { value: 'bodyCharacteristics', label: 'Under-represented Body Characteristics', tooltip: 'Features of the body that are not represented frequently or positively in media, such as body hair for women.', children: ['bodyHair'] },
    { value: 'bodyHair', label: 'Body Hair', tooltip: 'In this context, body hair typically refers to hair in the upper lip, armpit, arm, leg, or brow areas.', parent: 'bodyCharacteristics' },

    { value: 'bodyType', label: 'Under-represented Body Type', tooltip: 'Body shapes and sizes that are not represented frequently or positively in media.', children: ['fat'] },
    { value: 'fat', label: 'Fat', tooltip: '', parent: 'bodyType' }
]

export const bodyContentOptions: simpleFormOption[] = [
    { value: 'bodyShaming', label: 'Body Shaming', tooltip: '' },
    { value: 'bodyPositivity', label: 'Body Positivity', tooltip: '' }
]

export const disabilityOptions: simpleFormOption[] = [
    { value: 'blind', label: 'Blind / Visually Impaired', tooltip: 'People who have very low or no visual acuity.' },
    
    { value: 'deaf', label: 'Deaf / Hard-of-hearing', tooltip: 'Deaf usually refers to a hearing loss so severe that there is very little or no functional hearing. Hard of hearing refers to a hearing loss where there may be enough residual hearing that an auditory device, such as a hearing aid or FM system, provides adequate assistance to process speech.' },
    { value: 'hearingAid', label: 'Hearing Aid', tooltip: 'A small device that fits in or on the ear, worn by a partially deaf person to amplify sound.' },
    
    { value: 'missingLimb', label: 'Missing Limb(s)', tooltip: 'The absence or partial absence of one or more limbs.' },

    { value: 'mobilityAid', label: 'Mobility Aid', tooltip: '', children: ['cane','prosthetic','wheelchair'] },
    { value: 'cane', label: 'Cane', tooltip: '', parent: 'mobilityAid' },
    { value: 'prosthetic', label: 'Prosthetic', tooltip: '', parent: 'mobilityAid' },
    { value: 'wheelchair', label: 'Wheelchair', tooltip: '', parent: 'mobilityAid' },

    { value: 'serviceAnimal', label: 'Service Animal', tooltip: '' }
]

export const disabilityContentOptions: simpleFormOption[] = [
    { value: 'option1', label: 'Option 1', tooltip: '' }
]

export const awardOptions: simpleFormOption[] = [
    { value: 'americas', label: 'Américas Award', tooltip: '' },
    { value: 'americanIndian', label: 'American Indian Youth Literature Award', tooltip: '' },
    { value: 'arabAmerican', label: 'Arab American Book Award', tooltip: '' },
    { value: 'asianPacific', label: 'Asian / Pacific American Award for Literature', tooltip: '' },
    { value: 'batchelder', label: 'Batchelder Award', tooltip: '' },
    { value: 'caldecott', label: 'Caldecott Medal', tooltip: '' },
    { value: 'carter', label: 'Carter G. Woodson Book Award', tooltip: '' },
    { value: 'coretta', label: 'Coretta Scott King Award', tooltip: '' },
    { value: 'lambda', label: 'Lambda Literary Award', tooltip: '' },
    { value: 'newberry', label: 'Newbery Medal', tooltip: '' },
    { value: 'nationalBook', label: 'National Book Award', tooltip: '' },
    { value: 'neustadt', label: 'Neustadt International Prize For Literature', tooltip: '' },
    { value: 'pura', label: 'Pura Belpré Award', tooltip: '' },
    { value: 'schneider', label: 'Schneider Family Book Award', tooltip: '' },
    { value: 'stonewall', label: 'Stonewall Book Award', tooltip: '' },
    { value: 'tomasRivera', label: 'Tomás Rivera Mexican American Children’s Book Award', tooltip: '' },
    { value: 'walter', label: 'Walter Dean Myers Award', tooltip: '' },
    { value: 'eisner', label: 'Will Eisner Award', tooltip: '' }
]

interface ICountry {
    code: string;
    label: string;
    race?: '' | 'asian' | 'eastAsian' | 'centralAsian' | 'southAsian' | 'southeastAsian' | 'blackAfrican' | 'centralAfrican' | 'eastAfrican' | 'westAfrican' | 'northAfrican' | 'southernAfrican' | 'indigenous' | 'firstNations' | 'nativeAmerican' | 'jewish' | 'latinx' | 'middleEastern' | 'muslim' | 'pacificIslander' | 'afroCaribbean' | 'latinoCaribbean' | 'afroLatino'
    region?: '' | 'Asia' | 'North America' | 'South America' | 'Africa' | 'Europe' | 'Middle East' | 'Antarctica' | 'Australia' | 'Caribbean' | 'Central America' | 'Eastern Europe'
}

export const countryOptions: ICountry[] = [
    { code: 'AD', label: 'Andorra', race: '', region: 'Europe' },
    { code: 'AE', label: 'United Arab Emirates', race: 'middleEastern', region: 'Middle East' },
    { code: 'AF', label: 'Afghanistan', race: 'centralAsian', region: 'Asia' },
    { code: 'AG', label: 'Antigua and Barbuda', race: 'afroCaribbean', region: 'Caribbean' },
    { code: 'AI', label: 'Anguilla', race: 'latinx', region: 'South America' },
    { code: 'AL', label: 'Albania', race: '', region: 'Europe' },
    { code: 'AM', label: 'Armenia', race: '', region: 'Europe' },
    { code: 'AO', label: 'Angola', race: 'centralAfrican', region: 'Africa' },
    { code: 'AQ', label: 'Antarctica', race: '', region: 'Antarctica' },
    { code: 'AR', label: 'Argentina', race: 'latinx', region: 'South America' },
    { code: 'AS', label: 'American Samoa', race: 'pacificIslander', region: 'Asia' },
    { code: 'AT', label: 'Austria', race: '', region: 'Europe' },
    { code: 'AU', label: 'Australia', race: '', region: 'Australia' },
    { code: 'AW', label: 'Aruba', race: 'afroCaribbean', region: 'Caribbean' },
    { code: 'AX', label: 'Alland Islands', race: '', region: 'Europe' },
    { code: 'AZ', label: 'Azerbaijan', race: '', region: 'Asia' },
    { code: 'BA', label: 'Bosnia and Herzegovina', race: '', region: 'Europe' },
    { code: 'BB', label: 'Barbados', race: 'afroCaribbean', region: 'Caribbean' },
    { code: 'BD', label: 'Bangladesh', race: 'southAsian', region: 'Asia' },
    { code: 'BE', label: 'Belgium', race: '', region: 'Europe' },
    { code: 'BF', label: 'Burkina Faso', race: 'westAfrican', region: 'Africa' },
    { code: 'BG', label: 'Bulgaria', race: '', region: 'Eastern Europe' },
    { code: 'BH', label: 'Bahrain', race: 'middleEastern', region: 'Middle East' },
    { code: 'BI', label: 'Burundi', race: 'eastAfrican', region: 'Africa' },
    { code: 'BJ', label: 'Benin', race: 'westAfrican', region: 'Africa' },
    { code: 'BL', label: 'Saint Barthélemy', race: 'afroCaribbean', region: 'Caribbean' },
    { code: 'BM', label: 'Bermuda', race: 'blackAfrican', region: 'Africa' },
    { code: 'BN', label: 'Brunei Darussalam', race: 'southeastAsian', region: 'Asia' },
    { code: 'BO', label: 'Bolivia', race: 'latinx', region: 'South America' },
    { code: 'BR', label: 'Brazil', race: 'latinx', region: 'South America' },
    { code: 'BS', label: 'Bahamas', race: 'afroCaribbean', region: 'Caribbean' },
    { code: 'BT', label: 'Bhutan', race: 'southAsian', region: 'Asia' },
    { code: 'BV', label: 'Bouvet Island', race: '', region: '' },
    { code: 'BW', label: 'Botswana', race: 'southernAfrican', region: 'Africa' },
    { code: 'BY', label: 'Belarus', race: '', region: 'Eastern Europe' },
    { code: 'BZ', label: 'Belize', race: 'latinx', region: 'Central America' },
    { code: 'CA', label: 'Canada', race: '', region: 'North America' },
    { code: 'CC', label: 'Cocos (Keeling) Islands', race: 'southeastAsian', region: 'Asia' },
    { code: 'CD', label: 'Congo, Democratic Republic of the', race: 'centralAfrican', region: 'Africa' },
    { code: 'CF', label: 'Central African Republic', race: 'centralAfrican', region: 'Africa' },
    { code: 'CG', label: 'Congo, Republic of the', race: 'centralAfrican', region: 'Africa' },
    { code: 'CH', label: 'Switzerland', race: '', region: 'Europe' },
    { code: 'CI', label: "Côte d'Ivoire (Ivory Coast)", race: 'westAfrican', region: 'Africa' },
    { code: 'CK', label: 'Cook Islands', race: '', region: '' },
    { code: 'CL', label: 'Chile', race: 'latinx', region: 'South America' },
    { code: 'CM', label: 'Cameroon', race: 'centralAfrican', region: 'Africa' },
    { code: 'CN', label: 'China', race: 'eastAsian', region: 'Asia' },
    { code: 'CO', label: 'Colombia', race: 'latinx', region: 'South America' },
    { code: 'CR', label: 'Costa Rica', race: 'latinx', region: 'Central America' },
    { code: 'CU', label: 'Cuba', race: '', region: '' },
    { code: 'CV', label: 'Cape Verde', race: 'westAfrican', region: 'Africa' },
    { code: 'CW', label: 'Curaçao', race: 'afroCaribbean', region: 'Caribbean' },
    { code: 'CX', label: 'Christmas Island', race: '', region: '' },
    { code: 'CY', label: 'Cyprus', race: 'middleEastern', region: 'Middle East' },
    { code: 'CZ', label: 'Czech Republic', race: '', region: 'Eastern Europe' },
    { code: 'DE', label: 'Germany', race: '', region: 'Europe'  },
    { code: 'DJ', label: 'Djibouti', race: 'eastAfrican', region: 'Africa' },
    { code: 'DK', label: 'Denmark', race: '', region: 'Europe' },
    { code: 'DM', label: 'Dominica', race: 'afroCaribbean', region: 'Caribbean' },
    { code: 'DO', label: 'Dominican Republic', race: 'afroCaribbean', region: 'Caribbean' },
    { code: 'DZ', label: 'Algeria', race: 'northAfrican', region: 'Africa' },
    { code: 'EC', label: 'Ecuador', race: 'latinx', region: 'South America' },
    { code: 'EE', label: 'Estonia', race: '', region: 'Europe' },
    { code: 'EG', label: 'Egypt', race: 'northAfrican', region: 'Africa' },
    { code: 'EH', label: 'Western Sahara', race: 'northAfrican', region: 'Africa' },
    { code: 'ER', label: 'Eritrea', race: 'eastAfrican', region: 'Africa' },
    { code: 'ES', label: 'Spain', race: '', region: 'Europe' },
    { code: 'ET', label: 'Ethiopia', race: 'eastAfrican', region: 'Africa' },
    { code: 'FI', label: 'Finland', race: '', region: 'Europe' },
    { code: 'FJ', label: 'Fiji', race: 'pacificIslander', region: '' },
    { code: 'FK', label: 'Falkland Islands (Malvinas)', race: 'latinx', region: 'South America' },
    { code: 'FM', label: 'Micronesia, Federated States of', race: 'pacificIslander', region: '' },
    { code: 'FO', label: 'Faroe Islands', race: '', region: '' },
    { code: 'FR', label: 'France', race: '', region: 'Europe' },
    { code: 'GA', label: 'Gabon', race: 'centralAfrican', region: 'Africa' },
    { code: 'GB', label: 'United Kingdom', race: '', region: 'Europe' },
    { code: 'GD', label: 'Grenada', race: 'afroCaribbean', region: 'Caribbean' },
    { code: 'GE', label: 'Georgia', race: '', region: '' },
    { code: 'GF', label: 'French Guiana', race: 'latinx', region: 'South America' },
    { code: 'GG', label: 'Guernsey', race: '', region: '' },
    { code: 'GH', label: 'Ghana', race: '', region: '' },
    { code: 'GI', label: 'Gibraltar', race: '', region: '' },
    { code: 'GL', label: 'Greenland', race: '', region: '' },
    { code: 'GM', label: 'Gambia', race: 'westAfrican', region: 'Africa' },
    { code: 'GN', label: 'Guinea', race: 'westAfrican', region: 'Africa' },
    { code: 'GP', label: 'Guadeloupe', race: '', region: '' },
    { code: 'GQ', label: 'Equatorial Guinea', race: 'centralAfrican', region: 'Africa' },
    { code: 'GR', label: 'Greece', race: '', region: 'Europe' },
    { code: 'GS', label: 'South Georgia and the South Sandwich Islands', race: 'latinx', region: 'South America' },
    { code: 'GT', label: 'Guatemala', race: 'latinx', region: 'Central America' },
    { code: 'GU', label: 'Guam', race: '', region: '' },
    { code: 'GW', label: 'Guinea-Bissau', race: 'westAfrican', region: 'Africa' },
    { code: 'GY', label: 'Guyana', race: 'latinx', region: 'South America' },
    { code: 'HK', label: 'Hong Kong', race: 'eastAsian', region: 'Asia' },
    { code: 'HM', label: 'Heard Island and McDonald Islands', race: '', region: '' },
    { code: 'HN', label: 'Honduras', race: 'latinx', region: 'Central America' },
    { code: 'HR', label: 'Croatia', race: '', region: '' },
    { code: 'HT', label: 'Haiti', race: 'afroCaribbean', region: 'Caribbean' },
    { code: 'HU', label: 'Hungary', race: '', region: 'Eastern Europe' },
    { code: 'ID', label: 'Indonesia', race: 'southeastAsian', region: 'Asia' },
    { code: 'IE', label: 'Ireland', race: '', region: 'Europe' },
    { code: 'IL', label: 'Israel', race: 'middleEastern', region: 'Middle East' },
    { code: 'IM', label: 'Isle of Man', race: '', region: '' },
    { code: 'IN', label: 'India', race: 'southAsian', region: 'Asia' },
    { code: 'IO', label: 'British Indian Ocean Territory', race: '', region: '' },
    { code: 'IQ', label: 'Iraq', race: 'middleEastern', region: 'Middle East' },
    { code: 'IR', label: 'Iran, Islamic Republic of', race: 'middleEastern', region: 'Middle East' },
    { code: 'IS', label: 'Iceland', race: '', region: 'Europe' },
    { code: 'IT', label: 'Italy', race: '', region: 'Europe' },
    { code: 'JE', label: 'Jersey', race: '', region: '' },
    { code: 'JM', label: 'Jamaica', race: 'afroCaribbean', region: 'Caribbean' },
    { code: 'JO', label: 'Jordan', race: 'middleEastern', region: 'Middle East' },
    { code: 'JP', label: 'Japan', race: 'eastAsian', region: 'Asia' },
    { code: 'KE', label: 'Kenya', race: 'eastAfrican', region: 'Africa' },
    { code: 'KG', label: 'Kyrgyzstan', race: 'centralAsian', region: 'Asia' },
    { code: 'KH', label: 'Cambodia', race: 'southeastAsian', region: 'Asia' },
    { code: 'KI', label: 'Kiribati', race: 'pacificIslander', region: '' },
    { code: 'KM', label: 'Comoros', race: 'eastAfrican', region: 'Africa' },
    { code: 'KN', label: 'Saint Kitts and Nevis', race: 'afroCaribbean', region: 'Caribbean' },
    { code: 'KP', label: "North Korea", race: 'eastAsian', region: 'Asia' },
    { code: 'KR', label: 'South Korea', race: 'eastAsian', region: 'Asia' },
    { code: 'KW', label: 'Kuwait', race: 'middleEastern', region: 'Middle East' },
    { code: 'KY', label: 'Cayman Islands', race: 'afroCaribbean', region: 'Caribbean' },
    { code: 'KZ', label: 'Kazakhstan', race: 'centralAsian', region: 'Asia' },
    { code: 'LA', label: "Laos", race: 'southeastAsian', region: 'Asia' },
    { code: 'LB', label: 'Lebanon', race: 'middleEastern', region: 'Middle East' },
    { code: 'LC', label: 'Saint Lucia', race: 'afroCaribbean', region: 'Caribbean' },
    { code: 'LI', label: 'Liechtenstein', race: '', region: 'Europe' },
    { code: 'LK', label: 'Sri Lanka', race: 'southAsian', region: 'Asia' },
    { code: 'LR', label: 'Liberia', race: 'westAfrican', region: 'Africa' },
    { code: 'LS', label: 'Lesotho', race: 'southernAfrican', region: 'Africa' },
    { code: 'LT', label: 'Lithuania', race: '', region: '' },
    { code: 'LU', label: 'Luxembourg', race: '', region: 'Europe' },
    { code: 'LV', label: 'Latvia', race: '', region: 'Europe' },
    { code: 'LY', label: 'Libya', race: 'northAfrican', region: 'Africa' },
    { code: 'MA', label: 'Morocco', race: 'northAfrican', region: 'Africa' },
    { code: 'MC', label: 'Monaco', race: '', region: 'Europe' },
    { code: 'MD', label: 'Moldova, Republic of', race: '', region: 'Eastern Europe' },
    { code: 'ME', label: 'Montenegro', race: '', region: 'Europe' },
    { code: 'MF', label: 'Saint Martin (French part)', race: '', region: '' },
    { code: 'MG', label: 'Madagascar', race: 'eastAfrican', region: 'Africa' },
    { code: 'MH', label: 'Marshall Islands', race: 'pacificIslander', region: '' },
    { code: 'MK', label: 'Macedonia, the Former Yugoslav Republic of', race: '', region: '' },
    { code: 'ML', label: 'Mali', race: 'westAfrican', region: 'Africa' },
    { code: 'MM', label: 'Myanmar', race: 'southeastAsian', region: 'Asia' },
    { code: 'MN', label: 'Mongolia', race: 'eastAsian', region: 'Asia' },
    { code: 'MO', label: 'Macao', race: 'eastAsian', region: 'Asia' },
    { code: 'MP', label: 'Northern Mariana Islands', race: 'pacificIslander', region: '' },
    { code: 'MQ', label: 'Martinique', race: '', region: '' },
    { code: 'MR', label: 'Mauritania', race: 'westAfrican', region: 'Africa' },
    { code: 'MS', label: 'Montserrat', race: '', region: '' },
    { code: 'MT', label: 'Malta', race: '', region: 'Europe' },
    { code: 'MU', label: 'Mauritius', race: 'eastAfrican', region: 'Africa' },
    { code: 'MV', label: 'Maldives', race: 'southAsian', region: 'Asia' },
    { code: 'MW', label: 'Malawi', race: 'eastAfrican', region: 'Africa' },
    { code: 'MX', label: 'Mexico', race: 'latinx', region: 'North America' },
    { code: 'MY', label: 'Malaysia', race: 'southeastAsian', region: 'Asia' },
    { code: 'MZ', label: 'Mozambique', race: 'eastAfrican', region: 'Africa' },
    { code: 'NA', label: 'Namibia', race: 'southernAfrican', region: 'Africa' },
    { code: 'NC', label: 'New Caledonia', race: 'pacificIslander', region: '' },
    { code: 'NE', label: 'Niger', race: 'westAfrican', region: 'Africa' },
    { code: 'NF', label: 'Norfolk Island', race: '', region: '' },
    { code: 'NG', label: 'Nigeria', race: 'westAfrican', region: 'Africa' },
    { code: 'NI', label: 'Nicaragua', race: 'latinx', region: 'Central America' },
    { code: 'NL', label: 'Netherlands', race: '', region: 'Europe' },
    { code: 'NO', label: 'Norway', race: '', region: 'Europe' },
    { code: 'NP', label: 'Nepal', race: 'southAsian', region: 'Asia' },
    { code: 'NR', label: 'Nauru', race: 'pacificIslander', region: '' },
    { code: 'NU', label: 'Niue', race: '', region: '' },
    { code: 'NZ', label: 'New Zealand', race: 'pacificIslander', region: '' },
    { code: 'OM', label: 'Oman', race: 'middleEastern', region: 'Middle East' },
    { code: 'PA', label: 'Panama', race: 'latinx', region: 'Central America' },
    { code: 'PE', label: 'Peru', race: 'latinx', region: 'South America' },
    { code: 'PF', label: 'French Polynesia', race: 'pacificIslander', region: '' },
    { code: 'PG', label: 'Papua New Guinea', race: '', region: '' },
    { code: 'PH', label: 'Philippines', race: 'southeastAsian', region: 'Asia' },
    { code: 'PK', label: 'Pakistan', race: 'southAsian', region: 'Asia' },
    { code: 'PL', label: 'Poland', race: '', region: 'Eastern Europe' },
    { code: 'PM', label: 'Saint Pierre and Miquelon', race: '', region: '' },
    { code: 'PN', label: 'Pitcairn', race: '', region: '' },
    { code: 'PR', label: 'Puerto Rico', race: 'latinx', region: 'North America' },
    { code: 'PS', label: 'Palestine, State of', race: 'middleEastern', region: 'Middle East' },
    { code: 'PT', label: 'Portugal', race: '', region: 'Europe' },
    { code: 'PW', label: 'Palau', race: 'pacificIslander', region: '' },
    { code: 'PY', label: 'Paraguay', race: 'latinx', region: 'South America' },
    { code: 'QA', label: 'Qatar', race: 'middleEastern', region: 'Middle East' },
    { code: 'RE', label: 'Reunion', race: 'eastAfrican', region: 'Africa' },
    { code: 'RO', label: 'Romania', race: '', region: 'Eastern Europe' },
    { code: 'RS', label: 'Serbia', race: '', region: 'Europe' },
    { code: 'RU', label: 'Russian Federation', race: '', region: 'Eastern Europe' },
    { code: 'RW', label: 'Rwanda', race: 'eastAfrican', region: 'Africa' },
    { code: 'SA', label: 'Saudi Arabia', race: 'middleEastern', region: 'Middle East' },
    { code: 'SB', label: 'Solomon Islands', race: 'pacificIslander', region: '' },
    { code: 'SC', label: 'Seychelles', race: 'eastAfrican', region: 'Africa' },
    { code: 'SD', label: 'Sudan', race: 'northAfrican', region: 'Africa' },
    { code: 'SE', label: 'Sweden', race: '', region: 'Europe' },
    { code: 'SG', label: 'Singapore', race: 'southeastAsian', region: 'Asia' },
    { code: 'SH', label: 'Saint Helena, Ascension and Tristan da Cunha', race: 'westAfrican', region: 'Africa' },
    { code: 'SI', label: 'Slovenia', race: '', region: 'Europe' },
    { code: 'SJ', label: 'Svalbard and Jan Mayen', race: '', region: '' },
    { code: 'SK', label: 'Slovakia', race: '', region: 'Eastern Europe' },
    { code: 'SL', label: 'Sierra Leone', race: 'westAfrican', region: 'Africa' },
    { code: 'SM', label: 'San Marino', race: '', region: 'Europe' },
    { code: 'SN', label: 'Senegal', race: 'westAfrican', region: 'Africa' },
    { code: 'SO', label: 'Somalia', race: 'eastAfrican', region: 'Africa' },
    { code: 'SR', label: 'Suriname', race: 'latinx', region: 'South America' },
    { code: 'SS', label: 'South Sudan', race: 'eastAfrican', region: 'Africa' },
    { code: 'ST', label: 'São Tomé and Príncipe', race: 'centralAfrican', region: 'Africa' },
    { code: 'SV', label: 'El Salvador', race: 'latinx', region: 'Central America' },
    { code: 'SX', label: 'Sint Maarten (Dutch part)', race: 'afroCaribbean', region: 'Caribbean' },
    { code: 'SY', label: 'Syrian Arab Republic', race: 'middleEastern', region: 'Middle East' },
    { code: 'SZ', label: 'Swaziland', race: 'southernAfrican', region: 'Africa' },
    { code: 'TC', label: 'Turks and Caicos Islands', race: 'afroCaribbean', region: 'Caribbean' },
    { code: 'TD', label: 'Chad', race: 'centralAfrican', region: 'Africa' },
    { code: 'TF', label: 'French Southern Territories', race: 'eastAfrican', region: 'Africa' },
    { code: 'TG', label: 'Togo', race: 'westAfrican', region: 'Africa' },
    { code: 'TH', label: 'Thailand', race: 'southeastAsian', region: 'Asia' },
    { code: 'TJ', label: 'Tajikistan', race: 'centralAsian', region: 'Asia' },
    { code: 'TK', label: 'Tokelau', race: '', region: '' },
    { code: 'TL', label: 'Timor-Leste', race: 'southeastAsian', region: 'Asia' },
    { code: 'TM', label: 'Turkmenistan', race: 'centralAsian', region: 'Asia' },
    { code: 'TN', label: 'Tunisia', race: 'northAfrican', region: 'Africa' },
    { code: 'TO', label: 'Tonga', race: 'pacificIslander', region: '' },
    { code: 'TR', label: 'Turkey', race: 'middleEastern', region: 'Middle East' },
    { code: 'TT', label: 'Trinidad and Tobago', race: '', region: '' },
    { code: 'TV', label: 'Tuvalu', race: 'pacificIslander', region: '' },
    { code: 'TW', label: 'Taiwan, Province of China', race: 'eastAsian', region: 'Asia' },
    { code: 'TZ', label: 'United Republic of Tanzania', race: 'eastAfrican', region: 'Africa' },
    { code: 'UA', label: 'Ukraine', race: '', region: 'Eastern Europe' },
    { code: 'UG', label: 'Uganda', race: 'eastAfrican', region: 'Africa' },
    { code: 'US', label: 'United States', race: '', region: '' },
    { code: 'UY', label: 'Uruguay', race: 'latinx', region: 'South America' },
    { code: 'UZ', label: 'Uzbekistan', race: 'centralAsian', region: 'Asia' },
    { code: 'VA', label: 'Holy See (Vatican City State)', race: '', region: 'Europe' },
    { code: 'VC', label: 'Saint Vincent and the Grenadines', race: 'afroCaribbean', region: 'Caribbean' },
    { code: 'VE', label: 'Venezuela', race: 'latinx', region: 'South America' },
    { code: 'VG', label: 'British Virgin Islands', race: '', region: '' },
    { code: 'VI', label: 'US Virgin Islands', race: '', region: '' },
    { code: 'VN', label: 'Vietnam', race: 'southeastAsian', region: 'Asia' },
    { code: 'VU', label: 'Vanuatu', race: 'pacificIslander', region: '' },
    { code: 'WF', label: 'Wallis and Futuna', race: 'pacificIslander', region: '' },
    { code: 'WS', label: 'Samoa', race: '', region: '' },
    { code: 'XK', label: 'Kosovo', race: '', region: '' },
    { code: 'YE', label: 'Yemen', race: 'middleEastern', region: 'Middle East' },
    { code: 'YT', label: 'Mayotte', race: 'eastAfrican', region: 'Africa' },
    { code: 'ZA', label: 'South Africa', race: 'southernAfrican', region: 'Africa' },
    { code: 'ZM', label: 'Zambia', race: 'eastAfrican', region: 'Africa' },
    { code: 'ZW', label: 'Zimbabwe', race: 'eastAfrican', region: 'Africa' }
]





