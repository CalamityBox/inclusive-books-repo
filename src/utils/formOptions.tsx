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

export const bodyOptions: simpleFormOption[] = [
    { value: 'bodyCharacteristics', label: 'Under-represented Body Characteristics', tooltip: 'Features of the body that are not represented frequently or positively in media, such as body hair for women.', children: ['bodyHair'] },
    { value: 'bodyHair', label: 'Body Hair', tooltip: 'In this context, body hair typically refers to hair in the upper lip, armpit, arm, leg, or brow areas.', parent: 'bodyCharacteristics' },

    { value: 'bodyType', label: 'Under-represented Body Type', tooltip: 'Body shapes and sizes that are not represented frequently or positively in media.', children: ['fat'] },
    { value: 'fat', label: 'Fat', tooltip: '', parent: 'bodyType' }
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
}

export const countryOptions: ICountry[] = [
    { code: 'AD', label: 'Andorra' },
    { code: 'AE', label: 'United Arab Emirates' },
    { code: 'AF', label: 'Afghanistan' },
    { code: 'AG', label: 'Antigua and Barbuda' },
    { code: 'AI', label: 'Anguilla' },
    { code: 'AL', label: 'Albania' },
    { code: 'AM', label: 'Armenia' },
    { code: 'AO', label: 'Angola' },
    { code: 'AQ', label: 'Antarctica' },
    { code: 'AR', label: 'Argentina' },
    { code: 'AS', label: 'American Samoa' },
    { code: 'AT', label: 'Austria' },
    { code: 'AU', label: 'Australia' },
    { code: 'AW', label: 'Aruba' },
    { code: 'AX', label: 'Alland Islands' },
    { code: 'AZ', label: 'Azerbaijan' },
    { code: 'BA', label: 'Bosnia and Herzegovina' },
    { code: 'BB', label: 'Barbados' },
    { code: 'BD', label: 'Bangladesh' },
    { code: 'BE', label: 'Belgium' },
    { code: 'BF', label: 'Burkina Faso' },
    { code: 'BG', label: 'Bulgaria' },
    { code: 'BH', label: 'Bahrain' },
    { code: 'BI', label: 'Burundi' },
    { code: 'BJ', label: 'Benin' },
    { code: 'BL', label: 'Saint Barthelemy' },
    { code: 'BM', label: 'Bermuda' },
    { code: 'BN', label: 'Brunei Darussalam' },
    { code: 'BO', label: 'Bolivia' },
    { code: 'BR', label: 'Brazil' },
    { code: 'BS', label: 'Bahamas' },
    { code: 'BT', label: 'Bhutan' },
    { code: 'BV', label: 'Bouvet Island' },
    { code: 'BW', label: 'Botswana' },
    { code: 'BY', label: 'Belarus' },
    { code: 'BZ', label: 'Belize' },
    { code: 'CA', label: 'Canada' },
    { code: 'CC', label: 'Cocos (Keeling) Islands' },
    { code: 'CD', label: 'Congo, Democratic Republic of the' },
    { code: 'CF', label: 'Central African Republic' },
    { code: 'CG', label: 'Congo, Republic of the' },
    { code: 'CH', label: 'Switzerland' },
    { code: 'CI', label: "Cote d'Ivoire" },
    { code: 'CK', label: 'Cook Islands' },
    { code: 'CL', label: 'Chile' },
    { code: 'CM', label: 'Cameroon' },
    { code: 'CN', label: 'China' },
    { code: 'CO', label: 'Colombia' },
    { code: 'CR', label: 'Costa Rica' },
    { code: 'CU', label: 'Cuba' },
    { code: 'CV', label: 'Cape Verde' },
    { code: 'CW', label: 'Curacao' },
    { code: 'CX', label: 'Christmas Island' },
    { code: 'CY', label: 'Cyprus' },
    { code: 'CZ', label: 'Czech Republic' },
    { code: 'DE', label: 'Germany',  },
    { code: 'DJ', label: 'Djibouti' },
    { code: 'DK', label: 'Denmark' },
    { code: 'DM', label: 'Dominica' },
    { code: 'DO', label: 'Dominican Republic', },
    { code: 'DZ', label: 'Algeria' },
    { code: 'EC', label: 'Ecuador' },
    { code: 'EE', label: 'Estonia' },
    { code: 'EG', label: 'Egypt' },
    { code: 'EH', label: 'Western Sahara' },
    { code: 'ER', label: 'Eritrea' },
    { code: 'ES', label: 'Spain' },
    { code: 'ET', label: 'Ethiopia' },
    { code: 'FI', label: 'Finland' },
    { code: 'FJ', label: 'Fiji' },
    { code: 'FK', label: 'Falkland Islands (Malvinas)', },
    { code: 'FM', label: 'Micronesia, Federated States of', },
    { code: 'FO', label: 'Faroe Islands' },
    { code: 'FR', label: 'France' },
    { code: 'GA', label: 'Gabon' },
    { code: 'GB', label: 'United Kingdom' },
    { code: 'GD', label: 'Grenada' },
    { code: 'GE', label: 'Georgia' },
    { code: 'GF', label: 'French Guiana' },
    { code: 'GG', label: 'Guernsey' },
    { code: 'GH', label: 'Ghana' },
    { code: 'GI', label: 'Gibraltar' },
    { code: 'GL', label: 'Greenland' },
    { code: 'GM', label: 'Gambia' },
    { code: 'GN', label: 'Guinea' },
    { code: 'GP', label: 'Guadeloupe' },
    { code: 'GQ', label: 'Equatorial Guinea' },
    { code: 'GR', label: 'Greece' },
    { code: 'GS', label: 'South Georgia and the South Sandwich Islands', },
    { code: 'GT', label: 'Guatemala' },
    { code: 'GU', label: 'Guam' },
    { code: 'GW', label: 'Guinea-Bissau' },
    { code: 'GY', label: 'Guyana' },
    { code: 'HK', label: 'Hong Kong' },
    { code: 'HM', label: 'Heard Island and McDonald Islands' },
    { code: 'HN', label: 'Honduras' },
    { code: 'HR', label: 'Croatia' },
    { code: 'HT', label: 'Haiti' },
    { code: 'HU', label: 'Hungary' },
    { code: 'ID', label: 'Indonesia' },
    { code: 'IE', label: 'Ireland' },
    { code: 'IL', label: 'Israel' },
    { code: 'IM', label: 'Isle of Man' },
    { code: 'IN', label: 'India' },
    { code: 'IO', label: 'British Indian Ocean Territory' },
    { code: 'IQ', label: 'Iraq' },
    { code: 'IR', label: 'Iran, Islamic Republic of', },
    { code: 'IS', label: 'Iceland' },
    { code: 'IT', label: 'Italy' },
    { code: 'JE', label: 'Jersey' },
    { code: 'JM', label: 'Jamaica' },
    { code: 'JO', label: 'Jordan' },
    { code: 'JP', label: 'Japan' },
    { code: 'KE', label: 'Kenya' },
    { code: 'KG', label: 'Kyrgyzstan' },
    { code: 'KH', label: 'Cambodia' },
    { code: 'KI', label: 'Kiribati' },
    { code: 'KM', label: 'Comoros' },
    { code: 'KN', label: 'Saint Kitts and Nevis' },
    { code: 'KP', label: "Korea, Democratic People's Republic of" },
    { code: 'KR', label: 'Korea, Republic of' },
    { code: 'KW', label: 'Kuwait' },
    { code: 'KY', label: 'Cayman Islands' },
    { code: 'KZ', label: 'Kazakhstan' },
    { code: 'LA', label: "Lao People's Democratic Republic" },
    { code: 'LB', label: 'Lebanon' },
    { code: 'LC', label: 'Saint Lucia' },
    { code: 'LI', label: 'Liechtenstein' },
    { code: 'LK', label: 'Sri Lanka' },
    { code: 'LR', label: 'Liberia' },
    { code: 'LS', label: 'Lesotho' },
    { code: 'LT', label: 'Lithuania' },
    { code: 'LU', label: 'Luxembourg' },
    { code: 'LV', label: 'Latvia' },
    { code: 'LY', label: 'Libya' },
    { code: 'MA', label: 'Morocco' },
    { code: 'MC', label: 'Monaco' },
    { code: 'MD', label: 'Moldova, Republic of' },
    { code: 'ME', label: 'Montenegro' },
    { code: 'MF', label: 'Saint Martin (French part)' },
    { code: 'MG', label: 'Madagascar' },
    { code: 'MH', label: 'Marshall Islands' },
    { code: 'MK', label: 'Macedonia, the Former Yugoslav Republic of' },
    { code: 'ML', label: 'Mali' },
    { code: 'MM', label: 'Myanmar' },
    { code: 'MN', label: 'Mongolia' },
    { code: 'MO', label: 'Macao' },
    { code: 'MP', label: 'Northern Mariana Islands' },
    { code: 'MQ', label: 'Martinique' },
    { code: 'MR', label: 'Mauritania' },
    { code: 'MS', label: 'Montserrat' },
    { code: 'MT', label: 'Malta' },
    { code: 'MU', label: 'Mauritius' },
    { code: 'MV', label: 'Maldives' },
    { code: 'MW', label: 'Malawi' },
    { code: 'MX', label: 'Mexico' },
    { code: 'MY', label: 'Malaysia' },
    { code: 'MZ', label: 'Mozambique' },
    { code: 'NA', label: 'Namibia' },
    { code: 'NC', label: 'New Caledonia' },
    { code: 'NE', label: 'Niger' },
    { code: 'NF', label: 'Norfolk Island' },
    { code: 'NG', label: 'Nigeria' },
    { code: 'NI', label: 'Nicaragua' },
    { code: 'NL', label: 'Netherlands' },
    { code: 'NO', label: 'Norway' },
    { code: 'NP', label: 'Nepal' },
    { code: 'NR', label: 'Nauru' },
    { code: 'NU', label: 'Niue' },
    { code: 'NZ', label: 'New Zealand' },
    { code: 'OM', label: 'Oman' },
    { code: 'PA', label: 'Panama' },
    { code: 'PE', label: 'Peru' },
    { code: 'PF', label: 'French Polynesia' },
    { code: 'PG', label: 'Papua New Guinea' },
    { code: 'PH', label: 'Philippines' },
    { code: 'PK', label: 'Pakistan' },
    { code: 'PL', label: 'Poland' },
    { code: 'PM', label: 'Saint Pierre and Miquelon' },
    { code: 'PN', label: 'Pitcairn' },
    { code: 'PR', label: 'Puerto Rico' },
    { code: 'PS', label: 'Palestine, State of' },
    { code: 'PT', label: 'Portugal' },
    { code: 'PW', label: 'Palau' },
    { code: 'PY', label: 'Paraguay' },
    { code: 'QA', label: 'Qatar' },
    { code: 'RE', label: 'Reunion' },
    { code: 'RO', label: 'Romania' },
    { code: 'RS', label: 'Serbia' },
    { code: 'RU', label: 'Russian Federation' },
    { code: 'RW', label: 'Rwanda' },
    { code: 'SA', label: 'Saudi Arabia' },
    { code: 'SB', label: 'Solomon Islands' },
    { code: 'SC', label: 'Seychelles' },
    { code: 'SD', label: 'Sudan' },
    { code: 'SE', label: 'Sweden' },
    { code: 'SG', label: 'Singapore' },
    { code: 'SH', label: 'Saint Helena' },
    { code: 'SI', label: 'Slovenia' },
    { code: 'SJ', label: 'Svalbard and Jan Mayen' },
    { code: 'SK', label: 'Slovakia' },
    { code: 'SL', label: 'Sierra Leone' },
    { code: 'SM', label: 'San Marino' },
    { code: 'SN', label: 'Senegal' },
    { code: 'SO', label: 'Somalia' },
    { code: 'SR', label: 'Suriname' },
    { code: 'SS', label: 'South Sudan' },
    { code: 'ST', label: 'Sao Tome and Principe' },
    { code: 'SV', label: 'El Salvador' },
    { code: 'SX', label: 'Sint Maarten (Dutch part)' },
    { code: 'SY', label: 'Syrian Arab Republic' },
    { code: 'SZ', label: 'Swaziland' },
    { code: 'TC', label: 'Turks and Caicos Islands' },
    { code: 'TD', label: 'Chad' },
    { code: 'TF', label: 'French Southern Territories' },
    { code: 'TG', label: 'Togo' },
    { code: 'TH', label: 'Thailand' },
    { code: 'TJ', label: 'Tajikistan' },
    { code: 'TK', label: 'Tokelau' },
    { code: 'TL', label: 'Timor-Leste' },
    { code: 'TM', label: 'Turkmenistan' },
    { code: 'TN', label: 'Tunisia' },
    { code: 'TO', label: 'Tonga' },
    { code: 'TR', label: 'Turkey' },
    { code: 'TT', label: 'Trinidad and Tobago' },
    { code: 'TV', label: 'Tuvalu' },
    { code: 'TW', label: 'Taiwan, Province of China' },
    { code: 'TZ', label: 'United Republic of Tanzania' },
    { code: 'UA', label: 'Ukraine' },
    { code: 'UG', label: 'Uganda' },
    { code: 'US', label: 'United States' },
    { code: 'UY', label: 'Uruguay' },
    { code: 'UZ', label: 'Uzbekistan' },
    { code: 'VA', label: 'Holy See (Vatican City State)' },
    { code: 'VC', label: 'Saint Vincent and the Grenadines' },
    { code: 'VE', label: 'Venezuela' },
    { code: 'VG', label: 'British Virgin Islands' },
    { code: 'VI', label: 'US Virgin Islands' },
    { code: 'VN', label: 'Vietnam' },
    { code: 'VU', label: 'Vanuatu' },
    { code: 'WF', label: 'Wallis and Futuna' },
    { code: 'WS', label: 'Samoa' },
    { code: 'XK', label: 'Kosovo' },
    { code: 'YE', label: 'Yemen' },
    { code: 'YT', label: 'Mayotte' },
    { code: 'ZA', label: 'South Africa' },
    { code: 'ZM', label: 'Zambia' },
    { code: 'ZW', label: 'Zimbabwe' }
]





