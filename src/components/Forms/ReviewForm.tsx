import React from 'react'

import ControlledRadio from '../FormComponents/ControlledRadio'
import ControlledTextField from '../FormComponents/ControlledTextField'
import FormCard from '../FormComponents/FormCard'

export default function ReviewForm() {

    const yesNoUnsureOptions = [
        { value: 'yes', label: 'Yes' },
        { value: 'no', label: 'No' },
        { value: 'unsure', label: 'Unsure' },
    ]

    return (
        <>
            <FormCard label='Oversimplification & Stereotypes' required={true} description="Are there simplified generalizations of [a population's] interests, food, families? Are costumes/customs capriciously appropriated?  Are there any excessive or unwarranted generalizations of groups?">
                <ControlledRadio
                    label='oversimplification'
                    name='oversimplification'
                    options={yesNoUnsureOptions}
                />
            </FormCard>

            <FormCard label='Tokenism' required={true} description='Do all characters look and act the same despite image differences?'>
                <ControlledRadio
                    label='tokenism'
                    name='tokenism'
                    options={yesNoUnsureOptions}
                />
            </FormCard>

            <FormCard label='"Dominant" measure of success' required={true} description='Are the standards for success measured against behavior of dominant culture and values (e.g., nuclear family, high paying job(s), traditional gender roles, white/dominant culture as "savior")? Are nonwhite characters or cultures depicted as exotic, strange, or abnormal?'>
                <ControlledRadio
                    label='success'
                    name='success'
                    options={yesNoUnsureOptions}
                />
            </FormCard>

            <FormCard label='[Population] in supporting roles' required={true} description='Are non-dominant characters depicted as sidekicks? Are they habitually seeking help from white/dominant character(s)? Do they need extraordinary qualities to gain acceptance or to "stand out"?  Must they conform to white, male behavior standards, or "be like"? Are they required to understand, forgive, or change injustice?  Are their problems to be resolved through benevolent intervention of a dominant person?'>
                <ControlledRadio
                    label='supporting'
                    name='supporting'
                    options={yesNoUnsureOptions}
                />
            </FormCard>

            <FormCard label='Erasure' required={true} description="Is population's history erased or trivialized? Is poverty portrayed as natural? Is oppression accepted as inevitable and, therefore, acceptable, i.e., 'just the way things are'?">
                <ControlledRadio
                    label='erasure'
                    name='erasure'
                    options={yesNoUnsureOptions}
                />
            </FormCard>

            <FormCard label='Dominant Population' required={true} description='Do white characters possess the majority of power, leadership abilities, agency, or decision-making roles? Are family depictions stereotypical, e.g., father making major decisions.'>
                <ControlledRadio
                    label='dominantPopulation'
                    name='dominantPopulation'
                    options={yesNoUnsureOptions}
                />
            </FormCard>

            <FormCard label='Historically underrepresented characters in leading roles' required={true} description='If present, do they lead the way, have adventures, solve problems, and help others? Are they "doers", making decisions? Are they kids being kids?'>
                <ControlledRadio
                    label='underrepresented'
                    name='underrepresented'
                    options={yesNoUnsureOptions}
                />
            </FormCard>

            <FormCard label='Equality in friendships' required={true} description='Do both/all characters contribute to the success of friendship/s equally?'>
                <ControlledRadio
                    label='friendships'
                    name='friendships'
                    options={yesNoUnsureOptions}
                />
            </FormCard>

            <FormCard label='Achievement' required={true} description='Are the achievements of the represented population based on their own initiative, persistence, abilities, and intelligence?'>
                <ControlledRadio
                    label='achievement'
                    name='achievement'
                    options={yesNoUnsureOptions}
                />
            </FormCard>

            <FormCard label='Cultural Insights' required={true} description='Does the text offer genuine insights into another way of life or culture?'>
                <ControlledRadio
                    label='culture'
                    name='culture'
                    options={yesNoUnsureOptions}
                />
            </FormCard>

            <FormCard label='Jobs + Roles' required={true} description='Are power careers held by white people, e.g., executives and other authority figures? Are males and females allowed to defy non-traditional and traditional roles in family, at work, in leisure activities, and in attitude? Is  their work depicted with dignity?'>
                <ControlledRadio
                    label='jobsRoles'
                    name='jobsRoles'
                    options={yesNoUnsureOptions}
                />
            </FormCard>

            <FormCard label='Families' required={true} description='Do depicted families include households with single-parents, adopted and foster children, stepparents, same-sex parents, extended family members (e.g., grandparents), adult children, or surrogate parents?'>
                <ControlledRadio
                    label='families'
                    name='families'
                    options={yesNoUnsureOptions}
                />
            </FormCard>

            <FormCard label='Central Characters' required={true} description='Are they [population] represented as central character(s) in story and illustrations? Does a central character have an internal psychology, emotional life, powers of reflection, motivations, and a point of view?'>
                <ControlledRadio
                    label='centralCharacters'
                    name='centralCharacters'
                    options={yesNoUnsureOptions}
                />
            </FormCard>

            <FormCard label='Identity' required={true} description='Are there one or more persons with whom [members of a population] can readily identify in a positive or constructive way?'>
                <ControlledRadio
                    label='identity'
                    name='identity'
                    options={yesNoUnsureOptions}
                />
            </FormCard>

            <FormCard label='Multilingual' required={true} description='Are there languages other than English?'>
                <ControlledRadio
                    label='multilingual'
                    name='multilingual'
                    options={yesNoUnsureOptions}
                />
            </FormCard>

            <FormCard label='Overrall Recommendation' required={true} description='Are there languages other than English?'>
                <ControlledRadio
                    label='recommendation'
                    name='recommendation'
                    options={[
                        {value: 'inclusive', label: 'Inclusive'},
                        {value: 'neutral', label: 'Neutral', tooltip: 'Important note: this does NOT mean a book that has both inclusive and questionable qualities, or a book that is on the fence. It is a book that is neither inclusive nor questionable / harmful. For example, an ABCs book. While we would not typically catalog these books, this label is intended for books that may look inclusive but are not upon review, or books that may look harmful but are not upon review.'},
                        {value: 'questionable', label: 'Questionable / Harmful'}
                    ]}
                />
            </FormCard>

            <FormCard label='Review' required={true} description='Please write a 1-2 paragraph review explaining your decision.'>
                <ControlledTextField 
                    name='review'
                    multiline={true}
                />
            </FormCard>
        </>
    )
}